import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {toggleThemeMode} from "../redux/reducers/themeModeSlice";

export let useDark = [false, () => {

}];
const useThemeMode = () => {
    const isDark = useSelector(((state) => state.dark.isDark));
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark]);


    const onToggleThemeMode = () => {
        dispatch(toggleThemeMode());
    };



    return [isDark, onToggleThemeMode];

}

export default useThemeMode;


