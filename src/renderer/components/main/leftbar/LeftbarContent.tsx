/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import { ThemeContext } from "../../../context/Contexts";
import FileTree from './leftbarPages/FileTree';

type State = {

}

type Props = {
    showPage: boolean;
    whichPage: string;
}

class LeftbarContent extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.givePage = this.givePage.bind(this);
    }


    public givePage() {
        switch (this.props.whichPage) {
            case "FileTree":
                return <FileTree/>;
        
            case "Find":
                return <div>WORK ON PROGRESS</div>;
            
            default:
                break;
        }
    }
    public element() {

        if(this.props.showPage) {
            return (
                <ThemeContext.Consumer>
                    { ({theme} ) => (
                        <div className={`leftbar__content ${theme}__leftbar__content`}>
                            <div className={`leftbar__content__data ${theme}__leftbar__content__data`}>
                                <div className={`leftbar__content__data__header ${theme}__leftbar__content__data__header`}>
                                    {this.props.whichPage}
                                </div>
                                {this.givePage()}
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