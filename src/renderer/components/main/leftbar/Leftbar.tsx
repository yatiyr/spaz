/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Selector from './Selector';
import { ThemeContext } from "../../../context/Contexts";


type State = {
    RenderMode: string;
    showContent: boolean;
}

type Props = {
    stateHandler: Function;
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
        this.props.stateHandler(showPage, whichPage);
    }

    public givePageToRender() {
        return this.state.RenderMode;
    }

    render() {
        return(
            <ThemeContext.Consumer>
                { ({theme}) => (
                    <div className={`leftbar ${theme}__leftbar`}>
                        <Selector stateHandler={this.handleSelectionChange}/>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default hot(Leftbar);