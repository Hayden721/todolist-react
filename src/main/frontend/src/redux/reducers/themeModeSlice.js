import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState= {
    isDark:
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),

}

const themeModeSlice = createSlice({
    name: "themeModeSlice",
    initialState,
    reducers: {
         toggleThemeMode: (state) => {
            const update = !state.isDark;
            if(update) {
                localStorage.theme = "dark";
                // console.log("다크모드", update);
            }else {
                localStorage.theme = "light";
                // console.log("라이트모드", update);
            }
            state.isDark = update;
        },
    },
})

export let { toggleThemeMode } = themeModeSlice.actions;
export default themeModeSlice;