import {configureStore} from "@reduxjs/toolkit";
import themeModeSlice from "./reducers/themeModeSlice.ts";

const store = configureStore({
    reducer: {
        dark: themeModeSlice.reducer,
    }
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//RootState는 사용하지않으면 useSelector 혹은 connect함수의 첫번째 콜백함수를 사용할 때
//
// 받아오는 state의 type을 알수 없어지기 때문에 반드시 지정해주어야하는 부분이라는 점



