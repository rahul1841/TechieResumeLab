const nodemailer = require('nodemailer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const crypto = require('crypto');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generateOtp = () => {
  return crypto.randomBytes(3).toString('hex'); // Generates a 6-character OTP
};

const saveOtp = async (userId, otp) => {
  const otpExpiresAt = new Date(Date.now() + process.env.OTP_EXPIRY_TIME * 60000); // OTP expires in 5 minutes
  await prisma.user.update({
    where: { id: userId },
    data: { otp, otpExpiresAt },
  });
};

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};

const verifyOtp = async (userId, otp) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user.otp === otp && new Date(user.otpExpiresAt) > new Date()) {
    await prisma.user.update({
      where: { id: userId },
      data: { isVerified: true, otp: null, otpExpiresAt: null },
    });
    return true;
  }
  return false;
};

module.exports = {
  generateOtp,
  saveOtp,
  sendOtpEmail,
  verifyOtp,
};
