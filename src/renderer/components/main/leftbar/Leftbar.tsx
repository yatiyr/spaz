/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';

import Selector from './Selector';

class Leftbar extends Component {

    render() {
        return(
            <div className="leftbar">
                <Selector id={1} />
                <div className="leftbar__content">
                    <div className="leftbar__content__data">
                        <div className="">eren</div>
                        <div className="">dere</div>
                    </div>
                    <div className="leftbar__content__split_handler" id="leftbar_splitter">-</div>
                </div>
            </div>
        )
    }
}

export default hot(Leftbar);