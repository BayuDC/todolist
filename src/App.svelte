<script>
    import Wrapper from './components/Wrapper.svelte';
    import Title from './components/Title.svelte';
    import TodoInput from './components/TodoInput.svelte';
    import TodoList from './components/TodoList.svelte';
    import Credit from './components/Credit.svelte';
    import Meta from './components/Meta.svelte';
</script>

<main>
    <Meta />
    <Wrapper>
        <Title>Todo List</Title>
        <TodoInput />
        <TodoList />
        <Credit />
    </Wrapper>
</main>

<style lang="scss">
    @import './styles/variable';
    @import './styles/mixin';

    main {
        background: linear-gradient(135deg, rgba($blue, 0.8), rgba($pink, 0.8));
        padding: 40px;
        box-sizing: border-box;
        height: 100vh;

        @include on-mobile {
            padding: 20px;
        }
    }
</style>
