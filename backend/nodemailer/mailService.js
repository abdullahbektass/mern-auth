import nodemailer from "nodemailer";
import dotenv from "dotenv";


dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "devabdullahb@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD
  },
});

export default transporter;
