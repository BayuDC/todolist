<script>
    import TodoItem from './TodoItem.svelte';
</script>

<div>
    <TodoItem>Learn Svelte</TodoItem>
    <TodoItem>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo?</TodoItem>
</div>

<style lang="scss">
    div {
        margin-top: 20px;
        overflow-y: scroll;

        height: calc(100vh - 266px);

        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>
