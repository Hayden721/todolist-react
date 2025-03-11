import ThemeModeToggle from "../components/ThemeModeToggle.tsx";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "../config/axios.ts";
import {useDispatch} from "react-redux";
import {setUsername} from "../redux/slices/loginUserInfoSlice.ts";

const Login: React.FC = () => {

    const [usernameValue, setUsernameValue] = useState<string>('');
    const dispatch = useDispatch();
    console.log("username", usernameValue);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const userCheck = await axios.post('/api/user-check', {usernameValue});
            const checkResult = userCheck.data;

            // console.log("유저 있나? : ", userCheck);
            if(checkResult) {
                navigate('/todo');
                dispatch(setUsername(usernameValue));
            } else {
                alert('존재하지 않는 사용자입니다.');
            }
        } catch (error) {
            console.log('서버 오류 : ', error);
        }
    }

    return (
        <div className={"bg-base-200 min-h-screen w-screen"}>
            <div className="navbar">
                <div className="flex-1">
                </div>
                <ThemeModeToggle/>
            </div>

            <div className={"h-full"}>
            <div className="hero h-96">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">TODO</h1>
                    </div>
                    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="Username" value={usernameValue}
                                       className="input input-bordered username"
                                       onChange={(e) => setUsernameValue(e.target.value)} required/>

                                <label className="label">
                                    <Link to={"/register"} className={"label-text-alt link link-hover"}>user register</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type={"submit"} className="btn btn-primary enter-btn float-end">Enter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            </div>

        </div>

    );

}

export default Login;