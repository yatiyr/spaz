/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';

import Eti from './eti/Eti';
import Leftbar from './leftbar/Leftbar';
import Rightbar from './rightbar/Rightbar';
import SplitPane, {Pane} from "react-split-pane";
import LeftBarContent from './leftbar/LeftbarContent'

type State = {
    RenderMode: string;
    showContent: boolean;
}

type Props = {

}


class Main extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            RenderMode: "FileTree",
            showContent: true,
        }

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }

    public handleSelectionChange(showPage, whichPage) {
        this.setState({RenderMode: whichPage, showContent: showPage}, ()=> {
            console.log("states passed", showPage + " " + whichPage);
        })
    }

    public element() {

        if(this.state.showContent) {
            return (
                <div className="main">
                    <Leftbar stateHandler={this.handleSelectionChange}/>
                    <div className="splitPaneWrapper">
                        <SplitPane resizerClassName="leftbar_main_resizer_default_light"
                                   minSize={75}
                                   maxSize={-200}>
                            <LeftBarContent whichPage={this.state.RenderMode} showPage={this.state.showContent}/>
                            <Eti/>                                                                             
                        </SplitPane>
                    </div>
                    <Rightbar/>
                </div>         
            )
        }
        else {
            return (
                <div className="main">
                    <Leftbar stateHandler={this.handleSelectionChange}/>
                    <Eti/>
                    <Rightbar/>
                </div>  

            )
        }
    }

    render() {
        return(
            this.element()
        )
    }
}

export default hot(Main);