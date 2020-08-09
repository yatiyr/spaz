/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component, RefObject, Props, createRef} from 'react';
import 'cesiumSource/Widgets/widgets.css';

const cesium = require('cesiumSource/Cesium');

import { Viewer, CesiumInspector } from 'cesium';



class Eti extends Component {

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

                
            });

            //console.log('cesium viewer = ', viewer);
        }
    }

    render() {
        return(
            <div className="eti">
                <div className="eti__header">
                    eti header
                </div>
                <div className="eti__container" id="container">
                    <div style={{width: "100%", height: "100%"}} id='cesiumContainer' ref={this.cesiumContainer} />
                </div>
                <div className="eti__termint">
                    eti__termint
                </div>
            </div>
        )
    }
}

export default hot(Eti);