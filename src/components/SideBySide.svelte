<script>
    export let children = []
</script>

<style>
    .parent {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        margin: 1rem;
    }

    .child {
        margin: 0rem 0.5rem;
        width: 50%;
        height: 100%;
    }
</style>

<div class="parent">
    {#each children as child}
        <div class="child">
            <svelte:component this={child} />
        </div>
    {/each}
</div>
