import ThemeModeToggle from "../ThemeModeToggle.tsx";
// import { IconName } from "react-icons/fa";
import { IoLogOutOutline } from 'react-icons/io5';

const HeaderSideMenu = () => {


    return (
        <div className="navbar bg-base-200">
            <div className="flex-none">

                <div className="drawer drawer-start">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

                            <li><a>???</a></li>
                            <li><a><IoLogOutOutline size={'30'} />Log out</a></li>
                        </ul>
                    </div>
                </div>


            </div>


            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Todo-List</a>
            </div>
            <div className="flex-none">
                <ThemeModeToggle/>
            </div>


        </div>


    )

};

export default HeaderSideMenu;