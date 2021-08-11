import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

const Register = () => {

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    },[])

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const history = useHistory();

    async function signUp()
    {
        let item = {name, email, password}
        console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },
        });
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add")
    }
    return (
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Yourself</h1>
            <input type="text" value={name} onChange ={(e)=>setName(e.target.value)} 
            className="form-control" placeholder="Name" /><br />
            <input type="email" value={email} onChange ={(e)=>setEmail(e.target.value)} 
            className="form-control" placeholder="Email" /><br />
            <input type="password" value={password} onChange ={(e)=>setPassword(e.target.value)} 
            className="form-control" placeholder="Password" /><br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
        </>
    )
}

export default Register
