
import { useState } from "react"
import User from "./User";
import Skills from "./skills";
import Inputfields from "./inputfields";

import ReuseLoops from "./ReuseLoops";
import Clock from "./Clock";

//import Counter from "./Conter";

function App() {
  // const [fruit,setFruit]=useState("apple");

  // const handleFruit=()=>{
  //   setFruit("banana");


  // let userobj={
  //   username:"shweta",
  //   age:28,
  //   email:"Shweta@gamil.com"
  // }

  // const [name ,setname]=useState('');
  // const [password,setpassord]=useState('');
  // const[email,setemail]=useState('');
  //  return(


  //     <div>
  // <User user={userobj} />

  //      {/* <h1>{fruit}</h1>
  //      <button onClick={handleFruit}>change fruit</button>
  //       <Counter/> */}
  //     </div>

  {/* <form action="" mehtod="get">


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
     */}
  const userData = [{
    name:'shweta',
    age: 28,
    email:'shwwetagmail.com',
    Id: 1

  }, {
    name:'shrikant',
    age: 31,
    email:'shrikantagmail.com',
    Id: 2
  }, {
    name:'samarth',
    age: 3,
    email:'samarthgmail.com',
    Id: 3

  }

  ]
  const [color,setcolor]=useState('white');
  return (
    

    
    

    <div>
      <select onChange={(Event)=>setcolor(Event.target.value)}>
        <option value={"red"}>red</option>
        <option value={"yellow"}>yellow</option>
        <option value={"orange"}>orange</option>

      </select>

      <Clock color={color}/>
      {
  userData.map((user)=>(
        <div key={user.Id}>
<ReuseLoops data={user}/>
        </div>
      ))
}
      <table border="1">
        <thead>
          <tr>
        <td>Id</td>
        <td>name</td>
        <td>age</td>
        <td>email</td>
        </tr>
       </thead>
       <tbody>
        {
          userData.map((user)=>(
               <tr key={user.Id}>
        <td>{user.Id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        </tr>
          ))

          
        }
       </tbody>
      </table>

      
       
    </div>
  






  )



}
export default App;

