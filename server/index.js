const express = require('express')
// require des Mocks Boire un coup

const app = express()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
// Création des routes
app.get('/', (request, response) => {
  response.send('Ok')
})

app.listen(3249, () => console.log("j'écoute sur le port 3249"))
