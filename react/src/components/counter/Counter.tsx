import  { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [amount,setAmount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input type="text"
                name='amout'
                value={amount}
                onChange={(e)=> setAmount(parseInt(e.target.value))}
            />
            <button onClick={() => setCount(0)}>Set</button>
        </div>
    )
}
