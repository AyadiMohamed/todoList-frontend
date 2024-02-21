/* eslint-disable @nx/enforce-module-boundaries */
import {ICreateMember} from "@react-monorepo/members";
import {IMember}  from '@react-monorepo/members';
import {IUpdateMember} from "@react-monorepo/members"
import getHeader from "./base.service";
import {IMemberListing} from "@react-monorepo/members"
import {instance} from "@react-monorepo/utils"

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
async function UpdateMember(id : string ,member : IUpdateMember ): Promise<IMember | undefined> {
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.put(`members/${id}`,member,config)
}
//delete task
async function DeleteMember(id : string) : Promise <undefined>{
    const headers = getHeader();// header
    const config = { headers: headers };
    return await instance.put(`members/${id}`,config)  
}
