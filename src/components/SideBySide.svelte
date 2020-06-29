<style>
    div {
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
    }

    div > * {
        margin: 1rem;
        width: 100%;
        background-color: red;
    }
</style>

<div>
    <slot />
</div>
