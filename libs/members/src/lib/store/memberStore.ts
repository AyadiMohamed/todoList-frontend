/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nx/enforce-module-boundaries */
import {IMember} from "@react-monorepo/members";
import {IMemberListing} from "@react-monorepo/members";
import { action, makeObservable, observable, runInAction } from "mobx";
import {memberService} from "@react-monorepo/data-acesses"
import {ICreateMember} from "@react-monorepo/members";
import {IUpdateMember} from "@react-monorepo/members";

class memberStore{
    
    memberListing : Array<IMemberListing> | null = null;
    member : IMember | null = null;
    loading  = false;

    constructor(){
        makeObservable(this,{
            //observable data
            memberListing : observable,
            member : observable,
            loading : observable,

            //actions
            getMembers : action,
            getMemberById : action,
            CreateMember : action,
            DeleteMember : action,
            UpdateMember: action

        })
    }

    getMembers(sortBy: string, skipCount: number, maxResultCount: number){
        this.loading = true;
        memberService.getMembers(sortBy, skipCount, maxResultCount).then(
            (response: any)=>{
                runInAction(()=>{
                    console.log('res');
                    console.log(response.data);
                    this.memberListing = response.data as Array<IMemberListing>;
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

    getMemberById(id : string){
        this.loading = true;
        memberService.getMemberById(id).then(
            (response: any)=>{
                runInAction(()=>{
                    console.log('res');
                    console.log(response.data);
                    this.member = response.data as IMember;
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
    CreateMember(member : ICreateMember){
        this.loading = true;
        memberService.CreateMember(member).then(
            (response : any)=>{
                console.log("member added")
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
    DeleteMember(id : string){
        
        this.loading = true;
        memberService.DeleteMember(id).then(
            (response : any) =>{
                runInAction(()=>{
                    if(response.status===200){
                        const index = this.memberListing?.findIndex(item => item.id === id); 
                        if(index !== undefined){
                            this.memberListing?.splice(index, 1);
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
    UpdateMember(id : string , update : IUpdateMember){
        this.loading = true;
        memberService.UpdateMember(id, update).then(
            (response : any) =>{
                console.log("member updated")
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
export default memberStore;