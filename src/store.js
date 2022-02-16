import { writable } from 'svelte/store';
import Todo from './lib/todo';

export const todos = writable([new Todo('Learn Svelte'), new Todo('Learn Django'), new Todo('Learn Go')]);
