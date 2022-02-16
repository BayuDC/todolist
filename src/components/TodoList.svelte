<script>
    import TodoItem from './TodoItem.svelte';
    import { todos } from '../store';
</script>

<div>
    {#each $todos as todo}
        <TodoItem
            {todo}
            on:done={e => {
                $todos = $todos.filter(todo => todo != e.detail);
                $todos.push(e.detail);
            }}
            on:unDone={e => {
                $todos = $todos.filter(todo => todo != e.detail);
                $todos.unshift(e.detail);
            }}
        />
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
