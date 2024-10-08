import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignup } from "../hooks/useSignup";

//CSS imports
import '../css/Admin.css'

const AdminRegister = (props) => {
    const {signup, error, isLoading} = useSignup();
    const [register, setRegister] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword:""
    });

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (register.password === register.confirmPassword) {
            const newUser = {
                name: register.name,
                username: register.username,
                password: register.password
            }
            signup(newUser)

            navigate("/amdin/home")
        }
    }
    const changeHandler = (e) => {
        setRegister((prevState) => ({...prevState,
            [e.target.name]: e.target.value
      }));
    }

    return (
        <div className='register-container'>
            <h1>Register</h1>
            <form onSubmit={(e)=>submitHandler(e)} className="form-container">
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={(e)=>changeHandler(e)} value={register.name} autoComplete="off"/>
                </div>
                <div className="input-container">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={(e)=>changeHandler(e)} value={register.username} autoComplete="off"/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) =>changeHandler(e)} value={register.password} autoComplete="off"/>
                </div>
                <div className="input-container">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={(e) => changeHandler(e)} value={register.confirmPassword} autoComplete="off"/>
                </div>
                <button type="submit" disabled={isLoading}className="register-button">Register</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default AdminRegister