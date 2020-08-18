/* eslint-disable @typescript-eslint/no-empty-function */
// TODO THEME BILGISI TUTAN CONTEX YARATILACAK

import React from "react";

export const ThemeContext = React.createContext({
    theme: "default_light",
    toggleTheme: (string) => {},
});

