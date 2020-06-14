<script>
  let text = "Hello, start typing your notes..."
</script>

<style>
  div {
    font-size: 1.5rem;
  }
</style>

<div contenteditable="true" bind:textContent={text} />
