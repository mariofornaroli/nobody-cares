import React, { useContext } from 'react';
import TaskList from '../TaskList/TaskList';
import { TaskContext } from '../../contexts/TaskContext';
import './TaskSection.scss';
import { AddSentenceModal } from '../AddSentenceModal/AddSentenceModal';

function TaskSection() {

    const { taskState, taskDispatcher } = useContext(TaskContext);
    return (
        <>
            <div className="fab-add-sentence">
                <button type="button" onClick={() => taskDispatcher({ type: 'OPEN_ADD_MODAL' })}>
                    Add Sentence
                </button>
            </div>
            <div className="container">
                <div className="task-section">
                    {taskState.isLoading && <h3>Loading...</h3>}
                    <TaskList />
                </div>
            </div>
            <AddSentenceModal 
            show={taskState.addModalShow} 
            handleClose={() => taskDispatcher({ type: 'CLOSE_ADD_MODAL' })}/>
        </>
    );
}

export default TaskSection;
