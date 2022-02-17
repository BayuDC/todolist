export default class Todo {
    constructor(content) {
        this.id = Date.now();
        this.content = content;
        this.isDone = false;
    }
}
