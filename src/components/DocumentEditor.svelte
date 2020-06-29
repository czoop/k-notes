<script>
    import Editor from "./Editor.svelte"
    import SideBySide from "./SideBySide.svelte"

    import AppBar from "./AppBar.svelte"
    import Page from "./Page.svelte"
</script>

<AppBar />
<SideBySide>
    <Editor />
    <Page />
</SideBySide>
