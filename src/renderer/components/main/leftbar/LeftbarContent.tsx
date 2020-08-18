/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import { ThemeContext } from "../../../context/Contexts";

type State = {

}

type Props = {
    showPage: boolean;
    whichPage: string;
}

class LeftbarContent extends Component<Props, State> {

    constructor(props) {
        super(props);

        console.log(this.props)
    }

    public element() {

        if(this.props.showPage) {
            return (
                <ThemeContext.Consumer>
                    { ({theme} ) => (
                        <div className={`leftbar__content ${theme}__leftbar__content`}>
                            <div className="leftbar__content__data">
                                {this.props.whichPage}
                            </div>
                        </div>    
                    )}
                </ThemeContext.Consumer>        
            )
        }
        else {
            return ("")
        }
    }
    
    render() {
        return(
            this.element()
        )
    }
}

export default hot(LeftbarContent);