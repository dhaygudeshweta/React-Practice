import { useState } from "react";

function Inputfields(){

    const [nikname, setinputvalue]=useState('');
    const [val,setskill]=useState([]);
    const [gender,setgender]=useState('female');
    const [city,setcity]=useState('pune');
    const handleskill=(event)=>{
         if(event.target.checked){
            setskill([...val,event.target.value]);
        }else
            {
            setskill([...val.filter((item)=>item!=event.target.value)]);
        }

    }
    return(

        <div>
            <input  value={nikname} type="text" onChange={(Event)=>setinputvalue(Event.target.value)}placeholder="enter name"></input>
            <h3>{nikname}</h3>

            <input type="checkbox" onChange={handleskill}id="reactjs"  value="reactjs"></input>
            <label htmlFor="reactjs">reactjs</label>
            <br></br>
            <input type="checkbox" onChange={handleskill}id="nextjs"  value="nextjs"></input>
            <label htmlFor="nextjs">nextjs</label>

            <h4>{val.toString()}</h4>
           <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender" checked=
           {gender=='male'}id="male" value="male"/> 
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender"  checked={gender=='female'}id="female" value="female"/>
            <label htmlFor="female">female</label>
            <h3>select gender:{gender}</h3>
            <br></br>
            <br></br>
            <h4>select city</h4>
            <select  onChange={(event)=>setcity(event.target.value)}defaultValue={"pune"}>
                <option  value="mumbai">mumbai</option>
                <option  value="pune">pune</option>
                <option  value="delhi">delhi</option>
            </select>
            <h4>selected city:{city}</h4>


        </div>
    )
}
export default Inputfields;