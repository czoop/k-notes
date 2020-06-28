<script>
    import { tick, onDestroy, onMount } from "svelte"

    let content = [{ text: "Hello" }, { text: "World" }]
    let selecting = false

    /** @type {HTMLDivElement} */
    let parentEl = null

    $: console.log("content", content)
    $: console.log("selecting", selecting)

    document.addEventListener("selectionchange", handleSelectionChange)

    onDestroy(() => {
        document.removeEventListener("selectionchange", handleSelectionChange)
    })

    onMount(() => {
        // Insert any saved text
        for (let i = 0; i < content.length; i++) {
            let child = document.createElement("div")
            child.textContent = content[i].text
            parentEl.appendChild(child)
        }
    })

    /** @param {Event} event */
    async function handleInput(event) {
        let children = parentEl.children
        let new_content = []

        // Rare case - When there's only one line of text
        if (
            Array.prototype.findIndex.call(
                children,
                c => c instanceof HTMLDivElement
            ) === -1
        ) {
            children = parentEl.childNodes
        }

        for (let i = 0; i < children.length; i++) {
            let child = children[i]
            new_content[i] = { ...content[i], text: child.textContent }
        }

        content = new_content
    }

    async function handleKeydown(event) {
        console.log(event.key)

        // if (event.key === "Enter") {
        //     event.preventDefault()
        // }

        // if (selecting && event.key === "Backspace") {
        //     event.preventDefault()
        //     let selection = window.getSelection()
        //     let range = selection.getRangeAt(0)
        //     range.deleteContents()
        //     console.log("Content Deleted")
        // }
    }

    async function handleSelectionChange(event) {
        let selection = window.getSelection()
        if (selection.isCollapsed) {
            selecting = false
        }
    }

    async function selectStart(event) {
        console.log("select event")
        selecting = true
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
    on:input={handleInput}
    on:selectstart={selectStart} />
