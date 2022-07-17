import { AiFillCloseCircle } from 'react-icons/ai'
import { AiFillCheckCircle } from "react-icons/ai";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder' : ''}`}
         onDoubleClick = {() => onToggle(task.id)}>
            <h3>
                { `${task.id}. ${task.text}` } 
                <h3 className = 'btn'> <AiFillCloseCircle style = {{color:'red', cursor: 'pointer'}} onClick = {() => onDelete(task.id)} />
                </h3>
            </h3>
            <p>{ task.day }</p>
        </div>
        
    )
}

export default Task