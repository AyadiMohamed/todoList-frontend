export interface ICreateTask {
    id : string;
    title : string;
    description : string;
    dueDate : Date;
    completed : boolean;
    assignedTo : string;
    memberName : string;
}