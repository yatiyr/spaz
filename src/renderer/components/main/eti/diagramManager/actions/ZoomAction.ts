/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-empty */
/* eslint-disable no-var */
import { WheelEvent } from 'react';

import {Action, ActionEvent, InputType, Mapping} from '@projectstorm/react-canvas-core';


export default class ZoomAction extends Action {

    constructor() {
        super({
            type: InputType.MOUSE_WHEEL,
            // @ts-ignore
            fire: ({event}: ActionEvent<WheelEvent>) => {


                const model = this.engine.getModel();

                model.getLayers().forEach(layer => layer.allowRepaint(false));

                const zoom = {
                    max: 100,
                    value: 1,
                    step: 5,
                }

                var zoomLevel = model.getZoomLevel();
                    
                if((event.deltaY < 0 && zoomLevel < 300)) {
                    zoom.value = zoom.value >= zoom.max ? zoom.max : zoom.value + zoom.step;
                    model.setZoomLevel(zoomLevel + zoom.value);
                }
                else if(event.deltaY > 0 && zoomLevel > 50) {
                    zoom.value = zoom.value >= zoom.max ? zoom.max : zoom.value + zoom.step;
                    model.setZoomLevel(zoomLevel - zoom.value);
                }

                var zoomFactor = zoomLevel/100;
                const boundRect = event.currentTarget.getBoundingClientRect();
                const clientWidth = boundRect.width;
                const clientHeight = boundRect.height;

                const clientX = event.clientX - boundRect.left;
                const clientY = event.clientY - boundRect.top;

                const horizontalFactor = (clientX - model.getOffsetX())/ (zoomFactor) / clientWidth;
                const verticalFactor   = (clientY - model.getOffsetY())/ (zoomFactor) / clientHeight;

                const newZoomLevel = model.getZoomLevel();
                const newZoomFactor = newZoomLevel/100;
                const widthDiff  = clientWidth * (newZoomFactor) - clientWidth * (zoomFactor);
                const heightDiff = clientHeight * (newZoomFactor) - clientHeight * (zoomFactor);

                model.setOffset(
                    model.getOffsetX() - widthDiff * horizontalFactor,
                    model.getOffsetY() - heightDiff * verticalFactor
                );

                this.engine.repaintCanvas();

                model.getLayers().forEach(layer => layer.allowRepaint(true));
            },
        });
    }

}