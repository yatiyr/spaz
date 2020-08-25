/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component, RefObject, createRef} from 'react';
import 'cesiumSource/Widgets/widgets.css';

const cesium = require('cesiumSource/Cesium');
import { Viewer, CesiumInspector } from 'cesium';

class Cesium extends Component {

    private cesiumContainer: RefObject<HTMLDivElement>;

    public constructor(props) {
        super(props);
        this.cesiumContainer = createRef();
    }

    public componentDidMount(): void {
        if (this.cesiumContainer.current) {
            const viewer: Viewer = new cesium.Viewer(this.cesiumContainer.current, {
                imageryProvider: new cesium.TileMapServiceImageryProvider({
                    url: cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
                }),
                baseLayerPicker: false,
                geocoder: false,
                vrButton: false,
                infoBox: false,
                navigationHelpButton: false,
                homeButton: false,
                timeline: false,
                sceneModePicker: false,
                fullscreenButton: false,
                animation: false                   
            });

            viewer.cesiumWidget.creditContainer.parentNode?.removeChild(
                viewer.cesiumWidget.creditContainer);

        }
    }

    render() {
        return(
                <div className="eti__container" id="container">
                    <div style={{width: "100%", height: "100%", position: "absolute"}} id='cesiumContainer' ref={this.cesiumContainer} />
                </div>
        )
    }
}

export default hot(Cesium);