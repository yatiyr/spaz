/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Minimize from '../../../../public/img/icons/minus.svg';
import Close from '../../../../public/img/icons/menu_cross.svg';
import MinifierButton from './MinifierButton';

const remote = require('electron').remote;


class RightButtons extends Component {

    public handleMinimize() {
        var window = remote.getCurrentWindow();
        window.minimize();
    }

    public handleMaximize() {
        console.log('maximize bastin');
    }

    public handleClose() {
        var window = remote.getCurrentWindow();
        window.close();
    }

    render() {
        return(
            <div className="header__buttons">
                <div className="header__buttons__btnMinimizer">
                    <div className="header__buttons__iconDiv">
                        <Minimize className="header__buttons__iconDiv__icon" onClick={this.handleMinimize}/> 
                    </div>
                </div>
                <MinifierButton ref="minifierBtn"/>
                <div className="header__buttons__btnClose">
                    <div className="header__buttons__iconDiv">
                        <Close className="header__buttons__iconDiv__icon" onClick={this.handleClose}/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(RightButtons);