import {configureStore} from "@reduxjs/toolkit";
import themeModeSlice from "./reducers/themeModeSlice";

export default configureStore({
    reducer: {
        dark: themeModeSlice.reducer,
    }
})