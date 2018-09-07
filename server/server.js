require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const app = express()


app.use(bodyParser.json())


massive(process.env.DATABASE_URL).then(connection => {
    app.set('db', connection)
}).catch(err => {
console.log(err)
})



app.get('/api/houses', controller.get)
app.post('/api/house', controller.post)
app.delete('/api/house/:id', controller.delete)






const PORT = 4000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})