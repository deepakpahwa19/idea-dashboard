import React, { useCallback, useState } from 'react'
import { createIdeaService } from '../services/Idea.service';
import './CreateIdea.css'


export const CreateIdea = ({getIdeasAfterCreation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const onClickAddButtonHandler = useCallback(async () =>{
        try {
            const response = await createIdeaService(title, description);
            setMessage(response);
            getIdeasAfterCreation && getIdeasAfterCreation();
            setTimeout(() => setMessage(''), 1000);
        } catch (error) {
            console.log('Error thrown ', error)
        }
    },[description, getIdeasAfterCreation, title]);


    return (
        <div className='idea-container'>
            <h6>Add an Idea</h6>
            {message && <div className='idea-notification'>{message}</div>}
            <input title='title' autoFocus type='text' value={title} onChange={(event) => setTitle(event.target?.value) } />
            <textarea value={description} onChange={(event) => setDescription(event.target?.value) } />
            <button type="button" onClick={onClickAddButtonHandler} disabled={!title}>Add</button>
        </div>
    )
}