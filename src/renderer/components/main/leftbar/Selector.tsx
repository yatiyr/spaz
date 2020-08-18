/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component, DOMElement} from 'react';

import Explorer from '../../../../../public/img/icons/files.svg';
import Search from '../../../../../public/img/icons/magnifier.svg';

import User from '../../../../../public/img/icons/user.svg';
import Settings from '../../../../../public/img/icons/settings.svg';
import { TouchBarSlider } from "electron";
import { ThemeContext } from "../../../context/Contexts";

type Element = {
    active: boolean;
}

type Props = {
    stateHandler: Function;
}

type State = {
    Active: string;
    showContent: boolean;
}

class Selector extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            Active: "FileTree",
            showContent: true,
        };
        this.setSelection = this.setSelection.bind(this);
        this.handleSelectionStyle = this.handleSelectionStyle.bind(this);
    }


    public setSelection(element) {
        this.props.stateHandler(element);
    }

    public handleSelectionStyle(element) {
        if(element === this.state.Active) {
            return "leftbar__selector__element__active";
        }
        else {
            return "";
        }
    }

    render() {

        return(
            <ThemeContext.Consumer>
                { ({theme}) => (
                    <div className={`leftbar__selector ${theme}__leftbar__selector`}>
                        <div className="selector__group">
                            <div className={`leftbar__selector__element ${theme}__leftbar__selector__element`}  id="FileTree" onClick={() => this.setSelection("FileTree")}>
                                <Explorer  className="leftbar__selector__element__icon"/>
                            </div>
                            <div className={`leftbar__selector__element ${theme}__leftbar__selector__element`} id="Find" onClick={() => this.setSelection("Find")}>
                                <Search className="leftbar__selector__element__icon"/>
                            </div>
                        </div>
                        <div className="selector__group">
                            <div className={`leftbar__selector__element ${theme}__leftbar__selector__element`} id="User">
                                <User className="leftbar__selector__element__icon"/>
                            </div>
                            <div className={`leftbar__selector__element ${theme}__leftbar__selector__element`} id="Settings">
                                <Settings className="leftbar__selector__element__icon"/>
                            </div>                    
                        </div>
                    </div>                    
                )}
            </ThemeContext.Consumer>         
        )
    }
}

export default hot(Selector);