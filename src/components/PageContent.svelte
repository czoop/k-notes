<script>
    import { tick } from "svelte"

    let content = []
    let parentEl = null

    $: console.log(content)

    async function handleInput(event) {
        if (parentEl !== null) {
            for (let i = 0; i < parentEl.childNodes.length; i++) {
                content[i] = parentEl.childNodes[i]
            }
        }
    }

    // async function handleInput(event) {
    //     if (parentEl !== null) {
    //         let children = parentEl.childNodes
    //         console.log("children", children)

    //         for (let i = 0; i < children.length; i++) {
    //             let subChildren = children[i].childNodes
    //             console.log("subchildren", subChildren)
    //             for (let j = 0; j < subChildren.length; j++) {
    //                 content[i].subChildren[j] = subChildren[j].textContent
    //             }
    //         }
    //         console.log(content)
    //     }
    // }

    // async function handleKeydown(event) {
    //     if (event.key !== "b") return
    //     console.log(event.key)

    //     let selection = window.getSelection()
    //     let range = selection.getRangeAt(0)
    //     let startContainer = range.startContainer
    //     let startOffset = range.startOffset
    //     let endContainer = range.endContainer
    //     let endOffset = range.endOffset

    //     let selectionContents = range.extractContents()
    //     range.deleteContents()

    //     let startIndex = content.findIndex(p => p.el === startContainer)
    //     let endIndex = content.findIndex(p => p.el === endContainer)

    //     // Add class to sections inbetween start and end
    //     for (let i = startIndex + 1; i < endIndex; i++) {
    //         let classes = content[i].classes
    //         classes = new Set(classes)
    //         classes.add("bold")
    //         content[i].classes = classes
    //     }
    // }

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
        outline: none;
    }

    .parent {
        height: 100%;
    }

    .bold {
        font-weight: bold;
    }
</style>

<div bind:this={parentEl} contenteditable="true" on:input={handleInput}>
    <br />
</div>
