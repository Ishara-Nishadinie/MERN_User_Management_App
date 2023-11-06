import React, { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUsers(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const Submit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/createUser", {name,email,age})
        .then(result=> {
            console.log(result)
            navigate("/")
        }) 
        .catch (err => console.log(err))
    }
 

    return( 
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2 className="mb-4">Create a User</h2> 
                    <div className="mb-2 p-3"> 
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" id="username" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" className="form-control"/>
                    </div> 
                    <div className="mb-2 p-3">
                    <label htmlFor="useremail" className="form-label">Email</label>
                    <input type="text" id="useremail" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" className="form-control"/>
                    </div> 
                    <div className="mb-2 p-3">
                    <label htmlFor="userage" className="form-label">Age</label>
                    <input type="text" id="userage" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Your Age" className="form-control"/>
                    </div>  
                    <div className="mb-2 p-3"> 
                    <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div> 
    )
}

export default CreateUsers; 