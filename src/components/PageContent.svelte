<script>
    import { tick, onDestroy } from "svelte"

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

    /** @param {Event} event */
    async function handleInput(event) {
        // console.log(content)
    }

    async function handleKeydown(event) {
        console.log(event.key)

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
    contenteditable={selecting ? 'true' : 'false'}
    on:selectstart={selectStart}>
    {#each content as { text }, i (i)}
        <div
            contenteditable="true"
            on:input|preventDefault={handleInput}
            on:keydown={handleKeydown}
            bind:textContent={text} />
    {/each}
</div>
