<script>
    export let icon;
    export let type = '';
</script>

<button on:click>
    <span class="material-icons-outlined {type}">{icon}</span>
</button>

<style lang="scss">
    @import '../styles/variable';

    button {
        cursor: pointer;

        span.danger {
            color: $pink;
        }
    }
</style>
