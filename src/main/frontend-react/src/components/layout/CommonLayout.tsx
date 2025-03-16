import { Outlet } from "react-router-dom";
import HeaderSideMenu from "./HeaderSideMenu.tsx";

// 레이아웃
const CommonLayout = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-base-300">
            <HeaderSideMenu/>
            <div className={"flex flex-col min-h-screen items-center m-auto w-5/6"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default CommonLayout;