/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React from "react";

import Header from "./header/Header"
import Main from "./main/Main"
import Footer from "./footer/Footer"

export default hot((): JSX.Element => 
    (
        <div className="content">
          <Header/>
          <Main/>
          <Footer/>
        </div>
    ));