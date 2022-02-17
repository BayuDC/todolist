<script>
    import { createEventDispatcher } from 'svelte';
    import Card from '../shared/Card.svelte';
    import Checkbox from '../shared/Checkbox.svelte';
    import DeleteButton from '../shared/DeleteButton.svelte';

    const dispatch = createEventDispatcher();

    export let todo;

    const onCheck = e => {
        todo.isDone = e.detail;
        dispatch('update');
    };
</script>

<Card>
    <div>
        <Checkbox checked={todo.isDone} on:check={onCheck} />
        <p class:checked={todo.isDone}>
            {todo.content}
        </p>
        <DeleteButton on:delete={() => dispatch('delete', todo)} />
    </div>
</Card>

<style lang="scss">
    @import '../styles/variable';

    div {
        display: flex;
        align-items: center;
        width: 100%;
        p {
            line-height: 20px;
            padding: 0 10px;
            margin-right: auto;
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
