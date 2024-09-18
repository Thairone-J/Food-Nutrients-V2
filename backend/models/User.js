import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs'; 
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  caloriesGoal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  proteinGoal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  carbsGoal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fatsGoal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  hooks: {
    beforeCreate: async (user, options) => {
      user.password = await bcrypt.hash(user.password, 10);
    },
  },
});

export default User;
