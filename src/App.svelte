<script>
    import DocumentEditor from "./components/DocumentEditor.svelte"
</script>

<style>
    main {
        height: 100%;
        font-family: "CMU Serif Roman";
    }

    :global(body) {
        background-color: #f5f5f5;
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    :global(html) {
        width: 100%;
        height: 100%;
    }

    :global(*) {
        box-sizing: border-box;
    }
</style>

<main>
    <DocumentEditor />
</main>
