import {useContext} from "react";
import {TaskContext} from '../Context/TaskContext';

const TaskItem=({task})=>{
       const{dispatch}=useContext(TaskContext);


       return (

           <li className="list-group-item d-flex justify-content-between">
             <span style={{textDecoration:`${task.completed?"line-through":"none"}`}} onClick={()=>{dispatch({type:"TOGGLE",payload:task.id})}}>
                {task.title}
             </span>
             <button className="btn btn-sm btn-danger" onClick={()=>dispatch({type:"REMOVE",payload:task.id})}>Delete</button>


           </li>





       )






}
export default TaskItem;