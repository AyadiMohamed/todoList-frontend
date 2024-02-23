import { useRouterStore } from "mobx-state-router";
import { useEffect } from "react";

export const Sign = () =>{
    const routStore =useRouterStore();
    useEffect(() => {
        setTimeout(() => 
        {
            routStore.goTo("home")
        },
        2000);
        
    },[]);
    return(
        <>
        </>
        
    );
};
export default Sign;