import express from 'express'
import cors from 'cors'
import {generateOTP, registerSuccesFull} from './Controllers/OTPcon.js'

const app = express()

app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

const port = 8080

app.get('/', (req, res) => {
    res.send("Home Get request")
})

app.post('/generateOTP', generateOTP)
app.post('/sendRegisterMail', registerSuccesFull)



app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`)
})