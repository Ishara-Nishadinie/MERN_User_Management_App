import React, { useEffect, useState } from "react" 
import { Link } from "react-router-dom";
import axios from "axios";

function Users(){
    const [users,setUsers] = useState([]);

    const handleClick = (id) =>{ 
        axios.delete("http://localhost:3000/deleteUser/"+id)
        .then(result=>{
            console.log(result)
            window.location.reload();
        })
        .catch(err=>console.log(err))
 
    }

    useEffect(()=>{
        axios.get("http://localhost:3000")
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    }, [])
    return( 
        <>  
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className="table">
                <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {users.map((user)=>(
    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        
        <td><Link to={'/update/'+user._id} className='btn btn-secondary'>Update</Link>
        <button className='btn btn-danger' onClick={(e)=>handleClick(user._id)}>Delete</button></td>
    </tr> 
    
   ))}
  </tbody>
                </table> 
            </div> 
    </div>  
    </>
    )
}

export default Users; 