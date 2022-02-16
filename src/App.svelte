<script>
    import Wrapper from './components/Wrapper.svelte';
    import Title from './components/Title.svelte';
    import TodoInput from './components/TodoInput.svelte';
    import TodoList from './components/TodoList.svelte';
</script>

<main>
    <Wrapper>
        <Title>Todo List</Title>
        <TodoInput />
        <TodoList />
    </Wrapper>
</main>

<style lang="scss">
    @import './styles/variable';
    @import './styles/mixin';

    main {
        background: linear-gradient(135deg, rgba($blue, 0.8), rgba($pink, 0.8));
        padding: 40px;
        box-sizing: border-box;

        @include on-mobile {
            padding: 20px;
        }
    }
</style>
