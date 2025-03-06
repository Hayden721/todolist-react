import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.tsx";
import {Provider} from "react-redux";
import store from "./redux/store.ts";
import HeaderSideMenu from "./components/layout/HeaderSideMenu.tsx";



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  {/* no header page*/}
                  {/*<Route element={<HeaderSideMenu/>}>*/}
                  {/*  <Route path={'/'} element={<App/>}></Route>*/}
                  {/*    /!*<Route path={'/'} element={<App/>}></Route>*!/*/}
                  {/*</Route>*/}
                  {/* header need page */}
                  <Route element={<HeaderSideMenu/>}>
                      <Route path={'/'} element={<App/>}></Route>
                      {/*<Route path={'/'} element={<App/>}></Route>*/}
                  </Route>

              </Routes>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
