import { createContext } from "react";

export const UserContext=createContext({
    name:'Unknown',
    role:'Student',
    theme:'Light'
});