import React from 'react'

function StudentResult({marks}) {
    let result;
    if(marks>=80) 
        result="🎉Excellent🎇✨";
    else if(marks>=50) 
        result="Passed✅";
    else
         result="Failed❌";
    return (
        <div
            style={{
                margin: '20px', padding: '20px',
                border: '2px solid blue', width: '300px'
            }}>
            <h2>Student Result</h2>
            {result}
        </div>
    )
}

export default StudentResult