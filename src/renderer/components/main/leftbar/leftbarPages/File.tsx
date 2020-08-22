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
    node: FolderTree;
    id: number;
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
    }

    render() {

        return(
            <ThemeContext.Consumer>
                { ({theme}) => (
                    <div className={`filetree__row ${theme}__filetree__row`} id={`${this.props.id}`}>
                        <div className={`filetree__row__namegroup ${theme}__filetree__row__namegroup`}>
                            <div className={`filetree__row__namegroup__indentation ${theme}__filetree__row__namegroup__indentation`}>
                                <FolderIndentation className={`filetree__row__namegroup__indentation__svg ${theme}__filetree__row__namegroup__indentation__svg`}/>
                                <FolderIndentation className={`filetree__row__namegroup__indentation__svg ${theme}__filetree__row__namegroup__indentation__svg`}/>
                            </div>
                            <div className={`filetree__row__namegroup__symbol ${theme}__filetree__row__namegroup__symbol`}>
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

export default hot(File);