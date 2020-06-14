<script>
  let width_px = 0

  $: console.log(width_px)
</script>

<style>
  div {
    opacity: 0;
    width: calc(100% - 2rem);
    margin: 1rem;
  }
</style>

<div bind:clientWidth={width_px} />
