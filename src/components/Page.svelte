<script>
  // import PageWidthUtil from "./PageWidthUtil.svelte"
  import { width_px, height_px } from "./ZoomController"

  let text = "Hello"
</script>

<style>
  div {
    margin: 3rem 5rem;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.5);
  }
</style>

<input type="number" bind:value={$width_px} />
<div
  contenteditable="true"
  bind:textContent={text}
  style="width: {$width_px}px; height: {$height_px}px;" />
