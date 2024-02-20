import ICreateMember from "libs/members/src/lib/models/ICreateMembe";
import IMember  from 'libs/members/src/lib/models/IMember';
import IUpdateMember from "libs/members/src/lib/models/IUpdateMember"
import getHeader from "./base.service";
import IMemberListing from "libs/members/src/lib/models/IMemberListing"
import {instance} from "libs/utils/src/lib/axios/axios"

export const memberService = {

    getMembers,
    getMemberById,
    CreateMember,
    UpdateMember,
    DeleteMember

}

//get all
async function getMembers( sortBy: string, skipCount: number, maxResultCount: number): Promise<IMemberListing | undefined> {
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.get(`members?Sorting=${sortBy}&SkipCount=${skipCount}&MaxResultCount=${maxResultCount}`, config);
}

//getById
async function getMemberById(id : string) : Promise<IMember|undefined>{
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.get(`members/${id}`,config)

}

//Create Task
async function CreateMember(member : ICreateMember) : Promise<IMember | undefined> {
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.post('members',member,config)
}
//update Task
async function UpdateMember(id : string ,task : IUpdateMember ): Promise<IMember | undefined> {
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.put(`members/${id}`,task,config)
}
//delete task
async function DeleteMember(id : string) : Promise <undefined>{
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.put(`members/${id}`,config)  
}
