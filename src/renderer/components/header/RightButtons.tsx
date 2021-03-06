/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Minimize from '../../../../public/img/icons/minus.svg';
import Close from '../../../../public/img/icons/menu_cross.svg';
import MinifierButton from './MinifierButton';

const remote = require('electron').remote;


type Props = {theme: string};
type State = {};

class RightButtons extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {}
        
    }

    public handleMinimize() {
        var window = remote.getCurrentWindow();
        window.minimize();
    }

    public handleClose() {
        var window = remote.getCurrentWindow();
        window.close();
    }

    render() {
        return(
            <div className="header__buttons">
                <div className={`header__buttons__btnMinimizer ${this.props.theme}__header__buttons__btnMinimizer`}>
                    <div className="header__buttons__iconDiv" onClick={this.handleMinimize}>
                        <Minimize className="header__buttons__iconDiv__icon"/> 
                    </div>
                </div>
                <MinifierButton ref="minifierBtn" theme={this.props.theme}/>
                <div className={`header__buttons__btnClose ${this.props.theme}__header__buttons__btnClose`}>
                    <div className="header__buttons__iconDiv" onClick={this.handleClose}>
                        <Close className="header__buttons__iconDiv__icon"/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(RightButtons);