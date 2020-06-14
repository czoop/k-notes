<script>
  import { tick } from "svelte"

  let text = "Hello, start typing your notes..."

  async function handleKeydown(event) {
    let selection = window.getSelection()
    console.log(selection)

    // Save all the ranges
    // let range = selection.getRangeAt(0)

    // Change the text
    text = text.toUpperCase()

    // Restore the ranges
    await tick()
    let text_node = this.childNodes[0]
    selection.removeAllRanges()

    let new_range = document.createRange()
    new_range.setStart(text_node, 0)
    new_range.setEnd(text_node, 5)

    selection.addRange(new_range)
    console.log(this)
  }

  // let handleKeydown = (event) => {
  //   console.log(this)
  // }
</script>

<style>
  div {
    font-size: 1.5rem;
  }
</style>

<div
  contenteditable="true"
  bind:textContent={text}
  on:keydown|preventDefault={handleKeydown} />
