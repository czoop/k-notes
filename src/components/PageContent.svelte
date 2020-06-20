<script>
  import { tick } from "svelte"

  let content = [
    { classes: ["normal"], text: "Type your notes here...", el: null },
    { classes: ["bold"], text: "BOLD!", el: null },
  ]

  $: console.log(content)

  async function handleKeydown(event) {
    await tick()
    for (let i = 0; i < content.length; i++) {
      let part = content[i]
      content[i] = { ...part, text: part.el.textContent }
    }
  }

  // async function handleKeydown(event) {
  //   let selection = window.getSelection()
  //   let range = selection.getRangeAt(0)
  //   let startContainer = range.startContainer

  //   let selectionContents = range.cloneContents()
  //   let extractContents = range.extractContents()
  //   console.log(
  //     extractContents,
  //     selectionContents,
  //     extractContents === selectionContents
  //   )
  //   range.deleteContents()

  //   console.log(extractContents, selectionContents)

  //   // Insert the clone as a new text block and then select it
  //   let startBlockIndex = content.findIndex((p) => p.el === startContainer)
  //   content.splice(startBlockIndex, 0, {
  //     classes: ["bold"],
  //     text: selectionContents.textContent,
  //     el: null,
  //   })
  //   content = content // For Svelte
  // }
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

<div contenteditable="true" on:input={handleKeydown}>
  {#each content as { classes, text, el }}
    <span bind:this={el} class={classes}>{text}</span>
  {/each}
</div>
