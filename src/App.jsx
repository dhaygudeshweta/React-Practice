
import { useState } from "react"
import User from "./User";
//import Counter from "./Conter";

function App(){
// const [fruit,setFruit]=useState("apple");

// const handleFruit=()=>{
//   setFruit("banana");


  let userobj={
    username:"shweta",
    age:28,
    email:"Shweta@gamil.com"
  }
  


 return(

    <div>
<User user={userobj} />

     {/* <h1>{fruit}</h1>
     <button onClick={handleFruit}>change fruit</button>
      <Counter/> */}
    </div>
    
    
  )
  
}
export default App

