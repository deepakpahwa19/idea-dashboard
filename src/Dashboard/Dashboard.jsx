import React, { useCallback, useEffect, useState } from 'react'
import { IdeaCard } from '../IdeaCard/IdeaCard';
import { deleteIdeaService, getIdeasService, updateIdeaService } from '../services/Idea.service';
import { CreateIdea } from '../CreateIdea/CreateIdea'
import "./Dashboard.css"

export const Dashboard = () => {

    const [ideas, setIdeas] = useState([]);

    const getIdeas = useCallback(async () => {
        try {
            const response = await getIdeasService();
            setIdeas(response);
        } catch (error) {
            console.log('Error while fetching all ideas ', error)
        }
    }, []);

    useEffect(() => {
        getIdeas();
    }, [getIdeas])

    const updateIdea = useCallback(async (id, title, description) => {
        try {
            await updateIdeaService(id, title, description);
            getIdeas();
        } catch (error) {
            console.log('Error while updating idea ', error)
        }
    }, [getIdeas])

    const deleteIdea = useCallback(async (id) => {
        await deleteIdeaService(id);
        getIdeas();
    }, [getIdeas])

    return (
        <>
            <CreateIdea getIdeasAfterCreation={getIdeas} />
            <div className='idea-dashboard'>
                {ideas.map(idea => <IdeaCard key={idea.id} id={idea.id} title={idea.title} description={idea.body} onClickSave={updateIdea} onClickDelete={deleteIdea} />)}
            </div>
        </>
    )
}