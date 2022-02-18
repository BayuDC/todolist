<script>
    import { createEventDispatcher } from 'svelte';
    import Card from '../shared/Card.svelte';
    import Checkbox from '../shared/Checkbox.svelte';
    import Button from '../shared/Button.svelte';
    import DeleteButton from '../shared/DeleteButton.svelte';
    import InputText from '../shared/InputText.svelte';

    export let todo;

    const dispatch = createEventDispatcher();
    const updateTodo = () => {
        editMode = false;
        dispatch('update');
    };

    let editMode = false;
</script>

<Card>
    <div>
        <Checkbox
            checked={todo.isDone}
            on:check={e => {
                todo.isDone = e.detail;
                dispatch('update');
            }}
        />

        {#if editMode}
            <form class="todo" on:submit|preventDefault={updateTodo}>
                <InputText bind:value={todo.content} />
            </form>
            <Button icon="done" on:click={updateTodo} />
        {:else}
            <p class="todo" class:checked={todo.isDone} on:dblclick={() => (editMode = true)}>
                {todo.content}
            </p>
            <DeleteButton on:delete={() => dispatch('delete', todo)} />
        {/if}
    </div>
</Card>

<style lang="scss">
    @import '../styles/variable';

    div {
        display: flex;
        align-items: center;
        width: 100%;

        .todo {
            line-height: 20px;
            padding: 0 10px;
            margin-right: auto;
            width: 100%;
        }

        p {
            overflow: hidden;
            text-overflow: ellipsis;

            &.checked {
                text-decoration: line-through;
                text-decoration-thickness: 2px;
                text-decoration-color: $black;
            }
        }
    }
</style>
