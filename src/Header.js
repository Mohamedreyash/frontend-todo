import React from 'react'
import './Header.css';
import SideBar from "./SideBar"
import { Context } from "./components/axios/axioscontext"
import { useContext } from 'react';
import Table from './Table';
import Watch from './watch';
import TodoList from './TodoList';
const Header = () => {
    const { email, myFunction } = useContext(Context);
    const user = localStorage.getItem("email").split("@")[0].toUpperCase()
    return (
        <div className='main-container'>
            <div className='sideBar'>
                <SideBar />
            </div>
            <div className='middle-container'>
                <div className='header-container'>
                    </div>
                    <div className='user-container'>
                        <div className='user-details'>
                            <p style={{ fontSize: "20px", color: "#0a89e4f0" }}>
                                {user}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='tableNav-container'>
                    <Table/>
                    <Watch/>
                    <TodoList/>
                </div>
            </div>

    )
}

export default Header