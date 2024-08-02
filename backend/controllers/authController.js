const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const otpService = require('../services/otpService');

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(firstName, lastName, email, hashedPassword);

    const otp = otpService.generateOtp();
    await otpService.saveOtp(user.id, otp);
    await otpService.sendOtpEmail(email, otp);

    res.status(201).json({ message: 'OTP sent to your email' });
  } catch (error) {
    if (error.message === 'Email already in use') {
      res.status(400).json({ message: 'Email already in use' });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { userId, otp } = req.body;
    const isVerified = await otpService.verifyOtp(userId, otp);

    if (isVerified) {
      res.json({ message: 'User verified successfully' });
    } else {
      res.status(400).json({ message: 'Invalid or expired OTP' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user || !user.isVerified) {
      return res.status(401).json({ message: 'Invalid credentials or user not verified' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signup,
  verifyOtp,
  login,
};
