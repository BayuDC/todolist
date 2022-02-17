<script>
    import { createEventDispatcher } from 'svelte';
    import Button from './Button.svelte';

    const dispatch = createEventDispatcher();

    let icon = 'delete';
    let danger = false;
</script>

<Button
    {icon}
    type={danger ? 'danger' : ''}
    on:click={() => {
        if (danger) {
            return dispatch('delete');
        }

        icon = 'delete_forever';
        danger = true;
    }}
/>
