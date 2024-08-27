import React from "react";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";


//css import
import '../css/Admin.css'


const AdminLogin = () => {
    const [login, setLogin] = useState({
        username: "", 
        password: "",
    });
    const [loginErr, setLoginErr] = useState();
    const [failMessage, setFailMessage] = useState();
    const {useLogin, error, isLoading} = useLogin();

    const Navigate = useNavigate();

    const changeHandler = (e) => {
        setLogin((prevState) => ({...prevState,
        [e.target.name]: e.target.value
      }));
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        useLogin(login)
      }

    return (
        <div className="login-container">
          <h1>Login</h1>
            <form onSubmit={(e) => submitHandler(e)} className="form-container">
                <div className="input-container">
                    <label htmlFor="username"> Username: </label>
                    <input type="text" name="username" value={login.username} onChange={(e) => changeHandler(e)} autoComplete="off"/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" value={login.password}onChange={(e) => changeHandler(e)} autoComplete="off"/>
                </div>
                {failMessage?<span>{failMessage}</span>:null}
                <button type="submit" disabled={isLoading} className="login-button">Login</button>
                {error&& <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default AdminLogin