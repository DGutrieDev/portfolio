require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/contact', (req, res) => {
    try {
        const { name, email, message, subject } = req.body;
        if (!name || !email || !message || !subject) {
            return res.status(400).send('All fields are required');
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIl_DEST,
            subject: `${subject}`,
            html: `
            <p>You have a new message</p>
            <h3>Information</h3>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
            </ul>
            <p>${message}</p>
          `
        }
        transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (err) {
        res.status(400).send('Failed to send email');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
