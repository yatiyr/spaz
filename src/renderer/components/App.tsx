/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import {ThemeContext, WorkspaceContext} from "../context/Contexts";
import FolderTree from "../utils/FolderTree";

const {dialog, getCurrentWindow} = require('electron').remote;

type Props = {}

type Theme = {
    theme:       string;
    toggleTheme: (string) => void;
}

type Workspace = {
    folderPath: string;
    changePath: () => void;
    pathSelected: boolean;
}

type State = {
    themeSettings:     Theme;
    workspaceSettings: Workspace;
};


class App extends Component<Props, State> {
    toggleTheme: (string) => void;
    changePath: () => void;

    constructor(props) {
        super(props);

        this.toggleTheme = (name) => {
            this.setState(state => ({
                themeSettings: {
                    ...state.themeSettings,
                    theme: name}
            }));
        };

        this.changePath = () => {

            dialog.showOpenDialog({properties: ['openDirectory']}).then(result => {

                var pathStr = result.filePaths[0]
                if(result.filePaths[0]) {

                    this.setState(state => ({
                        workspaceSettings: {
                            ...state.workspaceSettings,
                            folderPath: pathStr,
                            pathSelected: true
                        }
                    }));
                }
            })
        };

    

    this.state = {
        themeSettings: {
            theme: "default_dark",
            toggleTheme: this.toggleTheme
        },
        workspaceSettings: {
            folderPath: "*",
            changePath: this.changePath,
            pathSelected: false,
        },
    }
    //this.toggleTheme = this.toggleTheme.bind(this);
  }

  render() {
    return(
        <div className="content">
            <ThemeContext.Provider value={this.state.themeSettings}>
                <WorkspaceContext.Provider value={this.state.workspaceSettings}>
                    <Header/>
                    <Main/>
                    <Footer/>
                </WorkspaceContext.Provider>
            </ThemeContext.Provider>
        </div>      
        )
    }
}

export default hot(App);