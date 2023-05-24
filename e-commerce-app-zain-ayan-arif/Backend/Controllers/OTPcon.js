import  otpGenerator  from 'otp-generator'
import SendMail from './mailCon.js'

export async function generateOTP(req, res) {

    const {email, username} = req.body

    const OTP= await otpGenerator.generate(4,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false})

    const text = `Your OTP for reset password is ${OTP}`
    const subject = "OTP for reset password"

    SendMail(username, email, text, subject).then((msg) => {
        console.log(msg)
        res.send({msg, OTP})
    }).catch((error) => {
        console.log(err)
        res.send({error, OTP})
    })
}

export async function registerSuccesFull(req, res) {
    const {email, username} = req.body

    const text = `You have successfully registered to our App Thank you for choosing us!🤗🤗`
    const subject = "Registration Successfull"

    SendMail(username, email, text, subject).then((msg) => {
        console.log(msg)
        res.send({msg})
    }).catch((error) => {
        console.log(err)
        res.send({error})
    })
}
