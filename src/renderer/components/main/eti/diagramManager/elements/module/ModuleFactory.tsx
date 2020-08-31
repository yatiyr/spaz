/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {ModuleWidget} from './ModuleWidget';
import {ModuleModel} from './ModuleModel';
import * as React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';


export class ModuleFactory extends AbstractReactFactory<ModuleModel, DiagramEngine> {
    constructor() {
        super('module');
    }

    generateReactWidget(event): JSX.Element {
        return <ModuleWidget engine={this.engine} size={50} node={event.model} />;
    }

    generateModel(event) {
        return new ModuleModel();
    }
    
}