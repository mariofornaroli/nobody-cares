import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import './TaskDetails.scss';

const TaskDetails = ({ task }) => {
    const { taskDispatcher } = useContext(TaskContext);
    return (
        <>
            <div className="task-item">
                {/* onClick={() => taskDispatcher({ type: 'REMOVE_TASK', payload: { id: task.id } })}> */}
                <label className="task-title">
                    <h2>{task.sentence}</h2>
                </label>
            </div>
        </>
        // <li key={task.id}
        //     onClick={() => taskDispatcher({ type: 'REMOVE_TASK', payload: { id: task.id } })}>
        //     {task.title}
        // </li>
    )
};

export default TaskDetails;
