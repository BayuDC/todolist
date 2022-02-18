<div>
    <slot />
</div>

<style lang="scss">
    @import '../styles/mixin';

    div {
        margin: auto;
        padding: 30px;
        max-width: 480px;
        background: white;
        border-radius: 20px;
        border: 1px solid rgba(#fff, 0.6);
        box-sizing: border-box;
        background: linear-gradient(135deg, rgba(#fff, 0.6), rgba(#fff, 0.1));
        height: 100%;
        display: flex;
        flex-direction: column;

        @include on-mobile {
            padding: 30px 20px;
        }
    }
</style>
