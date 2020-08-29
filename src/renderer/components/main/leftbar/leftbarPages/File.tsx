/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import FolderTree from '../../../../utils/FolderTree';
import { ThemeContext } from "../../../../context/Contexts";
import FolderIndentation from "../../../../../../public/img/icons/fileTreeIndentation.svg";

// TODO: REACT HOOKS ILE YENIDEN YAZ

type Props = {
    path: string;
    name: string;
    key: number;
    id: number;
    depth: number;
}

type State = {
    isShownOnEditor: boolean;
    isModified: boolean;
}
class File extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            isShownOnEditor: false,
            isModified: false
        }

        this.isDirectory = this.isDirectory.bind(this);
    }

    public isDirectory() {
        return false;
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
                    <li className={`filetree__row ${theme}__filetree__row`} key={`${this.props.path}`}>
                        <div className={`filetree__row__namegroup ${theme}__filetree__row__namegroup`}>
                            {this.giveIndentation(theme)}
                            <div className={`filetree__row__namegroup__symbol ${theme}__filetree__row__namegroup__symbol`}>

                            </div>
                            <span className={`filetree__row__namegroup__name ${theme}__filetree__row__namegroup__name`}>
                                {this.props.name}
                            </span>
                        </div>
                        <div className={`filetree__row__modifier ${theme}__filetree__row__modifier`}>

                        </div>
                    </li>
                )}
            </ThemeContext.Consumer>
        )
    }


}

export default hot(File);