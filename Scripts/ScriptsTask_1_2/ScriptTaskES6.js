'use strict'

class NewPost {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class NewAttachedPost extends NewPost {
    constructor() {
        super('Автор', 'Текст', new Date().toISOString());
        this.highlighted = false;
    }

    makeTextHighlighted(highlighted) {
        this.highlighted = highlighted;
    }
}

let newAttachedPost = new NewAttachedPost();

console.log(newAttachedPost);

newAttachedPost.edit('Новый текст');
newAttachedPost.makeTextHighlighted(true);

console.log(newAttachedPost);