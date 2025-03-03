
import './App.css';

import axios from "./config/axios";
import {Link, useLocation} from "react-router-dom";
import Router from "./config/router";
import {ThemeProvider} from "styled-components";
import useThemeMode from "./hooks/useThemeMode";
import {useEffect} from "react";




function App() {


  return (

        <Router/>
  );
}

export default App;
