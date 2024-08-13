import React from "react";
import {useState} from "react";

const AdminRegister = (props) => {
    const [register, setRegister] = useState({
        name: "",
        username: "",
        password: "",
        confirmPassword:""
    });

    const submitHandler = (e) => {

    }
    const changeHandler = (e) => {
        setRegister((prevState) => ({...prevState,
            [e.target.name]: e.target.value
      }));
    }

    return (
        <div className='register-container'>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={(e)=>changeHandler(e)} value={register.name} autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" onChange={(e)=>changeHandler(e)} value={register.username} autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) =>changeHandler(e)} value={register.password} autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={(e) => changeHandler(e)} value={register.confirmPassword} autoComplete="off"/>
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    )
}

export default AdminRegister