<script>
    import TodoItem from './TodoItem.svelte';
    import { todos } from '../store';

    const update = e => todos.update(todos => todos);
    const deleteTodo = e => todos.update(todos => todos.filter(todo => todo != e.detail));
</script>

<div>
    {#each $todos as todo (todo.id)}
        {#if !todo.isDone}
            <TodoItem {todo} on:update={update} on:delete={deleteTodo} />
        {/if}
    {/each}
    {#each $todos as todo (todo.id)}
        {#if todo.isDone}
            <TodoItem {todo} on:update={update} on:delete={deleteTodo} />
        {/if}
    {/each}
</div>

<style lang="scss">
    @import '../styles/mixin';

    div {
        margin-top: 20px;
        overflow-y: scroll;

        height: calc(100vh - 266px);

        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }

        @include on-mobile {
            height: calc(100vh - 226px);
        }
    }
</style>
