import React, { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { addSentences, reloadSentencesList } from './../../utils/http-utils';
import './AddSentenceForm.scss';

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
            <div class="modal__content modal__content--active">
                <div class="modal__text">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input type="text" id="newTask" onChange={(e) => setNewSentence(e.target.value)} />
                            <label for="input" class="control-label">Frase</label><i class="bar"></i>
                        </div>
                        <div class="form-group">
                            <input type="text" id="newTask" onChange={(e) => setNewSentenceAuthor(e.target.value)} />
                            <label for="input" class="control-label">Chi l'ha detta</label><i class="bar"></i>
                        </div>
                        <div class="button-container">
                            <button type="submit" class="button"><span>Pubblica</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
