import otpGenerator from 'otp-generator'
import SendMail from './mailCon.js'

const generateOTPCode = () => {
    return otpGenerator.generate(4, { upperCase: false, specialChars: false, lowerCaseAlphabets: false, upperCaseAlphabets: false });
}

export async function generateOTP(req, res) {

    const { email, username } = req.body

    const OTP = generateOTPCode()

    const text = `Dear ${username}!<br><br>Your OTP is <strong>${OTP}</strong>`
    const subject = "OTP for reset password"

    SendMail(username, email, text, subject).then((msg) => {
        console.log(msg)
        res.send({ msg, OTP })
    }).catch((error) => {
        console.log(err)
        res.send({ error, OTP })
    })
}

export async function registerSuccesFull(req, res) {
    const { email, username } = req.body

    const text = `You have successfully registered to our App Thank you for choosing us!🤗🤗`
    const subject = "Registration Successfull"

    SendMail(username, email, text, subject).then((msg) => {
        console.log(msg)
        res.send({ msg })
    }).catch((error) => {
        console.log(err)
        res.send({ error })
    })
}

export async function OTPforDelivery(req, res) {
    const { email, username } = req.body;
    const OTP = generateOTPCode();
    const text = `Dear ${username}!<br><br>Your OTP to confirm delivery is <strong>${OTP}</strong>`;
    const subject = "OTP for delivery";

    SendMail(username, email, text, subject).then((msg) => {
        console.log(msg);
        res.send({ msg, OTP });
    }).catch((error) => {
        console.log(err);
        res.send({ error });
    });
}