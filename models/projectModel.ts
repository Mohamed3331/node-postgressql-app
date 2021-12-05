import {  Model, DataTypes } from "sequelize";

import sequelize from '../src/db'

interface ProjectAttributes {
  id?: number;
  name: string;
  desc: string;
}

interface ProjectInstance extends Model<ProjectAttributes>, ProjectAttributes {}

const Project = sequelize.define<ProjectInstance>("Project", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: DataTypes.STRING,
  desc: DataTypes.STRING
});

Project.sync().then(() => {
  console.log(`project table created`);
});

export default Project