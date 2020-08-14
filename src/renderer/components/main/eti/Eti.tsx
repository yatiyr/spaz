/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component, RefObject, Props, createRef} from 'react';
import Cesium from './Cesium';
import 'cesiumSource/Widgets/widgets.css';

const cesium = require('cesiumSource/Cesium');
import { Viewer, CesiumInspector } from 'cesium';

class Eti extends Component {


    public componentDidMount(): void {}

    render() {
        return(
            <div className="eti default_light__eti">
                <div className="eti__header default_light__eti__header">
                    eti header
                </div>
                <div className="eti__container default_light__eti__container">
                    <Cesium/>
                </div>
                <div className="eti__termint default_light__eti__termint">
                    eti__termint
                </div>
            </div>
        )
    }
}

export default hot(Eti);