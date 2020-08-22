/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import FolderTree from '../../../../utils/FolderTree';
import { ThemeContext } from "../../../../context/Contexts";
import FolderIndentation from "../../../../../../public/img/icons/fileTreeIndentation.svg"
import FolderSymbol from "../../../../../../public/img/icons/folderSymbol.svg"

type Props = {
    path: string;
    node: FolderTree;
    id: number;
}

type State = {
    isExpanded: boolean;
}

class Folder extends Component<Props,State> {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        }
    }



    render() {

        return(
            <ThemeContext.Consumer>
                { ({theme}) => (
                    <div className={`filetree__row ${theme}__filetree__row`} id={`${this.props.id}`}>
                        <div className={`filetree__row__namegroup ${theme}__filetree__row__namegroup`}>
                            <div className={`filetree__row__namegroup__indentation ${theme}__filetree__row__namegroup__indentation`}>
                                <FolderIndentation className={`filetree__row__namegroup__indentation__svg ${theme}__filetree__row__namegroup__indentation__svg`}/>
                            </div>
                            <div className={`filetree__row__namegroup__symbol ${theme}__filetree__row__namegroup__symbol`} >
                                <FolderSymbol className={`filetree__row__namegroup__symbol__svg__folder${this.state.isExpanded ? "Expanded" : "Shrinked"} ${theme}__filetree__row__namegroup__symbol__svg__folder${this.state.isExpanded ? "Expanded" : "Shrinked"}`}/>
                            </div>
                            <span className={`filetree__row__namegroup__name ${theme}__filetree__row__namegroup__name`}>
                                {this.props.node.name}
                            </span>
                        </div>
                        <div className={`filetree__row__modifier ${theme}__filetree__row__modifier`}>

                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }



}


export default hot(Folder);