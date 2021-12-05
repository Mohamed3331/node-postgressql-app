import {Request, Response, Router} from "express"
import Task from '../../models/taskModel'

const router = Router();

interface TaskAttributes {
    name: string;
    desc: string;
    ProjectId: number | string;
}

router.post("/create-task", async (req: Request, res: Response) =>  {
    const {name, desc, ProjectId}: TaskAttributes = req.body
    let task
    try {
        task = await Task.create({ name, desc, ProjectId});
    } catch (e) {
        console.log(e);
    }

    if (!task) {
        console.log('error happened');
        return
    }
    console.log(task.toJSON());
    res.status(201).send({ message: 'Query Executed' })
});

// router.get("/get-projects", async (req: Request, res: Response) =>  {
//     let projects
//     try {
//         projects = await Project.findAll();
//     } catch (e) {
//         console.log(e);
//     }

//     if (!projects) {
//         console.log('error happened');
//         return
//     }
//     res.status(200).send({data: projects})
// });

// router.delete("/delete-project/:id", async (req: Request, res: Response) =>  {
  
//     const {id} = req.params
//     try {
//         await Project.destroy({
//             where: {
//               id
//             }
//         })
//     } catch (e) {
//         console.log(e);
//     }

 
//     res.status(200).send({ message: 'Query Executed' })
// });




export default router