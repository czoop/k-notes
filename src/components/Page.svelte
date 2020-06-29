<script>
    import PageContent from "./PageContent.svelte"

    let pageEl = null
    let pageWidthPx = 85
    let pagePaddingPx = 10

    let pageRatio = 8.5 / 11

    $: pagePaddingPx = pageWidthPx / 8.5
    $: console.log(pagePaddingPx)

    $: if (pageEl !== null) {
        pageWidthPx = pageEl.clientWidth
    }
</script>

<style>
    div {
        width: 100%;
        height: 100%;
        padding: 0rem 1rem;
    }

    .page {
        background-color: #ffffff;
        box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.5);
    }
</style>

<div>
    <div class="page" bind:this={pageEl} style="padding: {pagePaddingPx}">
        <PageContent />
    </div>
</div>
