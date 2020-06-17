<script>
  import { tick } from "svelte"

  let content = [
    { classes: ["normal"], text: "Type your notes here...", el: null },
    { classes: ["bold"], text: "BOLD!", el: null },
  ]

  $: console.log(content)

  async function handleKeydown(event) {
    let selection = window.getSelection()
    let range = selection.getRangeAt(0)
    let container = range.startContainer

    console.log(container)

    // Find the matching object
    let part = content.filter((p) => range.intersectsNode(p.el))
    console.log(part)

    let start = range.startOffset
    let end = range.endOffset
    // console.log(container, start, end)

    // Restore the ranges
    // await tick()
    // let text_node = this.childNodes[0]
    // selection.removeAllRanges()
    // let new_range = document.createRange()
    // new_range.setStart(text_node, 0)
    // new_range.setEnd(text_node, 5)
    // selection.addRange(new_range)
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
