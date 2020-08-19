/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';

import Eti from './eti/Eti';
import Leftbar from './leftbar/Leftbar';
import Rightbar from './rightbar/Rightbar';
import SplitPane, {Pane} from "react-split-pane";
import LeftBarContent from './leftbar/LeftbarContent'
import { ThemeContext } from "../../context/Contexts";

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

        this.setSelection = this.setSelection.bind(this);
    }

    public setSelection(element) {

        // If element is clicked again
        if(element === this.state.RenderMode) {
            this.setState({RenderMode: element, showContent: !this.state.showContent}, () => {
                console.log(this.state);
            })
        }
        else {
            this.setState({RenderMode: element, showContent: true}, () => {
                console.log(this.state);
            })
        }
    }

    public element() {

        if(this.state.showContent) {
            return (
                <ThemeContext.Consumer>
                    { ({theme}) => (
                        <div className="main">
                            <Leftbar stateHandler={this.setSelection}/>
                            <div className="splitPaneWrapper">
                                <SplitPane resizerClassName={`${theme}__leftbar_main_resizer`}
                                        minSize={75}
                                        maxSize={-200}>
                                    <LeftBarContent whichPage={this.state.RenderMode} showPage={this.state.showContent}/>
                                    <Eti/>                                                                             
                                </SplitPane>
                            </div>
                            <Rightbar/>
                        </div>  
                    )}
                </ThemeContext.Consumer>       
            )
        }
        else {
            return (
                <div className="main">
                    <Leftbar stateHandler={this.setSelection}/>
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