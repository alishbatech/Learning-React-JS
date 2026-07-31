import React from 'react'
import { useState } from 'react'

function UserDashboard({ isPremium }) {
    const [credits, setCredits] = useState(100)

    if (!isPremium) {
        return (
            <div style={{
                padding: '20px', margin: '20px',
                borderRadius: '30px', backgroundColor: 'lightblue'
            }}>
                <h2>Upgrade Premium to see your credits.</h2>
            </div>
        )
    }

    return (
        <div style={{
            padding: '20px', margin: '20px',
            borderRadius: '30px', backgroundColor: 'lightblue'
        }}>
            <h2>You have {credits} Credits.</h2>
            <button onClick={() => setCredits(0)}>Spend all Credits</button>
        </div>
    )
}

export default UserDashboard