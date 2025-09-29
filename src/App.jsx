import { useState } from 'react'

const App = () => {
  

   const [number,setNumer] = useState(10);

   const handleAdd = () =>{
     setNumer(number + 1);
   }
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default App