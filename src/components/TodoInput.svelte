<script>
    import Card from '../shared/Card.svelte';
    import Button from '../shared/Button.svelte';
    import InputText from '../shared/InputText.svelte';
    import Todo from '../lib/todo';
    import { todos } from '../store';

    let todoContet;
</script>

<Card>
    <form
        on:submit|preventDefault={() => {
            todos.update(currentTodos => {
                return [new Todo(todoContet), ...currentTodos];
            });
            todoContet = '';
        }}
    >
        <InputText bind:value={todoContet} placeholder="New Todo..." />
        <Button icon="add" />
    </form>
</Card>

<style lang="scss">
    form {
        display: flex;
        align-items: center;

        & :global(input) {
            margin-right: 10px;
        }
    }
</style>
