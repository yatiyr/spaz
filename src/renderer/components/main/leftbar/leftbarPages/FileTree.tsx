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
import FolderSymbol from "../../../../../../public/img/icons/folderSymbol.svg"

type State = {
    folderPath: string;
    folderSelected: boolean;
    folderExpanded: boolean;
    folderChanged: boolean;
    items: any[];
    dirName: string;
}

type Props = {

}

class FileTree extends Component<Props, State>{

    constructor(props) {
        super(props);
        this.state = {
            folderPath: "FileTree",
            folderSelected: false,
            folderExpanded: true,
            folderChanged: false,
            items: [],
            dirName: "",
        }

        this.renderPage = this.renderPage.bind(this);
        this.triggerExpansion = this.triggerExpansion.bind(this);
    }


    public handleItemBuild(path) {
        var dirNameFinderRegex = /(\/|\\)(?!.*[\r\n]*.*\1)/mgu;
        var lastIndex = path.search(dirNameFinderRegex);
        var dirName = path.substr(lastIndex + 1, path.length)
        var fileTree = new FolderTree(path, dirName);
        fileTree.build();
        var id = 0;
        var itemArray: any[];
        itemArray = fileTree.items.map((node) => 
        (node.isDirectory ? <Folder path={node.path} node={node} key={id++} depth={node.depth}/> : 
                            <File path={node.path} node={node} key={id++} depth={node.depth}/>))
        this.setState({folderPath: path, items: itemArray, folderSelected: true, dirName: dirName});        
    }

    public triggerExpansion() {
        this.setState({folderExpanded: !this.state.folderExpanded});
    }

    // TODO: BUNUNLA UGRAS EVDE ONEMLI!! HATIRLARSIN BAKINCA. KIB BYE
    public handleItemRender() {
        
    }

    public renderPage(path, func) {

        if(path !== "*") {

            if(!this.state.folderSelected) {
                this.handleItemBuild(path);
            }
            else if(this.state.folderPath !== path) {

                // Clear items and load new items
                this.setState({items: []}, () => {
                    this.handleItemBuild(path); 
                })
            }

            return(
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div className={`filetreecontainer ${theme}__filetreecontainer`}>
                            <div className={`filetreecontainer__treeheading ${theme}__filetreecontainer__treeheading ${this.state.folderExpanded ? 'filetreecontainer__treeheading__shadowed' : '' }`} onClick={this.triggerExpansion}>
                                <div className={`filetreecontainer__treeheading__namesymbolgroup ${theme}__filetreecontainer__treeheading__namesymbolgroup`}>
                                    <div className={`filetreecontainer__treeheading__namesymbolgroup__symbol ${theme}__filetreecontainer__treeheading__namesymbolgroup__symbol`}>
                                        <FolderSymbol className={`filetreecontainer__treeheading__namesymbolgroup__symbol__svg__folder${this.state.folderExpanded ? "Expanded" : "Shrinked"} ${theme}__filetreecontainer__treeheading__namesymbolgroup__symbol__svg__folder${this.state.folderExpanded ? "Expanded" : "Shrinked"}`}/>
                                    </div>                                    
                                    <div className={`filetreecontainer__treeheading__namesymbolgroup__name ${theme}__filetreecontainer__treeheading__namesymbolgroup__name`}>
                                        {this.state.dirName}
                                    </div>
                                </div>
                                <div className={`filetreecontainer__treeheading__choices ${theme}__filetreecontainer__treeheading__choices`}>
                                </div>
                            </div>
                            <ul className={`filetree ${theme}__filetree ${this.state.folderExpanded ? "" : 'filetree__shrinked' }`}>{this.state.items}</ul>    
                        </div>                    
                    )}
                </ThemeContext.Consumer>
            )
        }
        else {
            return(
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div className="filetree__folderselectpart">
                            <div className="filetree__folderselectpart__folderselectionexplanation">
                                <div className="filetree__folderselectpart__folderselectionexplanation__overflowheading">
                                    <p>A folder has not been opened yet</p>
                                </div>
                                <div className="filetree__folderselectpart__folderselectionexplanation__overflowparagraph">
                                    <p>In order to browse source files, you have to open a folder. This folder is going to be your workspace.</p>
                                </div>
                            </div>
                            <div className="filetree__folderselectpart__buttonwrapper" onClick={() => (func())}><div className={`filetree__folderselectpart__folderselectbutton ${theme}__filetree__folderselectpart__folderselectbutton `}>Select Folder</div></div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )
        }

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