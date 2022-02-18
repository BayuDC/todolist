<script>
    import { onMount } from 'svelte';
    export let value = '';
    export let placeholder = '';

    let inputRef;

    onMount(() => {
        inputRef.focus();
    });
</script>

<input type="text" bind:value bind:this={inputRef} {placeholder} required />

<style>
    input {
        width: 100%;
        height: 20px;
    }
</style>
