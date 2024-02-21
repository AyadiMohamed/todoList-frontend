/* eslint-disable @nx/enforce-module-boundaries */
import ITask from "../models/ITask";
import ITaskListing from "../models/ITaskListing";
import { action, makeObservable, observable, runInAction } from "mobx";
import {taskService} from "@react-monorepo/data-acesses"
import ICreateTask from "../models/ICreateTask";
import IUpdatetask from "../models/IUpdateTask";

class taskStore{

    taskListing : Array<ITaskListing> | null = null;
    task : ITask | null = null;
    loading  = false;

    constructor() {
        makeObservable(this,{
            //observable data
            taskListing : observable,
            task : observable,
            loading : observable,
            //actions
            getTasks : action,
            getTaskById : action,
            CreateTask : action,
            DeleteTask : action,
            UpdateTaske : action,
            MarkAsCompleted : action,
        })}
         // action
    getTasks(sortBy: string, skipCount: number, maxResultCount: number){
        this.loading = true;
        taskService.getTasks(sortBy, skipCount, maxResultCount).then(
            (response: any)=>{
                runInAction(()=>{
                    console.log('res');
                    console.log(response.data);
                    this.taskListing = response.data as Array<ITaskListing>;
                })

            }
        )
        .catch(
            (e : any)=>{
                //handle error
            }
        ).finally(
            ()=>{
                this.loading = false;
            }
        )
    }
    getTaskById(id : string){
        this.loading = true;
        taskService.getTaskById(id).then(
            (response: any)=>{
                runInAction(()=>{
                    console.log('res');
                    console.log(response.data);
                    this.task = response.data as ITask;
                })

            }
        )
        .catch(
            (e : any)=>{
                //handle error
            }
        ).finally(
            ()=>{
                this.loading = false;
            }
        )
    }
    CreateTask(createdTask : ICreateTask){
        this.loading = true;
        taskService.CreateTask(createdTask).then(
            (response : any)=>{
                console.log("task added")
            }
        ).catch(
            (e : any)=>{
                console.log("error"+e)
            }
        ).finally(
            ()=>{
                this.loading = false;
            }
            
        )
    }
    DeleteTask(id : string){
        
        this.loading = true;
        taskService.DeleteTask(id).then(
            (response : any) =>{
                runInAction(()=>{
                    if(response.status==200){
                        const index = this.taskListing?.findIndex(item => item.id === id); 
                        if(index !== undefined){
                            this.taskListing?.splice(index, 1);
                        }
                    }
                   
                })      
            }
        ).catch(
            (e : any)=>{
                runInAction(()=>{
                   //error handeling
                })      
            }
        ).finally(
            ()=>{
                this.loading= false;
            }
        )
    }

    UpdateTaske(id : string , update : IUpdatetask){
        this.loading = true;
        taskService.UpdateTaske(id, update).then(
            (response : any) =>{
                console.log("pet updated")
            }
        ).catch(
            (e : any)=>{
                console.log("error"+e);
            }
        ).finally(
            ()=>{
                this.loading= false;
            }
        )
    }

    MarkAsCompleted(id : string){
        this.loading = true;
        taskService.MarkAsCompleted(id).then(
            (response : any) => {
                if(response.status == 200 ){
                    console.log("task marked as complet")
                }
            }
        ).catch(
            (e : any)=>{
                console.log("error"+e);
            }
        ).finally(
            ()=>{
                this.loading= false;
            }
        )
    }

}


export default taskStore;

