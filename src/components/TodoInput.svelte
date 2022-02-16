<script>
    import Card from '../shared/Card.svelte';
    import Button from '../shared/Button.svelte';
</script>

<Card>
    <form on:submit|preventDefault>
        <input type="text" placeholder="New Todo..." required />
        <Button icon="add" />
    </form>
</Card>

<style lang="scss">
    form {
        display: flex;
        align-items: center;

        input {
            width: 100%;
            height: 20px;
            margin-right: 10px;
        }
    }
</style>
