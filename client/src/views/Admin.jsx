import React from "react";
import AdminLogin from "../components/AdminLogin";
import AdminRegister from "../components/AdminRegisters"

//css import
import '../css/Admin.css'


const AdminLogin = () => {

    return (
        <div>
            <div className='admin-header'>
                <h1>CritesCustomTile</h1>
            </div>
            <div className='admin-container'>
                <AdminLogin />
                <AdminRegister />
            </div>
        </div>
    )
}

export default AdminLogin