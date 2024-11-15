import { useEffect, useState } from "react"
import axios from 'axios'

function AddUser({userEdit, reload}){


  const [add, setAdd] = useState({
    name : '',
    email : '',
    city : '',
    country : '',
    age : ''
  })

 

  useEffect(() => {
    if(userEdit){
      setAdd({
        name : userEdit.name,
        email : userEdit.email,
        city: userEdit.city,
        country: userEdit.country,
        age : userEdit.age
      })
    }
  },[userEdit])


  function handleChange(e){

    const {name, value} = e.target

  setAdd((prev) => ({
    ...prev,
    [name] : name === "age" ? parseInt(value) || '' : value
  }))

  }

//Adding User To The Database

  async function handleSubmit(e){
    e.preventDefault()

    if(userEdit){

      try{
        let updateUser = await axios.patch(`http://localhost:3000/users/updateUser/${userEdit._id}`,add)
        console.log(updateUser)
      reload()
      }
      catch(err){
        console.log(err.message)
      }
    }
   else{
    try{
      let users = await axios.post('http://localhost:3000/users/addUser', {...add})
      console.log(users.data)
    }
    catch(err){
      console.log(err)
    }
  
   }
   
    
    
    
  }










  return (
    <>

    <div>
      <h1>User Management System</h1>
      <div>
<h2>Add Users</h2>
      
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text'
          placeholder="Enter Your Name "
          name = 'name'
          value={add.name}
          onChange={handleChange}
          />

<input type='text'
          placeholder="Enter Your Email"
          name = 'email'
          value={add.email}
          onChange={handleChange}
          />

<input type='text'
          placeholder="Enter Your City"
          name = 'city'
          value={add.city}
          onChange={handleChange}
          />

<select
name = 'country'
value= {add.country}
onChange={handleChange}
>
  <option value=''>Choose Country</option>
  <option value='India'>India</option>
  <option value='UK'>UK</option>
  <option value='Canada'>Canada</option>
  <option value='USA' >USA</option>
</select>

<input type='text'
          placeholder="Enter Your Age"
          name = 'age'
          value={add.age}
          onChange={handleChange}
          />


          <button type="submit">{userEdit ? 'Update' : 'Submit'}</button>
        </form>
      </div>
      </div>
    </div>
    </>
  )
}

export default AddUser