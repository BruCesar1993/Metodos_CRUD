const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const {uuid} = require('uuidv4')
//const { request, response } = require('express')

const userData = []


app.get('/data', (request,response)=>{
    return response.json(userData)
})

app.post('/data', (request,response)=>{
    
    const {Name, Age, Height, Weight} = request.body
    const Id = uuid()
    const newData = {Id, Name , Age, Height, Weight}
    userData.push(newData)
    
    return response.json(newData)
})

app.put('/data/:id', (request,response)=>{

    const{id} = request.params
    const {Name, Age, Height, Weight} = request.body
    
   
   const updateIndex = userData.findIndex(user=>{
      return user.Id === id
   })

    const update = {Id:id, Name , Age, Height, Weight}
    userData[updateIndex] = update
   
    if(updateIndex < 0){
       return response.status(400).json('Erro: address not found')
   
    }
   
   return response.json(update)
   
})



app.delete('/data/:id', (request,response)=>{
  
 const { id }= request.params
 
 const eliminate = userData.findIndex(user=>{
    return user.Id === id
 })
 
  userData.splice(eliminate, 1)

  if(eliminate < 0){
      return response.status(400).json('Erro: address not found')
  }
 
    return response.status(204).send()
})



app.listen(3333, ()=>{
    console.log('servidor iniciado')
})