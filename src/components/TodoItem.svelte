<script>
    import { createEventDispatcher } from 'svelte';
    import Card from '../shared/Card.svelte';
    import Checkbox from '../shared/Checkbox.svelte';
    import Button from '../shared/Button.svelte';
    import DeleteButton from '../shared/DeleteButton.svelte';
    import InputText from '../shared/InputText.svelte';

    export let todo;

    let editMode = false;
    let tmpValue = '';

    const dispatch = createEventDispatcher();
    const edit = () => {
        editMode = false;
        todo.content = tmpValue;
        dispatch('update');
    };
    const enableEdit = () => {
        editMode = true;
        tmpValue = todo.content;
    };
    const cancelEdit = () => {
        editMode = false;
    };
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
            <form on:submit|preventDefault={edit}>
                <InputText bind:value={tmpValue} />
            </form>
            <Button icon="done" on:click={edit} />
            <Button icon="close" on:click={cancelEdit} />
        {:else}
            <p class:checked={todo.isDone} on:dblclick={enableEdit}>
                {todo.content}
            </p>
            <Button icon="edit" on:click={enableEdit} />
            <DeleteButton on:delete={() => dispatch('delete', todo)} />
        {/if}
    </div>
</Card>

<style lang="scss">
    @import '../styles/variable';

    div {
        width: 100%;
        display: grid;
        grid-template-columns: 20px auto 20px 20px;
        align-items: center;
        gap: 10px;

        form,
        p {
            width: 100%;
            height: 20px;
            line-height: 20px;
            margin-right: auto;
        }

        p {
            height: auto;
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
