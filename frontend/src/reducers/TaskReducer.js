import uuid from 'uuidv4';

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            // return [...state, { title: action.payload.title, id: uuid() }];
            return {
                ...state,
                list: [
                    ...state.list,
                    { title: action.payload.title, id: uuid() }]
            };
        case 'REMOVE_TASK':
            return {
                ...state,
                list: state.list.filter(t => (t.id !== action.payload.id))
            };
        case 'TASK_API_LOADING':
            return {
                ...state,
                isLoading: true,
                loadingError: false
            }
        case 'TASK_API_LIST_SUCCESS':
            return {
                ...state,
                list: action.payload.data,
                isLoading: false,
                loadingError: false
            }
        case 'TASK_API_LIST_ERROR':
            return {
                ...state,
                isLoading: false,
                loadingError: true
            }
        case 'OPEN_ADD_MODAL':
            return {
                ...state,
                addModalShow: true
            }
        case 'CLOSE_ADD_MODAL':
            return {
                ...state,
                addModalShow: false
            }
        default:
            return state;
    }
}

