"use client"

import {useEffect, useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Counter: ${count}`
    }, [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => {
                setCount(count => count + 1)
            }}> Increment
            </button>
        </div>
    )
}