import {
  getVerificationEmailTemplate,
  getWelcomeEmailTemplate,
  getResetPasswordEmailTemplate,
  getResetSuccessEmailTemplate,
} from './mailTemplates.js';
import transporter from './mailService.js'; // Nodemailer ayarları
import dotenv from 'dotenv';

dotenv.config();

export const sendVerificationMail = async (to, verificationCode) => {
  const htmlContent = getVerificationEmailTemplate(verificationCode);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Your Verification Code',
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Verification email sent: ', info.response);
    return info.response;
  } catch (error) {
    console.error('Error sending verification email: ', error);
    throw error;
  }
};

export const sendWelcomeEmail = async (to, name) => {
  const htmlContent = getWelcomeEmailTemplate(name);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Welcome!',
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Welcome email sent: ', info.response);
    return info.response;
  } catch (error) {
    console.error('Error sending welcome email: ', error);
    throw error;
  }
};

export const sendResetPasswordEmail = async (to, name, resetLink) => {
  const htmlContent = getResetPasswordEmailTemplate(name, resetLink);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Reset Your Password',
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Reset password email sent: ', info.response);
    return info.response;
  } catch (error) {
    console.error('Error sending reset password email: ', error);
    throw error;
  }
};

export const sendResetSuccessEmail = async (to, name) => {
  const htmlContent = getResetSuccessEmailTemplate(name);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Your password has been successfully reset',
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Reset success email sent: ', info.response);
    return info.response;
  } catch (error) {
    console.error('Error sending reset success email: ', error);
    throw error;
  }
};
