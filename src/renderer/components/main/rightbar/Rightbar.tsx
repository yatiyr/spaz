/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import { ThemeContext } from "../../../context/Contexts";


class Rightbar extends Component {

    render() {
        return(
            <ThemeContext.Consumer>
                { ({theme}) => (
                    <div className={`rightbar ${theme}__rightbar`}>rightbar</div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default hot(Rightbar);