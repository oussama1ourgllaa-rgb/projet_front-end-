import {TaskProvider} from "./context/TaskContext";
import TaskForm from "./Components.3/TaskForm";
import TaskItem from "./Components.3/TaskItem";
import TaskList from "./Components.3/TaskList";



const App=()=>{
  return (
  <TaskProvider>
    <TaskForm/>
    <TaskList/>
  </TaskProvider>


  )






}
export default App;