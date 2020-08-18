/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {hot} from "react-hot-loader/root";
import React, {Component} from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import {ThemeContext} from "../context/Contexts";


type Props = {}

type Theme = {theme: string;
              toggleTheme: (string) => void;}

type State = {themeSettings: Theme};


class App extends Component<Props, State> {
  toggleTheme: (string) => void;

  constructor(props) {
    super(props);

    this.toggleTheme = (name) => {
      this.setState(state => ({
        themeSettings: {theme: "cinar_light",
                        toggleTheme: name}
      }));
      console.log(this.state);
    };

    this.state = {
      themeSettings: {
        theme: "default_light",
        toggleTheme: this.toggleTheme
      },

    }

    //this.toggleTheme = this.toggleTheme.bind(this);
  }

  render() {
    return(
      <div className="content">
        <ThemeContext.Provider value={this.state.themeSettings}>
          <Header/>
          <Main/>
          <Footer/>
        </ThemeContext.Provider>
    </div>      
    )
  }

}

export default hot(App);