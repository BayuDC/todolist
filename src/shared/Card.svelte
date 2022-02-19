<script>
    import { scale, blur } from 'svelte/transition';
</script>

<div in:scale out:blur on:click|self>
    <slot />
</div>

<style lang="scss">
    div {
        background: rgba(#fff, $alpha: 0.5);
        padding: 20px;
        border-radius: 10px;
        margin-top: 20px;
        &:first-child {
            margin-top: 0;
        }
    }
</style>
