/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Grow from '../../../../public/img/icons/project.svg';
import Shrink from '../../../../public/img/icons/module_icon.svg';

const remote = require('electron').remote;

class MinifierButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            state: false,
        }
    }

    componentDidMount() {
        const electronw = remote.getCurrentWindow();
        electronw.on('maximize', () => {
            console.log('asfdasdas');
            this.setState({state: true});
        });
        electronw.on('unmaximize', () => {
            this.setState({state:false});
        });
    }

    public handleMinify() {
        var window = remote.getCurrentWindow();
        
        if(!window.isMaximized()) {
            this.setState({state: false});
            window.maximize();
        }
        else {
            this.setState({state: true})
            window.unmaximize();
        }
    }

    render() {

        var window = remote.getCurrentWindow();

        if(!window.isMaximized()) {
            return(
                <div className="header__buttons__btnMinifier" onClick={this.handleMinify.bind(this)}>
                    <div className="header__buttons__iconDiv">
                        <Shrink className="header__buttons__iconDiv__icon"/> 
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="header__buttons__btnMinifier" onClick={this.handleMinify.bind(this)}>
                    <div className="header__buttons__iconDiv">
                        <Grow className="header__buttons__iconDiv__icon"/> 
                    </div>
                </div>
            )
        }

    }
}

export default hot(MinifierButton);