import { useState } from "react";


function App() {
const[count,setCount]=useState(0);

  const Incr = ()=> {
setCount(count+1)
  }
  const Decr = ()=> {
    setCount(count-1)
  }
  const Clear = ()=> {
    setCount(0)
  }
  return (
    <div>
      <h1>{count}</h1>
<button onClick={Incr} >Incr</button>
<button onClick={Decr}>Decr</button>
<button onClick={Clear}>Clear</button>
    </div>
  );
}

export default App;
