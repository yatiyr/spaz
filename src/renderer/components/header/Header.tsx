/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Properties from './Properties';
import RightButtons from './RightButtons';

class Header extends Component {

    render() {
        return(
            <div className="header">
                <Properties/>
                <div className="header__heading">Spaz Simulation Runner</div>
                <RightButtons/>
            </div>
        )
    }
}

export default hot(Header);