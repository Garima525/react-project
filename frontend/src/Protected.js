import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Protected = (props) => {

    let Component = props.Component;
    const history= useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            history.push("/register");
        }
    },[]);
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected
