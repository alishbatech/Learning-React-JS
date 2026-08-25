import { useMemo, useState } from 'react'

function WithUseMemo() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    console.log("RENDER")
    const expensiveCal = (num) => {

        console.log("Expensive calculation is running...")
        let total = 0;
        for (let index = 0; index < 100000; index++) {
            total += index;
        }
        return total + num;
    }

    let result = useMemo(() => expensiveCal(count), [count])
    return (
        <div>
            <h2>Result: {result}</h2>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type here..."
            />

            <p>{text}</p>
        </div>
    )
}

export default WithUseMemo