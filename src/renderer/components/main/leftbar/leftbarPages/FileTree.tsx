/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import { WorkspaceContext } from "../../../../context/Contexts";
import FolderTree from '../../../../utils/FolderTree';

const {dialog, getCurrentWindow} = require('electron').remote;

type State = {
    folderPath: string;
    folderSelected: boolean;
}

type Props = {

}

class FileTree extends Component<Props, State>{

    constructor(props) {
        super(props);
        this.state = {
            folderPath: "FileTree",
            folderSelected: true,
        }

        this.renderPage = this.renderPage.bind(this);
    }


    public renderPage(path, func) {

        if(path !== "*") {
            var dirNameFinderRegex = /(\/|\\)(?!.*[\r\n]*.*\1)/mgu;
            var lastIndex = path.search(dirNameFinderRegex);
            var dirName = path.substr(lastIndex + 1, path.length)
            var fileTree = new FolderTree(path, dirName);
            fileTree.build();
            console.log(fileTree);
            return(
                <div>{dirName}</div>
            )
        }
        else {
            return(
                <div onClick={() => (func())}>dosya sec aga!</div>
            )
        }

    }

    componentDidMount() {
        console.log("mounted");
    }


    render() {
        return(
            <WorkspaceContext.Consumer>
                { ({folderPath, changePath}) => ( 
                    this.renderPage(folderPath, changePath)
                )}
            </WorkspaceContext.Consumer>
        )
    }
}

export default hot(FileTree);