import ThemeModeToggle from "../components/ThemeModeToggle.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../config/axios.ts";

const Register = () => {

    const [username, setUsername] = useState<string>(''); // 회원가입할 username
    const [duplicate, setDuplicate] = useState<boolean>(false);
    const navigate = useNavigate();


    const checkUsername = (username: string) => {
        axios
            .post(`/api/user/name/duplicate`, {username})
            .then((response) => {
                console.log(response.data + "duplicate");
                if(!response.data) {
                    setDuplicate(true);
                    alert("사용 가능한 이름입니다.");
                } else {
                    setDuplicate(false);
                    alert("사용 불가능한 이름입니다.");
                }
            })
            .catch((error) => {
                console.error("register error", error);
            })
    }

    useEffect(() => {
        console.log("setDuplicate 값 바꾸기 : ", duplicate);
    }, [duplicate]);

    useEffect(() => {
        setDuplicate(false);

        console.log("input 값 변해서 username 초기화 : ", username);
    }, [username]);

    const register = (username: string) => {
        axios
            .post(`/api/user/register`, {username})
            .then(() => {
                navigate("/login");

            })
            .catch((error) => {
                console.error("register error", error);
            })
    }

    const handleRegisterSubmit = (e: React.FormEvent) => {
        if(duplicate) {
            e.preventDefault();
            register(username);
        } else {
            alert("비정상적인 접근입니다.");
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
                            <h1 className="text-5xl font-bold">Register</h1>
                        </div>
                        <div className="card bg-base-100 min-w-sm max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body" onSubmit={handleRegisterSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <div className={"flex"}>
                                        <input type="text" placeholder="Username" value={username}
                                               className="input input-bordered username mr-1"
                                               onChange={(e) => setUsername(e.target.value)}
                                                required/>
                                        <button
                                            type={"button"}
                                            className={"btn btn-success"}
                                            onClick={() => checkUsername(username)}>중복체크</button>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button
                                        className="btn btn-info enter-btn float-end"
                                        type={"submit"}
                                        disabled={!duplicate}
                                    >
                                        Enter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Register;