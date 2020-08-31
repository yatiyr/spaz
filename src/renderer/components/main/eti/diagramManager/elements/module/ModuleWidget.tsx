import * as React  from 'react';
import { ModuleModel } from './ModuleModel';
import { DiagramEngine, PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';

export interface ModuleWidgetProps {
    node: ModuleModel;
    engine: DiagramEngine;
    size?: number;
}

export class ModuleWidget extends React.Component<ModuleWidgetProps> {

    render() {
        return(
            <div
            className={'diamond-node'}
            style={{
                position: 'relative',
                width: this.props.size,
                height: this.props.size
            }}>
                <svg
                width={this.props.size}
                height={this.props.size}                
                />
            </div>
        );
    }
}