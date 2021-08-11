import React,{ useState }  from 'react';
import Header from './Header';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Search = () => {
    const [data, setData] = useState([]);
    async function searchCourse(key)
    {
        if(key.length>1)
        {
            let result = await fetch("http://127.0.0.1:8000/api/search/"+key)
            result = await result.json();
            setData(result);
        }
        
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Course</h1>
                <br />
                <input type="text" onChange={(e)=>searchCourse(e.target.value)} className="form-control" placeholder="Search" />
                <br />
                {
                    data.length>0?
                    <Table bordered>
                    <tr>
                        <td><b>ID</b></td>
                            
                        <td><b>NAME</b></td>
                        <td><b>DESCRIPTION</b></td>
                        <td><b>PRICE</b></td>
                        <td><b>IMAGE</b></td>
                        
                    </tr>
                    {
                        data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td><img style={{width:"100px"}} src={"http://localhost:8000/"+item.file}/></td>
                        </tr>
                        )
                    }
                </Table>
                : <h4>Search Course by name</h4>
                }
            </div>
        </div>
    )
}

export default Search
