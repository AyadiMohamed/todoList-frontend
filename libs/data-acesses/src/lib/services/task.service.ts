/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-template-curly-in-string */
import {ICreateTask} from "@react-monorepo/tasks";
import {ITask} from "@react-monorepo/tasks";
import {IUpdatetask} from "@react-monorepo/tasks";
import {ITaskListing} from "@react-monorepo/tasks"
import {instance} from "@react-monorepo/utils"
import getHeader from "./base.service";

export const taskService ={
    getTasks,
    getTaskById,
    CreateTask,
    UpdateTaske,
    DeleteTask,
    MarkAsCompleted

    

}

//get all
async function getTasks( sortBy: string, skipCount: number, maxResultCount: number): Promise<Array<ITaskListing> | undefined> {
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.get(`app/task?Sorting=${sortBy}&SkipCount=${skipCount}&MaxResultCount=${maxResultCount}`, config);
}

//getById
async function getTaskById(id : string) : Promise<ITask|undefined>{
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.get(`app/task/${id}`,config)

}

//Create Task
async function CreateTask(task : ICreateTask) : Promise<ITask | undefined> {
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.post('app/task',task,config)
}
//update Task
async function UpdateTaske(id : string ,task : IUpdatetask ): Promise<ITask | undefined> {
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.put(`app/task/${id}`,task,config)
}
//delete task
async function DeleteTask(id : string) : Promise <undefined>{
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.put(`app/task/${id}`,config)  
}

//mark as completed
async function MarkAsCompleted(id : string) : Promise<undefined> {

    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.post(`app/task/${id}/mark-as-complete`,config)
}