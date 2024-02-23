export interface ITaskListing{
    id : string;
    title : string;
    description : string;
    dueDate : Date;
    completed : boolean;
    memberId : string;
    memberName : string;
}