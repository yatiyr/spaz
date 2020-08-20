/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component, RefObject, Props, createRef} from 'react';
import Cesium from './Cesium';
import 'cesiumSource/Widgets/widgets.css';
import SplitPane, {Pane} from 'react-split-pane';
import { ThemeContext } from "../../../context/Contexts";

const cesium = require('cesiumSource/Cesium');
import { Viewer, CesiumInspector } from 'cesium';

class Eti extends Component {


    public componentDidMount(): void {}

    render() {

        /*
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

        */

        return(
            <ThemeContext.Consumer>
                { ({theme}) => (
                    <div className={`eti ${theme}__eti`}>
                        <div className={`eti__header ${theme}__eti__header`}>
                            eti header
                        </div>
                        <div className="splitPaneWrapper">
                            <SplitPane style={{position: "relative"}} 
                                    split="horizontal" 
                                    primary="second" 
                                    maxSize={-30} 
                                    minSize={60}
                                    defaultSize={100}
                                    pane2Style={{flex: "0 1 auto"}}
                                    resizerClassName={`${theme}__termint_eti_resizer`}>

                                <div className={`eti__container ${theme}__eti__container`}>
                                    abcd
                                </div>

                                <div style={{flex: "1 1 auto"}} className={`eti__termint ${theme}__eti__termint`}>
                                    eti__termint
                                </div>
                            </SplitPane>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }


}

export default hot(Eti);