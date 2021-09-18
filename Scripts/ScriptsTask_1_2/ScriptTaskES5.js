'use strict'

/**
 * функция - конструктор
 * @param {string} author - автор
 * @param {string} text - текст
 * @param {number} date - дата в виде числа - кол - во миллисекунд, прошедших с 1 января 1970 года 00:00:00
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost() {
    Post.call(this, "автор", "текст", new Date().toISOString());
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(highlighted) {
    this.highlighted = highlighted;
};

let attachedPost = new AttachedPost();

console.log(attachedPost);

attachedPost.makeTextHighlighted(true);
attachedPost.edit("новый текст");

console.log(attachedPost);
