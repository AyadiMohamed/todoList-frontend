/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-template-curly-in-string */
import ICreateTask from "libs/tasks/src/lib/models/ICreateTask";
import ITask from "libs/tasks/src/lib/models/ITask";
import IUpdatetask from "libs/tasks/src/lib/models/IUpdateTask";
import ITaskListing from "libs/tasks/src/lib/models/ITaskListing"
import {instance} from "libs/utils/src/lib/axios/axios"
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