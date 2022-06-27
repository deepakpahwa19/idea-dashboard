import React, { useState } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import './IdeaCard.css'

export const IdeaCard = ({ id, title, description, createdOn, onClickSave, onClickDelete }) => {

    const [isInEditMode, setIsEditMode] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const [descriptionValue, setDescriptionValue] = useState(description);

    return (
        <div className='idea-card'>
            {isInEditMode &&
                <>
                    <input value={titleValue} onChange={event => setTitleValue(event.target?.value)} />
                    <textarea value={descriptionValue} onChange={(event) => setDescriptionValue(event.target?.value)} />
                    <button onClick={() => {
                        onClickSave(id, titleValue, descriptionValue)
                        setIsEditMode(false)
                    }}>Save</button>
                </>}
            {!isInEditMode && <>
                <div className='idea-content'>
                    <label className='idea-title'>{titleValue}</label>
                    <p className='idea-description'>{description}</p>
                </div>
                <div className='idea-button-group'>
                    <FaRegEdit onClick={() => setIsEditMode(true)} />
                    <FaRegTrashAlt onClick={() => onClickDelete(id)} />
                </div>
            </>}
        </div>
    )

}