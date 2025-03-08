import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {toggleThemeMode} from "../redux/slices/themeModeSlice.ts";
import {RootState} from "../redux/store.ts";

export type useDark = [boolean, (text: string) => void];

const useThemeMode = (): useDark => {
    const isDark = useSelector(((state: RootState) => state.dark.isDark));
    const dispatch = useDispatch();
    useEffect(() => {
        if(isDark) {
            localStorage.theme === 'dark';
            document.documentElement.setAttribute("data-theme", "dark");
            console.log("useEffect isDark true: ", isDark);
        }else {
            localStorage.theme === 'light';
            document.documentElement.setAttribute("data-theme", "light");
            console.log("useEffect isDark false: ", isDark);
        }
    }, [isDark]);


    const onToggleThemeMode = (text: string): void => {
        dispatch(toggleThemeMode(text));
    };



    return [isDark, onToggleThemeMode];

}

export default useThemeMode;


