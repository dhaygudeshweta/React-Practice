import { useState } from "react";

const Counter=()=>{

    const [count ,setCount]=useState(0);

    const handleCounter=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h1>
                Counter:{count}
            </h1>
            <button onClick={handleCounter}> Update counter</button>
        </div>
    )

}
export default Counter;