/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import { WorkspaceContext, ThemeContext } from "../../../../context/Contexts";
import FolderTree from '../../../../utils/FolderTree';
import File from './File';
import Folder from './Folder';

type State = {
    folderPath: string;
    folderSelected: boolean;
    folderExpanded: boolean;
}

type Props = {

}

class FileTree extends Component<Props, State>{

    constructor(props) {
        super(props);
        this.state = {
            folderPath: "FileTree",
            folderSelected: true,
            folderExpanded: true,
        }

        this.renderPage = this.renderPage.bind(this);
        this.triggerExpansion = this.triggerExpansion.bind(this);
    }

    public triggerExpansion() {
        this.setState({folderExpanded: !this.state.folderExpanded});
    }

    public renderPage(path, func) {

        if(path !== "*") {
            var dirNameFinderRegex = /(\/|\\)(?!.*[\r\n]*.*\1)/mgu;
            var lastIndex = path.search(dirNameFinderRegex);
            var dirName = path.substr(lastIndex + 1, path.length)
            var fileTree = new FolderTree(path, dirName);
            fileTree.build();
            console.log(fileTree);
            var id = 0;
            var items = fileTree.items.map((node) => (
                node.isDirectory ? <Folder path={node.path} node={node} id={id++}/> : <File path={node.path} node={node} id={id++}/>
            ))

            return(
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div className={`filetreeContainer ${theme}__filetreeContainer`}>
                            <div className={`filetreeContainer__TreeHeading ${theme}__filetreeContainer__TreeHeadinh`} onClick={this.triggerExpansion}>{dirName}</div>
                            <div className={`filetree ${theme}__filetree ${this.state.folderExpanded ? "" : 'filetree__shrinked' }`}>{items}</div>    
                        </div>                    
                    )}
                </ThemeContext.Consumer>
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