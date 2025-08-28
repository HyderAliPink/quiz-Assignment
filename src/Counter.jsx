import React, { useState } from "react"
export default function Counter() {

    const [counter, setCounter] = useState(0)

function addtion(){
    setCounter(counter + 1)

}

function subtraction() {
    if (counter === 0) {
return;
        
    }
    setCounter(counter - 1)
    
}
function Reset() {
    setCounter(0)
}




    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={addtion}>+</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={subtraction}>-</button>
        </div>
    )

    
}