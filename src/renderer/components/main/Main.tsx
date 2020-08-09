/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';

import Eti from './eti/Eti'
import Leftbar from './leftbar/Leftbar'
import Rightbar from './rightbar/Rightbar'

class Main extends Component {

    render() {
        return(
            <div className="main">
                <Leftbar/>
                <Eti/>
                <Rightbar/>
            </div>
        )
    }
}

export default hot(Main);