
import { useState } from "react"
import User from "./User";
import Skills from "./skills";
import Inputfields from "./inputfields";

//import Counter from "./Conter";

function App(){
// const [fruit,setFruit]=useState("apple");

// const handleFruit=()=>{
//   setFruit("banana");


  // let userobj={
  //   username:"shweta",
  //   age:28,
  //   email:"Shweta@gamil.com"
  // }

  const [name ,setname]=useState('');
  const [password,setpassord]=useState('');
  const[email,setemail]=useState('');
   return(
    

//     <div>
// <User user={userobj} />

//      {/* <h1>{fruit}</h1>
//      <button onClick={handleFruit}>change fruit</button>
//       <Counter/> */}
//     </div>

<form action="" mehtod="get">


  <Inputfields />
  <br></br>
  <br></br>
  <input type="text" value={name} onChange={(Event)=>setname(Event.target.value)} placeholder="enter name"></input>
  <br></br>
  <br></br>
   <input type="password" value={password} onChange={(Event)=>setpassord(Event.target.value)}placeholder="enter password"></input>
   <br></br>
   <br></br>
    <input type="text"  value={email}onChange={(Event)=>setemail(Event.target.value)} placeholder="enter email"></input>
    <br></br>
    <br></br>
    <button onClick={()=>{setname('');setpassord('');setemail('')}}>clear</button>
    <br></br>
    <h3>{name}</h3>
   <h3>{password}</h3>
   <h3>{email}</h3>
 <Skills />
</form>
    
    
   )
  
  
}
export default App;

