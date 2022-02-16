<script>
    import Card from '../shared/Card.svelte';
    import Button from '../shared/Button.svelte';
    import Todo from '../lib/todo';
    import { todos } from '../store';

    let todoContet;
</script>

<Card>
    <form
        on:submit|preventDefault={() => {
            todos.update(currentTodos => {
                currentTodos.unshift(new Todo(todoContet));
                return currentTodos;
            });
            todoContet = '';
        }}
    >
        <input bind:value={todoContet} type="text" placeholder="New Todo..." required />
        <Button icon="add" />
    </form>
</Card>

<style lang="scss">
    form {
        display: flex;
        align-items: center;

        input {
            width: 100%;
            height: 20px;
            margin-right: 10px;
        }
    }
</style>
