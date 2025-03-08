import {Outlet} from "react-router-dom";
import HeaderSideMenu from "./HeaderSideMenu.tsx";


const CommonLayout = () => {
    return (
      <>
        <HeaderSideMenu/>
        <Outlet/>
      </>
    );

}

export default  CommonLayout;