import React, { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { addSentences, reloadSentencesList } from './../../utils/http-utils';

export const AddSentenceForm = () => {
    const { taskDispatcher } = useContext(TaskContext);
    const [newSentence, setNewSentence] = useState('');
    const [newSentenceAuthor, setNewSentenceAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const objToAdd = { sentence: newSentence, sentence_author: newSentenceAuthor };
        addSentences(taskDispatcher, objToAdd).then(() => {
            taskDispatcher({ type: 'CLOSE_ADD_MODAL' })
            reloadSentencesList(taskDispatcher)
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="newTask">Sentence</label>
                    <input id="newTask" onChange={(e) => setNewSentence(e.target.value)} />
                </div>
                <div className="form-item">
                    <label htmlFor="newTask">Sentence author</label>
                    <input id="newTask" onChange={(e) => setNewSentenceAuthor(e.target.value)} />
                </div>

                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
