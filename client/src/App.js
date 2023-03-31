import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Signup from './components/Signup/Signup';
import UserHome from './components/UserHome/UserHome';
import axios from '././axios';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import EditProfile from './components/EditProfile/EditProfile';

function App() {
 const {user,admin,refresh}=useSelector((state)=>{
  return state
 });
 const dispatch =useDispatch();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    
     axios.get('/checkAuth').then((response)=>{
      console.log(response);
      dispatch({type:'user',payload:{login: response.data.logged,details:response.data.details}});
     })
  }, [refresh])
  return (
    <div className="App">
      <Router>
        {
        user.login===false &&
        <Routes>
        <Route  element={<Login/>} path='/login'/>  
        <Route  element={<Signup/>} path='/signup'/>  
        <Route  element={<Navigate to={'/login'} />} path='/'/>  
        <Route  element={<Navigate to={'/login'} />} path='/editProfile'/> 

        </Routes>
        }
        {
        user.login===true &&
        <Routes>
        <Route  element={<Navigate to={'/'}/>} path='/login'/>  
        <Route  element={<Navigate to={'/'}/>} path='/signup'/>  
        <Route  element={<UserHome/>} path='/'/>  
        <Route  element={<EditProfile />} path='/editProfile'/> 
        </Routes>
        }



      </Router>
    </div>
  );
}

export default App;