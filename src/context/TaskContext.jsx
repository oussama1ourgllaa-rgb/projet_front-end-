import { useReducer,createContext } from "react"
//créer un context
export const TaskContext=createContext();

const initialState={tasks:[]};
const TaskReducer=(state,action)=>{
     switch(action.type){
        case "ADD":
             return {...state,tasks:[...state.tasks,action.payload]};

        case "REMOVE":
             return {...state,tasks:state.tasks.filter(s=>s.id!==action.payload)};
        case "TOGGLE":
             return {...state,tasks:state.tasks.map(s=>s.id===action.payload?{...s,completed:!s.completed}:s)};
        default:

             return state;
     }
}




export const TaskProvider=({children})=>{
   const [state,dispatch]=useReducer(TaskReducer,initialState)

  return(
     <TaskContext.Provider  value={{state,dispatch}}>
           {children}

     </TaskContext.Provider>



  )



}