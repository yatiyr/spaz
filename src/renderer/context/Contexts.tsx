/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

export const ThemeContext = React.createContext({
    theme: "default_light",
    toggleTheme: (string) => {},
});

export const WorkspaceContext = React.createContext({
    folderPath: "addFolderPath",
    changePath: (any) => {},
    pathSelected: false
})

