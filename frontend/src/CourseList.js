import React,{useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import Header from './Header';
import './App.css';
import { Link } from 'react-router-dom';
const CourseList = () => 
{
    const [data,setData]=useState([]);
    useEffect(()=>{
        getList();
    },[])
    
    async function deleteCourse(id)
    {
        let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:'DELETE'
        })
        result = await result.json();
        console.warn(result)
        getList();
    }
    async function getList()
    {
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <Header />
            <h1>List of Courses</h1>
            <div className="col-sm-8 offset-sm-2">
            <Table bordered>
                <tr>
                    <td><b>ID</b></td>
                        
                    <td><b>NAME</b></td>
                    <td><b>DESCRIPTION</b></td>
                    <td><b>PRICE</b></td>
                    <td><b>IMAGE</b></td>
                    <td><b>ACTION</b></td>
                    <td><b>ACTION</b></td>
                </tr>
                {
                    data.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td><img style={{width:"100px"}} src={"http://localhost:8000/"+item.file}/></td>
                        <td><span onClick={()=> deleteCourse(item.id)} style={{backgroundColor:"red", color: "white", padding:"5px", borderRadius: "5px", cursor: "pointer"}} >Delete</span></td>
                        <td>
                            <Link to={"update/"+item.id}>
                            <span style={{backgroundColor:"green", color: "white", 
                            padding:"5px", borderRadius: "5px", cursor: "pointer"}}> Update</span>
                            </Link>
                            </td>
                    </tr>
                    )
                }
            </Table>
            </div>
        </div>
    )
}

export default CourseList
