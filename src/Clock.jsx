import { useEffect, useState } from "react"

function Clock ({color}){

    const [time,settime]=useState(0);
    useEffect(()=>{ 
        setInterval(()=>{
            settime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return(
        <div>
            <h3 style={{color:color,backgroundColor:'#000',width:"120px",padding:"10px",borderRadius:"5px"}}>{time}</h3>
        </div>
    )
}
export default Clock