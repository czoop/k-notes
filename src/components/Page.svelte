<script>
  let text = "Hello"
</script>

<style>
  div {
    width: calc(100% - 10rem - 4rem);
    margin: 3rem 5rem;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.5);
  }
</style>

<div contenteditable bind:textContent={text} />
