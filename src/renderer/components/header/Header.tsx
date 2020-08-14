/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Properties from './Properties';
import RightButtons from './RightButtons';

const remote = require('electron').remote;

type Props = {}
type State = {focused: boolean; maximized: boolean};

class Header extends Component<Props,State> {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            maximized: false
        }
    }

    public toggleFocus() {
        this.setState({focused: !this.state.focused})
    }


    componentDidMount() {
        const electronw = remote.getCurrentWindow();
        electronw.on('focus', () => {
            this.setState({focused: true});
        });
        electronw.on('blur', () => {
            this.setState({focused:false});
        });
        electronw.on('maximize', () => {
            this.setState({maximized: true});
        });
        electronw.on('unmaximize', () => {
            this.setState({maximized:false});
        });
    }

    render() {
        return(
            <div className={`header default_light__header ${this.state.focused ? "header__focused" : ""}`}>
                <Properties/>
                <div className={`header__controller ${this.state.maximized ? "header__controller__maximized" : ""}`}>
                    <div className="header__heading default_light__header__heading">Spaz Simulation Runner</div>
                </div>
                <RightButtons/>
            </div>
        )
    }
}

export default hot(Header);