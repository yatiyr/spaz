/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';


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
                <div className="leftbar__content default_light__leftbar__content">
                    <div className="leftbar__content__data">
                        <div className="">{this.props.whichPage}</div>
                    </div>
                </div>            
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