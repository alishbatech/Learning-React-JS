import { createContext } from "react";


export const UserContext=createContext({
    userProfile:{
        userName:"Unknown",
        isLogin:false,
    },
    setUserProfile:()=>{}
})