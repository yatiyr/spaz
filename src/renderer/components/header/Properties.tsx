/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Logo from '../../../../public/img/icons/spaz_icon.svg';
import {ThemeContext, WorkspaceContext} from "../../context/Contexts";
import ReactDOM from "react-dom";

type Props = {theme: string;
              cfunc: () => void;}
type State = {visibility: boolean}

class Properties extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {visibility: false}
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }


    public toggleVisibility() {
        this.setState({visibility: !this.state.visibility});
    }

    componentDidMount() {
        document.addEventListener('mouseover', this.handleMouseOver, true);
    }

    componentWillUnmount() {
        document.addEventListener('mouseover', this.handleMouseOver, true );
    }

    public handleMouseOver = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if( !domNode || !domNode.contains(event.target)) {
            this.setState({visibility: false});
        }
    }

    render() {
        return(
            <WorkspaceContext.Consumer>
            { ({changePath}) => ( 
                <div className="header__properties">
                    <div className="header__logoDiv"><Logo className={`header__logoDiv__logo ${this.props.theme}__header__logoDiv__logo`}/></div>
                    <div className={`header__properties__prop ${this.props.theme}__header__properties__prop dropdown ${this.props.theme}__dropdown`} onClick={this.toggleVisibility}>
                        <ul className="dropdownbox" style={this.state.visibility ? {visibility: "visible"} : {visibility: "hidden"}}>
                            <div className="dropdownElement"><div className="item">New File</div><div className="item">Ctrl+N</div></div>
                            <div className="dropdownElement" onClick={changePath}><div className="item">New Folder</div><div className="item">Ctrl+F</div></div>
                            <div className="dropdownElement"><div className="item">Nsadsadsasdasdd</div><div className="item">Ct+N</div></div>
                            <div className="dropdownElement"><div className="item">Nsadsadsassadasdd</div></div>
                        </ul>
                        <div className="header__properties__prop__name">
                            File
                        </div>
                    </div>                  
                    <div className={`header__properties__prop ${this.props.theme}__header__properties__prop dropdown ${this.props.theme}__dropdown`} onClick={this.toggleVisibility}>
                        <ul className="dropdownbox" style={this.state.visibility ? {visibility: "visible"} : {visibility: "hidden"}}>
                            <div className="dropdownElement">a</div>
                            <div className="dropdownElement">b</div>
                            <div className="dropdownElement">c</div>
                        </ul>
                        <div className="header__properties__prop__name">
                            Edit
                        </div>
                    </div>
                    <div className={`header__properties__prop ${this.props.theme}__header__properties__prop dropdown ${this.props.theme}__dropdown`} onClick={this.toggleVisibility}>
                        <ul className="dropdownbox" style={this.state.visibility ? {visibility: "visible"} : {visibility: "hidden"}}>
                            <div className="dropdownElement">a</div>
                            <div className="dropdownElement">b</div>
                            <div className="dropdownElement">c</div>
                        </ul>
                        <div className="header__properties__prop__name">
                            View
                        </div>
                    </div>
                    <div className={`header__properties__prop ${this.props.theme}__header__properties__prop dropdown ${this.props.theme}__dropdown`} onClick={this.toggleVisibility}>
                        <ul className="dropdownbox" style={this.state.visibility ? {visibility: "visible"} : {visibility: "hidden"}}>
                            <div className="dropdownElement">a</div>
                            <div className="dropdownElement">b</div>
                            <div className="dropdownElement">c</div>
                        </ul>
                        <div className="header__properties__prop__name">
                            Window
                        </div>
                    </div>
                    <div className={`header__properties__prop ${this.props.theme}__header__properties__prop dropdown ${this.props.theme}__dropdown`} onClick={this.toggleVisibility}>
                        <ul className="dropdownbox" style={this.state.visibility ? {visibility: "visible"} : {visibility: "hidden"}}>
                            <div className="dropdownElement">a</div>
                            <div className="dropdownElement">b</div>
                            <div className="dropdownElement">c</div>
                        </ul>
                        <div className="header__properties__prop__name">
                            Help
                        </div>
                    </div>
                </div>
                )}
            </WorkspaceContext.Consumer>
        )
    }
}

export default hot(Properties);