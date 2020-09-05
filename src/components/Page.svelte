<script>
    import { onMount } from "svelte"
    import PageContent from "./PageContent.svelte"

    let pageEl = null

    let pageWidthPx = 0
    let pagePaddingPx = 0
    let fontSizePx = 0
    let pageRatio = 8.5 / 11

    $: pagePaddingPx = pageWidthPx / 8.5
    $: fontSizePx = pageWidthPx / 40

    // Calls handleWindowResize once the elements have been created
    onMount(handleWindowResize)

    function handleWindowResize() {
        if (pageEl !== null) {
            pageWidthPx = pageEl.clientWidth
        }
    }
</script>

<style>
    .page {
        background-color: #ffffff;
        box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.5);
        padding: 1rem;
    }
</style>

<svelte:window on:resize={handleWindowResize} />
<div
    class="page"
    bind:this={pageEl}
    style="padding: {pagePaddingPx}px; font-size: {fontSizePx}px">
    <PageContent />
</div>
