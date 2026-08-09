import { createContext } from "react";

export const UserContext=createContext({
    user:{name:'Unknown',
    role:'Student',
    theme:'Light'},
    setUser: ()=>{}
});