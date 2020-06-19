
import axios from 'axios';

export const getBackendResponseData = (res) => {
    return res && res.data && res.data.data;
}

export const reloadSentencesList = (taskDispatcher) => {
    taskDispatcher({ type: 'TASK_API_LOADING' });
    let requestURL = `${process.env.REACT_APP_BACKEND_URL}/api/sentence/list`;
    return axios.post(requestURL, {}).then(
        (res) => {
            const backendData = getBackendResponseData(res);
            taskDispatcher({ type: 'TASK_API_LIST_SUCCESS', payload: { data: backendData } });
        }).catch(
            taskDispatcher({ type: 'TASK_API_LIST_ERROR' }
            )
        );
}

export const addSentences = (taskDispatcher, newSentenceObj) => {
    taskDispatcher({ type: 'TASK_API_LOADING' });
    let requestURL = `${process.env.REACT_APP_BACKEND_URL}/api/sentence`;
    return axios.post(requestURL, newSentenceObj);
}