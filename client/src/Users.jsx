import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddUser from './AddUser'

export default function Users() {

  const [users, setUsers] = useState([])
  const [editId, setEditId] = useState(null)


  useEffect(() => {

    
    fetchUser()
  
  },[])

  async function fetchUser(){

    try{

      let getUsers = await axios.get('http://localhost:3000/users')
      console.log(getUsers.data)
      setUsers(getUsers.data)

    }
    catch(err){
      console.log(err.message)
    }
  }


  async function removeUser(id){

    try{
      let deleteUser = await axios.delete(`http://localhost:3000/users/removeUser/${id}`)
      console.log(deleteUser)
      fetchUser()
    }
    catch(err){
      console.log(err.message)
    }
  }

function editUser(user){
  setEditId(user)
}

function onReload(){
  fetchUser()
}
  return (
    <div>

      <table border={1}>
<thead>
  <tr>
    <td>Name</td>
    <td>Email</td>
    <td>City</td>
    <td>Country</td>
    <td>Age</td>
  </tr>
</thead>
<tbody>

    {
      users.map((user, index) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.country}</td>
            <td>{user.age}</td>
            <td><button onClick={() => editUser(user)}>Edit</button> <button onClick={() => removeUser(user._id)}>Delete</button></td>
            </tr>
        )
      })
    }
  
</tbody>
      </table>

      {
        editId !== null && <AddUser userEdit={editId} reload={onReload}/>
      }
    </div>
  )
}
