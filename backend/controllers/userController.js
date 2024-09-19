import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = await User.create({
      username,
      password,
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    const userInfo = {
      id: newUser.id,
      username: newUser.username,
      profilePicture: null,
      caloriesGoal: null,
      proteinGoal: null,
      carbsGoal: null,
      fatsGoal: null,
    };

    res.status(201).json({ token, userInfo });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    const userInfo = {
      id: user.id,
      username: user.username,
      profilePicture: user.profilePicture,
      caloriesGoal: user.caloriesGoal,
      proteinGoal: user.proteinGoal,
      carbsGoal: user.carbsGoal,
      fatsGoal: user.fatsGoal,
    };

    const response = {
      token,
      userInfo,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: 'Server error' });
  }
};
