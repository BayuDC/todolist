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
    $background: linear-gradient(
        135deg,
        rgba(
            $color: #548cff,
            $alpha: 0.8,
        ),
        rgba(
            $color: #ff548c,
            $alpha: 0.8,
        )
    );

    main {
        background: $background;
        color: rgba($color: #222, $alpha: 0.8);
        padding: 40px;
        min-height: 100vh;
        box-sizing: border-box;
    }
</style>
