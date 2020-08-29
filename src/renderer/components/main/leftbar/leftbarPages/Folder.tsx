/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { hot } from "react-hot-loader/root";
import React, { Component, Fragment } from "react";
import FolderTree from '../../../../utils/FolderTree';
import { ThemeContext } from "../../../../context/Contexts";
import FolderIndentation from "../../../../../../public/img/icons/fileTreeIndentation.svg"
import FolderSymbol from "../../../../../../public/img/icons/folderSymbol.svg"
import File from './File';

type Props = {
    path: string;
    name: string;
    key: number;
    id: number;
    depth: number;
}

type State = {
    items: any[];
    areItemsLoaded: boolean;
    isExpanded: boolean;
}

class Folder extends Component<Props,State> {

    constructor(props) {
        super(props);

        this.state = {
            areItemsLoaded: false,
            isExpanded: false,
            items: [],
        }

        this.toggleExpansion = this.toggleExpansion.bind(this);
    }


    buildChildren() {
        var dirNameFinderRegex = /(\/|\\)(?!.*[\r\n]*.*\1)/mgu;
        var lastIndex = this.props.path.search(dirNameFinderRegex);
        var dirName = this.props.path.substr(lastIndex + 1, this.props.path.length)
        var fileTree = new FolderTree(this.props.path, dirName);
        var fileItems = fileTree.build();
        var childArray: any[] = [];

        for(var i=0;i<fileItems.length;i++) {

            var elem = fileItems[i];

            if(elem.isDirectory) {
                var renderElem = <Folder path={elem.path}
                                         name={elem.name}
                                         key={i}
                                         id={i}
                                         depth={this.props.depth+1}
                                         />
                childArray.push(renderElem);
            }
            else {
                var renderElem = <File path={elem.path}
                                       name={elem.name}
                                       key={i}
                                       id={i}
                                       depth={this.props.depth+1}/>
                childArray.push(renderElem);
            }
        }

        this.setState({items: childArray, areItemsLoaded: true, isExpanded: true})

    }

    toggleExpansion() {

        if(!this.state.isExpanded && !this.state.areItemsLoaded) {
            this.buildChildren();
        }
        else if(!this.state.isExpanded) {
            this.setState({isExpanded: true});
        }
        else {
            this.setState({isExpanded: false});
        }

    }

    giveIndentation(theme) {
        var indentation: any[];

        indentation = [];

        for(var i = 0; i<this.props.depth+1; i++) {
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
                    <Fragment>
                        <li className={`filetree__row ${theme}__filetree__row`} id={`${this.props.path}`} onClick={this.toggleExpansion}>
                            <div className={`filetree__row__namegroup ${theme}__filetree__row__namegroup`}>
                                {this.giveIndentation(theme)}
                                <div className={`filetree__row__namegroup__symbol ${theme}__filetree__row__namegroup__symbol`} >
                                    <FolderSymbol className={`filetree__row__namegroup__symbol__svg__folder${this.state.isExpanded ? "Expanded" : "Shrinked"} ${theme}__filetree__row__namegroup__symbol__svg__folder${this.state.isExpanded ? "Expanded" : "Shrinked"}`}/>
                                </div>
                                <span className={`filetree__row__namegroup__name ${theme}__filetree__row__namegroup__name`}>
                                    {this.props.name}
                                </span>
                            </div>
                            <div className={`filetree__row__modifier ${theme}__filetree__row__modifier`}>

                            </div>
                        </li>
                        {this.state.isExpanded ? this.state.items : ""}
                    </Fragment>
                )}
            </ThemeContext.Consumer>
        )
    }



}


export default hot(Folder);