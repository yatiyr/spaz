/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';

import Selector from './Selector';
import LeftBarContent from './LeftbarContent'


type State = {
    RenderMode: string;
    showContent: boolean;
}

type Props = {

}

class Leftbar extends Component<Props, State>{

    constructor(props) {
        super(props);
        this.state = {
            RenderMode: "FileTree",
            showContent: true,
        }

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.givePageToRender = this.givePageToRender.bind(this);
    }

    public handleSelectionChange(showPage, whichPage) {
        this.setState({RenderMode: whichPage, showContent: showPage}, ()=> {
            console.log("states passed", showPage + " " + whichPage);
        })
    }

    public givePageToRender() {
        return this.state.RenderMode;
    }

    render() {
        return(
            <div className="leftbar">
                <Selector stateHandler={this.handleSelectionChange}/>
                <LeftBarContent whichPage={this.state.RenderMode} showPage={this.state.showContent}/>
                <div className="leftbar__content__split_handler" id="leftbar_splitter"></div>
            </div>
        )
    }
}

export default hot(Leftbar);