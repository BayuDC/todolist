import { writable } from 'svelte/store';

export const todos = writable(JSON.parse(localStorage.getItem('todos')) || []);

todos.subscribe(currentTodos => {
    localStorage.setItem('todos', JSON.stringify(currentTodos));
});
