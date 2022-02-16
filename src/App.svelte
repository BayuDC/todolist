<script>
    import Wrapper from './components/Wrapper.svelte';
    import Title from './components/Title.svelte';
</script>

<main>
    <Wrapper>
        <Title>Todo List</Title>
    </Wrapper>
</main>

<style lang="scss">
    @import './styles/variable';

    main {
        background: linear-gradient(135deg, rgba($blue, 0.8), rgba($pink, 0.8));
        color: rgba(#222, 0.8);
        padding: 40px;
        min-height: 100vh;
        box-sizing: border-box;
    }
</style>
