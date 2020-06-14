<script>
  import { width_px, height_px, page_padding_px } from "./ZoomController"
  import PageContent from "./PageContent.svelte"
</script>

<style>
  div {
    margin: 3rem 5rem;
    background-color: #ffffff;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.5);
  }
</style>

<input type="number" bind:value={$width_px} />
<div
  style="width: {$width_px}px; height: {$height_px}px; padding: {$page_padding_px}px">
  <PageContent />
</div>
