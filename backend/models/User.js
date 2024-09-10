import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caloriesGoal: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  proteinGoal: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  carbsGoal: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fatsGoal: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

export default User;
