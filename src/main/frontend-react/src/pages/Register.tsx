import ThemeModeToggle from "../components/ThemeModeToggle.tsx";
import {Link, useNavigate} from "react-router-dom";
import  {useState} from "react";

const Register = () => {

    const [username, setUsername] = useState<string>(''); // 회원가입할 username

    const navigate = useNavigate();


    const checkUsername = (username: string) => {
        axios
            .post(`/api/user/register`, {username})
            .then((response) => {
                // if(response.data) {
                //
                // } else {
                //
                // }
            })
            .catch((error) => {
                console.error("register error", error);
            })
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
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <div className={"flex"}>
                                        <input type="text" placeholder="Username" value={username}
                                               className="input input-bordered username mr-1"
                                               onChange={(e) => setUsername(e.target.value)}
                                                required/>
                                        <button className={"btn btn-success"}>중복체크</button>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button type={"submit"} className="btn btn-info enter-btn float-end">Enter
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