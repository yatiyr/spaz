/* eslint-disable no-empty */
/* eslint-disable no-var */
import { WheelEvent } from 'react';

import {Action, ActionEvent, InputType, Mapping} from '@projectstorm/react-canvas-core';


export default class ZoomAction extends Action {

    constructor(options = {}) {
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

                console.log(event.deltaY);
                    
                if(event.deltaY < 0 && zoomLevel < 300) {
                    zoom.value = zoom.value >= zoom.max ? zoom.max : zoom.value + zoom.step;
                    model.setZoomLevel(zoomLevel + zoom.value);
                    this.engine.repaintCanvas();

                }
                else if(event.deltaY > 0 && zoomLevel > 50) {
                    zoom.value = zoom.value >= zoom.max ? zoom.max : zoom.value + zoom.step;
                    model.setZoomLevel(zoomLevel - zoom.value);
                    this.engine.repaintCanvas();
                }

                model.getLayers().forEach(layer => layer.allowRepaint(true));
            },
        });
    }

}