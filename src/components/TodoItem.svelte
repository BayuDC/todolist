<script>
    import { createEventDispatcher } from 'svelte';
    import Card from '../shared/Card.svelte';
    import Checkbox from '../shared/Checkbox.svelte';

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
    </div>
</Card>

<style lang="scss">
    @import '../styles/variable';

    div {
        display: flex;
        align-items: center;
        p {
            line-height: 20px;
            margin-left: 10px;

            &.checked {
                text-decoration: line-through;
                text-decoration-thickness: 2px;
                text-decoration-color: $black;
            }
        }
    }
</style>
