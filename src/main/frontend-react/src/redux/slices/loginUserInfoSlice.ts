import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface usernameState {
    username : string;
}

const initialState: usernameState = {
    username: '',
}


const loginUserInfoSlice = createSlice({
    name: "loginUserInfoSlice",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        clearUsername: (state) => {
            state.username = '';
        }
    }

});
export const {setUsername, clearUsername} = loginUserInfoSlice.actions;
export default loginUserInfoSlice;




