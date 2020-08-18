/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import { ThemeContext } from "../../context/Contexts";

const remote = require('electron').remote;

type Props = {}
type State = {focused: boolean};

class Footer extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
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
    }

    render() {
        return(
            <ThemeContext.Consumer>
            { ({theme}) => (
            <div className={`footer ${theme}__footer ${this.state.focused ? "footer__focused" : ""}`}>a</div>
            )}
            </ThemeContext.Consumer>
        )
    }
}

export default hot(Footer);