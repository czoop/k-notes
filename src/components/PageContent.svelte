<script>
  import { tick } from "svelte"

  let content = [
    { classes: ["normal"], text: "Type your notes here...", el: null },
    { classes: ["bold"], text: "BOLD!", el: null },
  ]

  async function handleKeydown(event) {
    let selection = window.getSelection()
    let range = selection.getRangeAt(0)
    let startContainer = range.startContainer

    let selectionContents = range.cloneContents()
    let extractContents = range.extractContents()
    console.log(
      extractContents,
      selectionContents,
      extractContents === selectionContents
    )
    range.deleteContents()

    console.log(extractContents, selectionContents)

    // Insert the clone as a new text block and then select it
    let startBlockIndex = content.findIndex((p) => p.el === startContainer)
    content.splice(startBlockIndex, 0, {
      classes: ["bold"],
      text: selectionContents.textContent,
      el: null,
    })
    content = content // For Svelte
  }
</script>

<style>
  div {
    font-size: 1.5rem;
  }

  .normal {
    font-style: normal;
  }

  .bold {
    font-weight: bold;
  }
</style>

<div on:keydown|preventDefault={handleKeydown}>
  {#each content as { classes, text, el }}
    <span
      contenteditable="true"
      bind:textContent={text}
      bind:this={el}
      class={classes} />
  {/each}
</div>
