import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import ENV from '../config.js';

// send mail from a real Gmail account
export default async function SendMail(username, userEmail, text, subject) {
    console.log(username, userEmail, text, subject);
  
    // Check if the email address is valid
    if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail)) {
      throw new Error('Invalid email address');
    }
  
    // Check if the SMTP settings are correct
    const config = {
        service: 'gmail',
        auth: {
            user: ENV.EMAIL,
            pass: ENV.PASSWORD
        }
    };
  
    // Create a new transporter
    const transporter = nodemailer.createTransport(config);
  
    // Create a new Mailgen instance
    const MailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Khareedo Farokht',
            link: 'https://mailgen.js/'
        }
    });
  
    // Create a new response object
    const response = {
        body: {
            name: username,
            intro: 'From Khareedo Farokht',
            table: {
                data: [
                    {
                        Mail: text
                    }
                ]
            },
            outro: 'Thank you for choosing us'
        }
    };
  
    // Generate the email
    const mail = MailGenerator.generate(response);
  
    // Create a new message object
    const message = {
        from: ENV.EMAIL,
        to: userEmail,
        subject: subject || 'OTP for reset password',
        html: mail
    };
  
    // Send the mail
    try {
        await transporter.sendMail(message);
        return { message: 'Mail sent successfully... If you don\'t get it, please check your Spam folder!' };
    } catch (error) {
        return { error: 'Error in sending mail' };
    }
}