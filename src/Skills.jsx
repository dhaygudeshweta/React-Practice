import { useState } from "react";

function Skills(){

    const [skills,setskills]=useState([]);
    const handleskills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setskills([...skills,event.target.value])
        }else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h3> select your skills</h3>

            <input onChange={handleskills} type="checkbox" id="javascript" value="javascript"></input>
            <label htmlFor="javascript">javascript</label>
            <br></br>
            <input onChange={handleskills} type="checkbox" id="Html" value="Html"></input>
            <label htmlFor="Html">Html</label>
            <br></br>
            <input onChange={handleskills} type="checkbox" id="Css" value="Css" ></input>
            <label htmlFor="Css">Css</label>
            <br></br>
            <input onChange={handleskills} type="checkbox" id="Reactjs" value="Reactjs"></input>
            <label htmlFor="Reactjs">Reactjs</label>
            <h1>{skills.toString()}</h1>
        </div>
        
        
    )
}
export default Skills;