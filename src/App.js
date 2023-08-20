import { useSelector , useDispatch } from 'react-redux';
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=> state.counter);
  const disptach = useDispatch();
  const increment =()=>{
disptach(actions.increment());
  };
  const decrement =()=>{
    disptach(actions.decrement());
  }
  const addBy=()=>{
    disptach(actions.addBy(10));
  }

  return (
    <div> 
      <h1>Counter App</h1>
      <h2>{counter}</h2>
     <button onClick={increment}>increment</button>
     <button onClick={decrement}>decrement</button> 
     <button onClick={addBy}>Add value</button>
    </div>
  );
}

export default App;
