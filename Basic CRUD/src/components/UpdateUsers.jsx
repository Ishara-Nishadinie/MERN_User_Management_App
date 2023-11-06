import React from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function UpdateUsers(){
    const {id} = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const Update = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:3000/updateUser/"+id , {name,email,age})
        .then(result=> {
            console.log(result)
            navigate("/")
        }) 
        .catch (err => console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/getUser/"+id)
        .then(result=>{  
            const user = result.data[0];
            setName(user.name)
            setEmail(user.email)
            setAge(user.age)
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2 className="mb-4">Update User</h2> 
                    <div className="mb-2 p-3"> 
                    <label htmlFor="username" className="form-label">Name</label>
                    <input type="text" id="username" placeholder="Enter Your Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div> 
                    <div className="mb-2 p-3">
                    <label htmlFor="useremail" className="form-label">Email</label>
                    <input type="text" id="useremail" placeholder="Enter Your Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div> 
                    <div className="mb-2 p-3">
                    <label htmlFor="userage" className="form-label">Age</label>
                    <input type="text" id="userage" placeholder="Enter Your Age" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
                    </div>  
                    <div className="mb-2 p-3"> 
                    <button className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        </div> 
    )
}

export default UpdateUsers; 