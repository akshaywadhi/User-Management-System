const express = require('express')
const users = require('../Controller/users')

const router = express.Router()


router
.get('/', users.getUsers)
.post('/addUser', users.createUser)
.delete('/removeUser/:id', users.deleteUser)
.patch('/updateUser/:id', users.updateUser);

exports.router = router