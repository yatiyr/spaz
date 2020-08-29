import {Point} from '@projectstorm/geometry';

import ZoomAction from './actions/ZoomAction';

import CreateEngine, {
    DiagramModel, DiagramEngine,
} from '@projectstorm/react-diagrams';


export class SpazDiagramEngine {

    engine: DiagramEngine;
    model: DiagramModel;

    constructor() {

        this.engine = CreateEngine({
            registerDefaultDeleteItemsAction: false,
            registerDefaultZoomCanvasAction: false,
        })
        
        this.model = new DiagramModel();

        this.initialize();
        
    }

    public getEngine(): DiagramEngine {
        return this.engine;
    }

    initialize(): void {
        
        const actions = [
            new ZoomAction(),
        ];
        actions.forEach(action => this.engine.getActionEventBus().registerAction(action));
    }

}