import React,{ useState} from 'react';
import Header from './Header';

const AddCourse = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");

    async function add()
    {
        console.warn(name,description, price,file);
        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('description',description);
        formdata.append('price', price);
        formdata.append('file',file);

        let result = await fetch("http://127.0.0.1:8000/api/addcourse",{
            method:"POST",
            body:formdata,         
        });
        alert("Data has been sent successfully !");
    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3" >
                <br />
            <input type="text" className="form-control" 
            onChange={(e)=>setName(e.target.value)} placeholder="Enter Coures Name"/>
            <br />
            <input type="text" className="form-control"
            onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Coures Description"/>
            <br />
            <input type="text" className="form-control" 
            onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Coures Price"/>
            <br />
            <input type="file" className="form-control" 
            onChange={(e)=>setFile(e.target.files[0])} placeholder="Enter Coures image"/>
            <br />
            <button className="btn btn-primary" onClick={()=>add()}>Add Course</button>
            </div>
        </div>
    )
}

export default AddCourse;
