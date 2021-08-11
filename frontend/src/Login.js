import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

export default class Validation extends React.component {
    state ={
        email:"",
        password:"",
        emailError:"email is not matched !",   
        passwordError:"", 
    }
}
const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history= useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    },[])

    async function login()
    {
        // console.log(email,password)
        let item = {email,password}
        let res = await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        res = await res.json();
        localStorage.setItem("user-info",JSON.stringify(res));
        history.push("/add");
    }

    return (
        <div >
            <Header />
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                <div>{this.state.emailError}</div>
                <br />
                
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" /> 
                <br />
                <button onClick={login} className="btn btn-primary">Log In</button>
            </div>
            
        </div>
    )
}

export default Login
