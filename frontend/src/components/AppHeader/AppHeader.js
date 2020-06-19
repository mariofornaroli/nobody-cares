import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import './AppHeader.scss';

function AppHeader() {

    const { taskState, taskDispatcher } = useContext(TaskContext);
    return (
        <div className="app-header">
            <button className="fab-btn"
                onClick={() => taskDispatcher({ type: 'OPEN_ADD_MODAL' })}>
                +
                </button>
        </div>
    );
}

export default AppHeader;
