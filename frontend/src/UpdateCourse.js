import { useState, useEffect }  from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';

const UpdateCourse = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");

    const [data, setData] = useState("");
    console.warn("props", props.match.params.id);

    useEffect(async ()=> {
        let result = await fetch("http://127.0.0.1:8000/api/course/"+props.match.params.id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setDescription(result.description);
        setPrice(result.price);
        setFile(result.file);
    },[]);

    
    async function editCourse(id)
    {
        console.warn(name,description, price,file)
        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('description',description);
        formdata.append('price', price);
        formdata.append('file',file);

        let result = await fetch("http://127.0.0.1:8000/api/update/"+id+"?_method=PUT",{
            method:"POST",
            body:formdata,         
        });
        alert("Data has been updated successfully !");
    }

    return (
        <div>
            <Header />
           <h1>Update the Course</h1>
           <div className="col-sm-6 offset-sm-3">
         <input type="text" className="form-control" placeholder="Name of the course"
         defaultValue={data.name}  onChange={(e)=>setName(e.target.value)}/><br /><br />
         <input type="text" className="form-control" placeholder="Description of the Course" 
         defaultValue={data.description} onChange={(e)=>setDescription(e.target.value)}/><br /><br />
         <input type="text" className="form-control" placeholder="Price " 
         defaultValue={data.price} onChange={(e)=>setPrice(e.target.value)} /><br /><br />
         <input type="file" className="form-control"
         defaultValue={data.file} onChange={(e)=>setFile(e.target.files[0])}/> <br />
         <img style={{ width:"150px"}} src={"http://localhost:8000/"+data.file}/> <br /><br />
         <button className="btn btn-primary" onClick={()=>editCourse(data.id)}>Update</button>
         </div>
        </div>
    )
}

export default withRouter(UpdateCourse);
