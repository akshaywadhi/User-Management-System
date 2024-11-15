import AddUser from "./AddUser"
import { Routes, Route } from "react-router-dom"
import Users from "./Users"


function App() {
  
  return (
    <>
    
 <Routes>
  <Route path='/' element={<AddUser/>} />
  <Route path='/users' element={<Users/>} />
 </Routes>
       </>
  )
}

export default App
