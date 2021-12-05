import express from 'express'
import sequelize from "./db"
import morgan from 'morgan'
import Task from '../models/taskModel'
import Project from '../models/projectModel'

import projectRoutes from './routes/projects'
import tasksRoutes from './routes/tasks'

const app = express()

const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());



Project.hasMany(Task);
Task.belongsTo(Project);

(async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit()
    }
})()

app.use(projectRoutes);
app.use(tasksRoutes);


app.listen(PORT, (): void => console.log('Server is Running on Port ' + PORT))


