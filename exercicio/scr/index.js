const express = require('express')
const { response } = require('express')

const app = express()

app.use(express.json)


/*

    metodos HTTP:

    GET: Buscar informaçoes do usuario
    POST: Adicionar informaçao do usuario
    PUT: Alterar informação do usuario
    DELETE: Deletar informação do usuario

    tipos de paramentros:

    query params:
    rout params:
    request body:



*/



app.get('/projects' , (request, response)=>{
    return response.json({message: 'hello wood'})})


app.post('/projects' , (request, response)=>{
  return response.json({message: 'hello woddd'})})


app.put('/projects/:id' , (request, response)=>{
   return response.json({message: 'hello wod',
                         message2: 'hello',
                         message3: 'nada'

})})


app.delete('/projects/:id' , (request, response)=>{
    return response.json({message: 'hello wod',
                          nada: 'nada'
})})





    app.listen(3333, ()=>{
    console.log("porta iniciada")
})



