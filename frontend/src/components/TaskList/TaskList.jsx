import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import TaskDetails from '../TaskDetails/TaskDetails';
import axios from 'axios';
import moment from 'moment';
import { getBackendResponseData, reloadSentencesList } from '../../utils/http-utils';

import './TaskList.scss';

const TaskList = () => {
    const { taskState, taskDispatcher } = useContext(TaskContext);

    useEffect(() => {
        reloadSentencesList(taskDispatcher);
    }, [])
    return (

        <div className="tasks">
            <h1 className="list-title">{moment().format("DD/MM/YYYY")}</h1>
            {
                taskState.isLoading && <div className="loader">Loading...</div>
            }
            {
                taskState.list && taskState.list.map(t => <TaskDetails key={t._id} task={t} />)
            }
        </div>
    );
}

export default TaskList;
