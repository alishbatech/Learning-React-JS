import { useState } from "react";


export default function useForm(initialvalue={}){
        const [values,setValues]=useState(initialvalue)
  
        const handleChange=(e)=>{
          const {name , value}=e.target;

          setValues(prev=>({
            ...prev,
            [name]:value
          }))
        }

}