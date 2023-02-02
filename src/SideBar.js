import React from 'react'
import "./SideBar.css"
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate()
    return (
        <main>
            <div className="side-bar">

                <div className="sideBar-container">
                    <div className="sideBar-heading">
                        <h1>To Do List</h1>
                    </div>

                    <div className="dashboard">
                        <p>History</p>
                    </div>

                </div>
                <div className="logout-container">
                    <p onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/")
                        document.location.reload();
                    }}>Log Out</p>
                </div>
            </div>

        </main>
    )
}

export default SideBar