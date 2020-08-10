/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Logo from '../../../../public/img/icons/spaz_icon.svg';
class Properties extends Component {

    render() {
        return(
            <div className="header__properties">
                <div className="header__logoDiv"><Logo className="header__logoDiv__logo"/></div>
                <div className="header__properties__prop">
                    <div className="header__properties__prop__name">
                        File
                    </div>
                </div>
                <div className="header__properties__prop">
                    <div className="header__properties__prop__name">
                        Edit
                    </div>
                </div>
                <div className="header__properties__prop">
                    <div className="header__properties__prop__name">
                        View
                    </div>
                </div>
                <div className="header__properties__prop">
                    <div className="header__properties__prop__name">
                        Window
                    </div>
                </div>
                <div className="header__properties__prop">
                    <div className="header__properties__prop__name">
                        Help
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(Properties);