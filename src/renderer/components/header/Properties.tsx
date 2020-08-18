/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Logo from '../../../../public/img/icons/spaz_icon.svg';
import {ThemeContext} from "../../context/Contexts";

type Props = {theme: string;
              cfunc: () => void;}
type State = {}

class Properties extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return(
            <div className="header__properties">
                <div className="header__logoDiv"><Logo className={`header__logoDiv__logo ${this.props.theme}__header__logoDiv__logo`}/></div>
                <div className={`header__properties__prop ${this.props.theme}__header__properties__prop`} onClick={this.props.cfunc}>
                    <div className="header__properties__prop__name">
                        File
                    </div>
                </div>                  
                <div className={`header__properties__prop ${this.props.theme}__header__properties__prop`}>
                    <div className="header__properties__prop__name">
                        Edit
                    </div>
                </div>
                <div className={`header__properties__prop ${this.props.theme}__header__properties__prop`}>
                    <div className="header__properties__prop__name">
                        View
                    </div>
                </div>
                <div className={`header__properties__prop ${this.props.theme}__header__properties__prop`}>
                    <div className="header__properties__prop__name">
                        Window
                    </div>
                </div>
                <div className={`header__properties__prop ${this.props.theme}__header__properties__prop`}>
                    <div className="header__properties__prop__name">
                        Help
                    </div>
                </div>
            </div>
        )
    }
}

export default hot(Properties);