import ZoomAction from './actions/ZoomAction';

import CreateEngine, {
    DiagramModel, DiagramEngine, PortModelAlignment,
} from '@projectstorm/react-diagrams';

import { ModuleFactory } from './elements/module/ModuleFactory';
import { ModulePortFactory } from './elements/module/ModulePortFactory';
import { ModuleModel } from './elements/module/ModuleModel';
import { ModulePortModel } from './elements/module/ModulePortModel';

export class SpazDiagramEngine {

    engine: DiagramEngine;
    model: DiagramModel;

    constructor() {

        this.engine = CreateEngine({
            registerDefaultDeleteItemsAction: true,
            registerDefaultZoomCanvasAction: false,
        })

        this.engine
            .getPortFactories()
            .registerFactory(new ModulePortFactory('module', (config) => new ModulePortModel(PortModelAlignment.RIGHT)));
        this.engine
            .getNodeFactories().registerFactory(new ModuleFactory());
        
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