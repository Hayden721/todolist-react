import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface usernameState {
    username : string;
}

const initialState: usernameState = {
    username: '',
}

// 유저가 로그인 하면 username을 reducer에 저장
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




