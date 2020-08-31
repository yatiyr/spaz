import { NodeModel, NodeModelGenerics, PortModelAlignment } from '@projectstorm/react-diagrams';
import { ModulePortModel } from './ModulePortModel';

export interface ModuleModelGenerics {
    PORT: ModulePortModel;
}

export class ModuleModel extends NodeModel<NodeModelGenerics & ModuleModelGenerics> {

    constructor() {
        super({
            type: 'module',
        });

        // TODO: PORT EKLEMELERI YAPILABILIR: INCELE

    }
}