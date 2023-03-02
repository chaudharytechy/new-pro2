
const express = require('express')

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send()
// })

const FrontController=require('./controllers/FrontController')
// steup ejs
app.set('view engine','ejs')
// public file use
app.use(express.static('public'))




// frontcontroller route

app.get('/',FrontController.home)
app.get('/about',FrontController.about)
app.get('/agent',FrontController.agent)
app.get('/contact',FrontController.contact)
app.get('/',FrontController.home)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})