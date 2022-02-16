<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let checked = false;
</script>

<div>
    <span
        class="material-icons-outlined"
        on:click={() => {
            checked = !checked;
            dispatch('check', checked);
        }}
    >
        {#if checked}
            check_box
        {:else}
            check_box_outline_blank
        {/if}
    </span>
</div>

<style>
    div {
        cursor: pointer;
    }
</style>
