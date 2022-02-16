<script>
    import Card from '../shared/Card.svelte';
    import Checkbox from '../shared/Checkbox.svelte';

    let checked = false;
</script>

<Card>
    <div>
        <Checkbox {checked} on:check={e => (checked = e.detail)} />
        <p class:checked>
            <slot />
        </p>
    </div>
</Card>

<style lang="scss">
    @import '../styles/variable';

    div {
        display: flex;
        align-items: center;
        p {
            line-height: 20px;
            margin-left: 10px;

            &.checked {
                text-decoration: line-through;
                text-decoration-thickness: 2px;
                text-decoration-color: $black;
            }
        }
    }
</style>
