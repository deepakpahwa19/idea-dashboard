class Database {
    constructor() {
        this.ideas ={};
    }

    createIdea(title, body) {
        const id = Math.floor(Math.random() * 1000000000)
        const date = Date.now();
        const newIdea = {id, created_date: date, title, body}
        this.ideas[id] = newIdea;
        console.log(this.ideas)
    }

    updateIdea(id, title, body) {
        const existingIdea = this.ideas[id];
        console.log('existingIdea ... ', existingIdea)
        const newIdea = {...existingIdea, title, body}
        console.log('newIdea ... ', newIdea)
        this.ideas[id] = newIdea;
        console.log('this.ideas ... ', this.ideas)
    }

    deleteIdea(id) {
        delete this.ideas[id];
    }

    getIdeas() {
        return this.ideas;
    }
}

export const database = new Database();
