require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));


const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


app.post('https://gameworld-18qq.onrender.com/sendValorant', async (req, res) => {
  const { teamName, captainName, player1name, player2name, player3name, player4name } = req.body;

  const emailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New team signed up (Valorant) - ${teamName}`,
    text: `
Team: ${teamName}
Captain: ${captainName}
Player 1: ${player1name}
Player 2: ${player2name}
Player 3: ${player3name}
Player 4: ${player4name}
    `,
  };

  try {
    await transport.sendMail(emailData);
    res.status(200).json({ success: true, toastMsg: 'Sign up succeeded!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, toastMsg: 'Server error, try again!' });
  }
});

app.post('https://gameworld-18qq.onrender.com/sendSiege', async (req, res) => {
  const { teamName, captainName, player1name, player2name, player3name, player4name } = req.body;

  const emailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New team signed up (Siege) - ${teamName}`,
    text: `
Team: ${teamName}
Captain: ${captainName}
Player 1: ${player1name}
Player 2: ${player2name}
Player 3: ${player3name}
Player 4: ${player4name}
    `,
  };

  try {
    await transport.sendMail(emailData);
    res.status(200).json({ success: true, toastMsg: 'Sign up succeeded!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, toastMsg: 'Server error, try again!' });
  }
});


app.post('https://gameworld-18qq.onrender.com/sendCsgo', async (req, res) => {
  const { teamName, captainName, player1name, player2name, player3name, player4name } = req.body;

  const emailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New team signed up (CS:GO) - ${teamName}`,
    text: `
Team: ${teamName}
Captain: ${captainName}
Player 1: ${player1name}
Player 2: ${player2name}
Player 3: ${player3name}
Player 4: ${player4name}
    `,
  };

  try {
    await transport.sendMail(emailData);
    res.status(200).json({ success: true, toastMsg: 'Sign up succeeded!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, toastMsg: 'Server error, try again!' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
