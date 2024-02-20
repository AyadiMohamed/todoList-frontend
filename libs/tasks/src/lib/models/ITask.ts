export default interface ITask {
    id : string;
    title : string;
    description : string;
    dueDate : Date;
    completed : boolean;
    memberId : string;
    memberName : string;
}