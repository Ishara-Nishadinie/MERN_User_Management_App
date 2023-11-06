import { useState } from 'react' 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './components/Users'
import CreateUsers from './components/CreateUsers';
import UpdateUsers from './components/UpdateUsers';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Users/>}> </Route>
      <Route path='/create' element={<CreateUsers/>}> </Route>
      <Route path='/update/:id' element={<UpdateUsers/>}> </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
