import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DarkModeState {
    isDark: boolean;
}


const initialState: DarkModeState = {
    isDark:
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
}

const themeModeSlice = createSlice({
    name: "themeModeSlice",
    initialState,
    reducers: {
         toggleThemeMode: (state, action: PayloadAction<string>) => {
            const update = !state.isDark;
             console.log("themeModeSlice", action.payload);
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

export const { toggleThemeMode } = themeModeSlice.actions;
export default themeModeSlice;