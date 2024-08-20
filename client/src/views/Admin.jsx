import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"

import AdminLogin from "../components/AdminLogin";
import AdminRegister from "../components/AdminRegister"

//css import
import '../css/Admin.css'


const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:800/api/register")
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <div className='admin-header'>
                <h1>CritesCustomTile</h1>
            </div>
            <div className='admin-container'>
                <AdminLogin />
                {users.length < 2 || !users? <AdminRegister />: null}
            </div>
        </div>
    )
}

export default Admin