<script>
  let title = "K Notes"
</script>

<style>
  div {
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.123);
    width: 100%;
    background-color: #fdfdfd;

    display: flex;
    justify-content: center;
  }

  h1 {
    margin: 0px;
  }
</style>

<div>
  <h1 contenteditable bind:textContent={title}>{title}</h1>
</div>
