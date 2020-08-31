import { LinkModel, PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

export class ModulePortModel extends PortModel {
    constructor(alignment: PortModelAlignment) {
        super({
            type: 'module',
            name: alignment,
            alignment: alignment,
        });

    }

    createLinkModel(): LinkModel {
        return new DefaultLinkModel();
    }
}