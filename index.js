const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const port = 8000

app.use(bodyParser.json());

const calculatorRouter = require('./routes/calculatorRoute')

app.use('/calculator',calculatorRouter)

app.listen(port, () => {
    console.log(`Calculator Web Service  on port ${port}`)
})