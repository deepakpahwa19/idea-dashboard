import { database } from "../database/database"

export const createIdeaService = (title, description) => {
    return new Promise((resolve, reject) => {
        console.log('Creating idea');
        database.createIdea(title, description)
        resolve('Data created successfully.')
    })
}

export const updateIdeaService = (id, title, description) => {
    return new Promise((resolve, reject) => {
        database.updateIdea(id, title, description);
        resolve('Idea updated succesfully');
    })
}

export const getIdeasService = () => new Promise((resolve, reject) => {
    const ideas = database.getIdeas();
    // console.log('Getting ideas...', Object.values(ideas));
    resolve(Object.values(ideas));
})

export const deleteIdeaService = (id) => new Promise((resolve, reject) => {
    database.deleteIdea(id);
    resolve('Idea deleted successfully...')
})