import React ,{ useState, useCallback } from 'react'
import Child from "./child";
import Todos from './Todos';

function Parent() {

    const [no, setNo] = useState(0)
    const [nos, setNos] = useState(0)
    const [todos, setTodos] = useState([]);

    // console.log("render parent");

    const addTodo = useCallback(() => {
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  
  return (
    <>
    <div>Parent</div>
    <input type='text' value={no} onChange={(e)=>setNo(e.target.value)}></input>
    <div>
        {no}
    </div>

    <div>========================================================================================</div>
    {<Child no={nos} setNo={setNos}/>}
    
    <div>========================================================================================</div>
    <Todos todos={todos} addTodo={addTodo} />
    </>
  )
}

export default Parent




/* function Parent() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Parent */