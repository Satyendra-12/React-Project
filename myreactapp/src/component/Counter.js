import { useState } from "react";

function Counter(){
    // let number = 0;
    const [number, setNumber] = useState(0);
    function handleClick(e){
        e.stopPropagation();
        setNumber(number+1);
        console.log(number);
    }
    return(
        <>
        <h1 style={{color:"black"}}>{number}</h1>
        <button onClick={handleClick}>Increase </button>
        </>
    )
}
export default Counter;