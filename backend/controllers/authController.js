import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

export const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  const user = await User.create({ username, email, password, role });
  const token = generateToken(user._id);
  res.json({ token, user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(user._id);
  res.json({ token, user });
};
