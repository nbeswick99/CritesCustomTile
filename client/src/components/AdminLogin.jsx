import React from "react";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

//css import
import '../css/Admin.css'


const AdminLogin = () => {
    const [login, setLogin] = useState({
        username: "", 
        password: "",
    });
    const [loginErr, setLoginErr] = useState();

    const Navigate = useNavigate();

    const changeHandler = (e) => {
        setLogin((prevState) => ({...prevState,
        [e.target.name]: e.target.value
      }));
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", login)
        .then((res) => {
        console.log(res.data)
        setLogin({
            username:"",
            password:"",
        });
          Navigate("/admin/home");
        })
        .catch((err) => {
          {
            setLoginErr(err.response.data.errors)
            console.log(createErr)
          }
        })
      }

    return (
        <div className="login-container">
            <form onSubmit={(e) => submitHandler(e)} className="form-container">
                <div className="input-container">
                    <label htmlFor="username"> Username: </label>
                    <input type="text" name="username" value={login.username} onChange={(e) => changeHandler(e)} autoComplete="off"/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" value={login.password}onChange={(e) => changeHandler(e)} autoComplete="off"/>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )
}

export default AdminLogin