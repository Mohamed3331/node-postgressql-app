import {  Model, DataTypes } from "sequelize";

import sequelize from '../src/db'

interface TaskAttributes {
  id?: number;
  name: string;
  desc: string;
  ProjectId?: number | string;
}

interface TaskInstance extends Model<TaskAttributes>, TaskAttributes {}

const Task = sequelize.define<TaskInstance>("Task", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: DataTypes.STRING,
  desc: DataTypes.STRING,
  ProjectId: DataTypes.INTEGER
}, {timestamps: false});

Task.sync().then(() => {
  console.log('task table created');
});

export default Task