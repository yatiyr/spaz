/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component, RefObject, Props, createRef} from 'react';
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { ThemeContext } from "../../../../context/Contexts";
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import ReactDOM from "react-dom";
import {SpazDiagramEngine} from './SpazDiagramEngine';

class Diagram extends Component<any,any> {
    spazEngine: any;
    constructor(props) {
        super(props);
        this.state = {
        }

        this.spazEngine = new SpazDiagramEngine();
        this.initializeEngine();

    }


    componentDidMount() {
    }

    initializeEngine() {

        var node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
        var port1 = node1.addOutPort('Out');
        node1.setPosition(100,100);

        var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
        var port2 = node2.addInPort('In');
        node2.setPosition(400,100);

        var node3 = new DefaultNodeModel('Node 3', 'rgb(192,255,0)');
        node3.setPosition(200,300);

        var node4 = new DefaultNodeModel('Node 4', 'rgb(0,123,200)');
        node4.setPosition(400,400);

        var link1 = port1.link(port2);

        this.spazEngine.model.addAll(node1,node2,link1,node3,node4);

        this.spazEngine.engine.setModel(this.spazEngine.model);

        this.spazEngine.model.registerListener({})

    }

    render() {
        return (
            <CanvasWidget engine={this.spazEngine.engine}/>
        )
    }


}

export default hot(Diagram);