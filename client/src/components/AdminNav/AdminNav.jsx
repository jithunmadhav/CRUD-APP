import React from 'react'
import './AdminNav.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../axios'
import { useDispatch } from 'react-redux'
 

function AdminNav() {
  const dispath=useDispatch();
  const navigate=useNavigate();
  const handleLogout=()=>{
    console.log("sfdghh");
    axios.get('/admin/adminLogout').then((response)=>{
      console.log(response);
      dispath({type:'refresh'})
      return navigate('/admin/adminLogin');
    })
  }
  return (
    <div className="navBar">
    <div className="navContainer">
      
      <div className="nav-sec 1">
        <div style={{ display:'flex' }} >
          <input type="text" placeholder='search user'   />
        </div>
        <Link to="/admin/create-user">
        <button >Create User</button>
        </Link>

      </div>
      <div className="nav-sec 2">
          <button onClick={handleLogout} >Logout</button>
      </div>
    </div>
  </div>
  )
}

export default AdminNav
