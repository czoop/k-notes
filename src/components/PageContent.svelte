<script>
    import { tick } from "svelte"

    let content = [{ subChildren: [{ text: "Hello", classes: ["bold"] }] }]

    /** @type {HTMLDivElement} */
    let parentEl = null

    $: console.log("content", content)

    /** @param {Event} event */
    async function handleInput(event) {
        await tick()

        if (parentEl === null) {
            return
        }

        let children = parentEl.children
        console.log("children", children)

        let selection = window.getSelection()
        let node = selection.anchorNode

        if (node instanceof Text) {
            node = node.parentElement.parentElement
        }

        let node_index = Array.prototype.indexOf.call(children, node)
        console.log("node", node_index, node)

        // Let's just update content[node_index]
        content[node_index] = {
            subChildren: [
                {
                    text: parentEl.children[node_index].textContent,
                    classes: parentEl.children[node_index].classList,
                },
            ],
        }

        // for (let i = 0; i < children.length; i++) {
        //     let child = children[i]
        //     content[i] = {
        //         subChildren: [
        //             { text: child.textContent, classes: child.classList },
        //         ],
        //     }
        // }
    }

    async function handleKeydown(event) {
        return
        if (event.key !== "b") return
        event.preventDefault

        console.log(event.key)

        let selection = window.getSelection()
        let range = selection.getRangeAt(0)
        let startContainer = range.startContainer
        let startOffset = range.startOffset
        let endContainer = range.endContainer
        let endOffset = range.endOffset

        let selectionContents = range.extractContents()
        console.log(selectionContents)

        selectionContents.classList.add("bold")
    }
</script>

<style>
    div {
        outline: none;
        overflow-wrap: break-word;
    }

    .parent {
        font-size: 1.5rem;
    }

    .bold {
        font-weight: bold;
    }
</style>

<div
    bind:this={parentEl}
    class="parent"
    contenteditable="true"
    on:keydown={handleKeydown}
    on:input={handleInput}>
    {#each content as { subChildren }, j (j)}
        <div>
            {#each subChildren as part, i (i)}
                <span class={part.classes}>{part.text}</span>
            {/each}
        </div>
    {/each}
</div>
