import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";

import Page2 from "../pages/Page2";
import Page1 from "../pages/Page1";
import HeaderSideMenu from "../components/layout/HeaderSideMenu";

const Router = () => {
    return (
        <Routes>
            <Route>
            <Route path="/" element={<Login/>}></Route>
            </Route>

            <Route element={<HeaderSideMenu/>}>
                <Route path="/page1" element={<Page1/>}></Route>
                <Route path="/page2" element={<Page2/>}></Route>
            </Route>
        </Routes>

    );
};
export default Router;