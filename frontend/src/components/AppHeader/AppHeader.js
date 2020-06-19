import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import './AppHeader.scss';

function AppHeader() {

    const { taskState, taskDispatcher } = useContext(TaskContext);
    return (
        <div className="app-header">

        </div>
    );
}

export default AppHeader;
