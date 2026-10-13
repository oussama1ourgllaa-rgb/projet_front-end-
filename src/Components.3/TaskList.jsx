import {useContext} from 'react';
import {TaskContext} from '../Context/TaskContext';
import TaskItem from './TaskItem';

const TaskList=()=>{
     const{state}= useContext(TaskContext);


    return (

        <div className="w-75 mx-auto mb-4">
            <h2>Liste des tâches</h2>
        <ul className="list-group">
              {   (state.tasks.length>0)?(
             
                    state.tasks.map((t,pos)=><TaskItem key={t.id} task={t}/>)):
                    (<span calssName="text-danger">Aucune tâche ....</span>)
                
                 

              }





        </ul>
        </div>
    )



}
export default TaskList;