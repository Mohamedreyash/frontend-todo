import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from './components/axios/axioscontext';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header"
const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem("token");
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todo" element={token ? <Header /> : <Navigate replace to={"/"} />} />
          </Routes>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
