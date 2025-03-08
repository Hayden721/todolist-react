import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import themeModeSlice from "./slices/themeModeSlice.ts";
import loginUserInfoSlice from "./slices/loginUserInfoSlice.ts";
import persistReducer from "redux-persist/lib/persistReducer";
import {persistStore} from "redux-persist";

// persist 설정
const persistConfig = {
    key: 'root',
    storage,
}

const rootReducers = combineReducers({
    username: loginUserInfoSlice.reducer,
    dark: themeModeSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store);


export default store;

// RootState와 AppDispatch 타입 추론
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//RootState는 사용하지않으면 useSelector 혹은 connect함수의 첫번째 콜백함수를 사용할 때
//
// 받아오는 state의 type을 알수 없어지기 때문에 반드시 지정해주어야하는 부분이라는 점



