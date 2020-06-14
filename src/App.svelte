<script>
  import AppBar from "./components/AppBar.svelte"
  import Page from "./components/Page.svelte"
  import DocumentEditor from "./components/DocumentEditor.svelte"
</script>

<style>
  @font-face {
    font-family: "CM Roman Serif";
    src: url("/fonts/cmunrm.ttf");
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "CM Roman Serif";
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
</style>

<main>
  <DocumentEditor />
</main>
