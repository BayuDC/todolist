<div>
    <slot />
</div>

<style lang="scss">
    div {
        margin: auto;
        padding: 30px;
        max-width: 480px;
        min-height: 600px;
        background: white;
        border-radius: 20px;
        border: 1px solid rgba($color: #fff, $alpha: 0.6);
        box-sizing: border-box;
        background: linear-gradient(135deg, rgba($color: #fff, $alpha: 0.6), rgba($color: #fff, $alpha: 0.1));
    }
</style>
