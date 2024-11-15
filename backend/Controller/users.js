const userModel = require('../model/model')

exports.getUsers = async (req,res) => {
  
try{
let users = await userModel.find()
console.log('User Connected')
res.json(users)
}
catch(err){
  res.send(err.message)
}

}

exports.createUser = async (req,res) => {

  try{
    let userAdd = new userModel(req.body)
    await userAdd.save()
    res.status(201).json(userAdd)
  }
  catch(err){
    res.status(400).send(err)
  }
}


exports.deleteUser = async (req,res) => {

  let id = req.params.id

  try{

    let deleteUser = await userModel.findOneAndDelete({ _id : id})
    res.status(200).json({message : 'user delted', user : deleteUser})
  }
  catch(err){
    res.status(500).send('Something Went Wrong')
  }
}


exports.updateUser = async (req,res) => {

  let id = req.params.id

  try{
    let updateUser = await userModel.findOneAndUpdate({_id : id}, req.body)
    res.status(200).send(updateUser)
    
  }
  catch(err){
    res.status(500).send(err)
  }
}
  
