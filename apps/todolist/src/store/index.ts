/* eslint-disable @nx/enforce-module-boundaries */



import { useContext , Context , createContext } from "react";
import {memberStore} from "@react-monorepo/members";
import {taskStore} from "@react-monorepo/tasks";

const store = {

    memberStore : new memberStore(),
    taskStore : new taskStore(),
}

export const storeContext = createContext(store);
export const useStore=()=>{
    return useContext (storeContext as Context<any> )as typeof store
}
export default store