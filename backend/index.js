const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const users = require('./Controller/users')
const router = require('./router/userRouter')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', router.router)



try{
  mongoose.connect('mongodb://localhost:27017/usersystem')
  console.log('Connected To Database')
}
catch(err){
  console.log(err)
}


app.listen(3000, () => {
  console.log('Server Is Running On Port 3000')
})