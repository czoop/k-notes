<script>
  import DocumentEditor from "./components/DocumentEditor.svelte"
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
</style>

<main>
  <DocumentEditor />
</main>
