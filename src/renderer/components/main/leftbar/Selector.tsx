/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component, DOMElement} from 'react';

import Explorer from '../../../../../public/img/icons/files.svg';
import Search from '../../../../../public/img/icons/magnifier.svg';

import User from '../../../../../public/img/icons/user.svg';
import Settings from '../../../../../public/img/icons/settings.svg';

type Element = {
    active: boolean;
}


type Props = {id: number}
type State = {
    Explorer: Element;
    Search: Element;
    User: Element;
    Settings: Element;
}

class Selector extends Component<Props, State> {
    ExplorerRef: React.RefObject<HTMLDivElement>;
    SearchRef: React.RefObject<unknown>;

    UserRef: React.RefObject<unknown>
    SettingsRef: React.RefObject<unknown>

    constructor(props) {
        super(props);
        this.state = {
            Explorer: {active: false},
            Search: {active: false},
            User: {active: false},
            Settings: {active: false}            
        }

        this.ExplorerRef = React.createRef();
        this.SearchRef = React.createRef();
        this.UserRef = React.createRef();
        this.SettingsRef = React.createRef();
    }

    public print() {
        console.log(this.props.id);
    }

    render() {

        return(
            
            <div className="leftbar__selector">
                <div className="selector__group">
                    <div ref={this.ExplorerRef} className="leftbar__selector__element leftbar__selector__element__active"  id="Explorer" onClick={this.print.bind(this)}>
                        <Explorer  className="leftbar__selector__element__icon"/>
                    </div>
                    <div className="leftbar__selector__element" id="Search">
                        <Search ref={this.SearchRef} className="leftbar__selector__element__icon"/>
                    </div>
                </div>
                <div className="selector__group">
                    <div className="leftbar__selector__element" id="User">
                        <User ref={this.UserRef} className="leftbar__selector__element__icon"/>
                    </div>
                    <div className="leftbar__selector__element" id="Settings">
                        <Settings ref={this.SettingsRef} className="leftbar__selector__element__icon"/>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default hot(Selector);