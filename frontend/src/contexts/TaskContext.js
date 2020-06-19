import React, { createContext, useReducer } from 'react';
import { taskReducer } from '../reducers/TaskReducer';

const initialTaskState = {
    list: [],
    fullBackendData: [],
    isLoading: false,
    loadingError: false
};

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

    const [taskState, taskDispatcher] = useReducer(taskReducer, initialTaskState);

    return (
        <TaskContext.Provider value={{ taskState, taskDispatcher }}>
            {props.children}
        </TaskContext.Provider>)
}

export default TaskContextProvider;


