import React from 'react'

function Skills({children,...restprops}) {
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'
        , padding:'5px',color:'green'
    }}>
        <span {...restprops}>{children}</span>
    </div>
  )
}

export default Skills