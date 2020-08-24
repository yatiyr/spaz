/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import FolderTree from '../../../../utils/FolderTree';
import { ThemeContext } from "../../../../context/Contexts";
import FolderIndentation from "../../../../../../public/img/icons/fileTreeIndentation.svg"
import FolderSymbol from "../../../../../../public/img/icons/folderSymbol.svg"
import File from './File';

type Props = {
    path: string;
    node: FolderTree;
    key: number;
    depth: number;
}

type State = {
    isExpanded: boolean;
    itemsLoaded: boolean;
    items: any[];
}

class Folder extends Component<Props,State> {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
            itemsLoaded: false,
            items: [],
        }

        this.toggleExpansion = this.toggleExpansion.bind(this);
    }

    toggleExpansion() {

        if(!this.state.itemsLoaded) {
            var dirNameFinderRegex = /(\/|\\)(?!.*[\r\n]*.*\1)/mgu;
            var lastIndex = this.props.path.search(dirNameFinderRegex);
            var dirName = this.props.path.substr(lastIndex + 1, this.props.path.length)
            var fileTree = new FolderTree(this.props.path, dirName, this.props.depth);
            fileTree.build();
            var id = 0;
            var itemArray: any[];
            itemArray = fileTree.items.map((node) => 
            (node.isDirectory ? <Folder path={node.path} node={node} key={id++} depth={node.depth}/> : 
                                <File path={node.path} node={node} key={id++} depth={node.depth}/>))

            this.setState({items: itemArray, itemsLoaded: true});
        }

        this.setState({isExpanded: !this.state.isExpanded});

    }

    giveIndentation(theme) {
        var indentation: any[];

        indentation = [];

        for(var i = 0; i<this.props.depth; i++) {
            if(i == 0) {
                indentation.push(
                    <div className={`filetree__row__namegroup__indentation ${theme}__filetree__row__namegroup__indentation`}>
                        <div className={`filetree__row__namegroup__indentation__svg ${theme}__filetree__row__namegroup__indentation__svg`}/>
                    </div>
                )
            }
            else {
                indentation.push(
                    <div className={`filetree__row__namegroup__indentation ${theme}__filetree__row__namegroup__indentation`}>
                        <FolderIndentation className={`filetree__row__namegroup__indentation__svg ${theme}__filetree__row__namegroup__indentation__svg`}/>
                    </div>
                )                
            }
        }

        return indentation;
    }

    render() {

        return(
            <ThemeContext.Consumer>
                { ({theme}) => (
                    <div className="filetree__folderwrapper">
                        <li className={`filetree__row ${theme}__filetree__row`} key={`${this.props.path}`} onClick={this.toggleExpansion}>
                            <div className={`filetree__row__namegroup ${theme}__filetree__row__namegroup`}>
                                {this.giveIndentation(theme)}
                                <div className={`filetree__row__namegroup__symbol ${theme}__filetree__row__namegroup__symbol`} >
                                    <FolderSymbol className={`filetree__row__namegroup__symbol__svg__folder${this.state.isExpanded ? "Expanded" : "Shrinked"} ${theme}__filetree__row__namegroup__symbol__svg__folder${this.state.isExpanded ? "Expanded" : "Shrinked"}`}/>
                                </div>
                                <span className={`filetree__row__namegroup__name ${theme}__filetree__row__namegroup__name`}>
                                    {this.props.node.name}
                                </span>
                            </div>
                            <div className={`filetree__row__modifier ${theme}__filetree__row__modifier`}>

                            </div>
                        </li>
                        <div className={`filetree__folderwrapper__items ${this.state.isExpanded ? "" : 'filetree__folderwrapper__items__shrinked'}`}>
                            {this.state.isExpanded ? this.state.items : ""}
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }



}


export default hot(Folder);