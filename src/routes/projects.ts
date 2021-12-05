import {Request, Response, Router} from "express"
import Project from '../../models/projectModel'

const router = Router();

interface projectAttributes {
    name: string;
    desc: string;
}

router.post("/create-project", async (req: Request, res: Response) =>  {
    const {name, desc}: projectAttributes = req.body
    let project
    try {
        project = await Project.create({ name, desc });
    } catch (e) {
        console.log(e);
    }

    if (!project) {
        console.log('error happened');
        return
    }
    console.log(project.toJSON());
    res.status(201).send({ message: 'Query Executed' })
});

router.get("/get-projects", async (req: Request, res: Response) =>  {
    let projects
    try {
        projects = await Project.findAll();
    } catch (e) {
        console.log(e);
    }

    if (!projects) {
        console.log('error happened');
        return
    }
    res.status(200).send({data: projects})
});

router.delete("/delete-project/:id", async (req: Request, res: Response) =>  {
  
    const {id} = req.params
    try {
        await Project.destroy({
            where: {
              id
            }
        })
    } catch (e) {
        console.log(e);
    }

 
    res.status(200).send({ message: 'Query Executed' })
});




export default router