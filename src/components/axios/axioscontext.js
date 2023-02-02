import { createContext, useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios"
export const Context = createContext()
export const  Provider = (props) => {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState([]);
  const nav = useNavigate();
  const userSignIn = (loginData) => {
    axios
      .post("http://localhost:5000/login", loginData)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("email", loginData.email);
        nav("/blogs");
        window.alert("Login Successful");
        document.location.reload();
        setEmail(loginData.email);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        window.alert(err.response.data.message);
        console.log(err);
      });
  };

  const userSignUp = (userData) => {
    try {
      axios
        .post("http://localhost:5000/register", userData)
        .then((res) => {
          nav("/");
          window.alert("Registration Successful");
        })
        .catch((err) => window.alert(err.response.data.error));
    } catch (e) {
      window.alert(e.message);
    }
  };


  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };

  const postContent = async (ContactsData) => {

    return await axios
      .post("https://localhost:5000/add", ContactsData, config)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err.response.data.message)
      })

  };

  const fetchContent = () => {
    axios
      .get("https://localhost:5000/alldata", config)
      .then((res) => {
        console.log(res.data[0].contact);
        const data = res.data[0].contact;
        setContent(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchContent();
  }, []);
 
  return (
    <Context.Provider value={{  userSignIn,
      email,userSignUp,postContent,fetchContent,content}}>
      {props.children}

    </Context.Provider>

  )

}