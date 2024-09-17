import {Link} from "react-router-dom";
import useThemeMode from "../hooks/useThemeMode";
import {useEffect} from "react";
import ThemeModeToggle from "../components/ThemeModeToggle";



const Login = () => {


    return (

        <div>

            <h1>USERNAME</h1>

            <div className="w-full relative flex flex-col gap-5">

                <div className="w-full relative">
                    <div className="relative">
                        <input type="text" id="default-search"
                               className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed "
                               placeholder="name@pagedone.com" required=""/>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;