import React from "react";

// with JSX 
export const Hello = () => {
    return (

        <div id='container'>
            <h2 style={{color: 'red'}}>Hello Alishba</h2>
        </div>

    );
};

// without JSX 

export const HelloWithoutJSX=()=>{
   return(
     React.createElement("div",{id:"container"},
        React.createElement("h2",null,"Hello Alishba")
    )
   );
}
