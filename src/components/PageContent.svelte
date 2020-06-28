<script>
    import { tick, onDestroy, onMount } from "svelte"
    import findIndex from "lodash/findIndex"
    import lodash_range from "lodash/range"

    // *** VARIABLES ***
    let content = [
        {
            parts: [
                { text: "Hello", classes: [] },
                { text: " Hello2", classes: [] },
            ],
        },
        { parts: [{ text: "World", classes: [] }] },
    ]

    /** @type {HTMLDivElement} */
    let parentEl = null

    // *** LOGS ***
    $: console.log("content", content)

    // *** FUNCTIONS ***

    /** Handles populating the information when the page is first created */
    onMount(() => {
        // Insert any saved text
        for (let i = 0; i < content.length; i++) {
            let div = document.createElement("div")
            for (let j = 0; j < content[i].parts.length; j++) {
                let span = document.createElement("span")
                span.textContent = content[i].parts[j].text
                span.classList = content[i].parts[j].classes
                div.appendChild(span)
            }
            parentEl.appendChild(div)
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

        // Go through the child divs and populate content with the info
        for (let i = 0; i < children.length; i++) {
            let div = children[i]
            for (let j = 0; j < div.children.length; j++) {
                let span = children[i].children[j]
                new_content[i] = {
                    parts: [
                        { text: span.textContent, classes: span.classList },
                    ],
                }
            }
        }

        content = new_content
    }

    /** @param {KeyboardEvent} event */
    function handleKeydown(event) {
        if (event.key === "b") {
            let selection = window.getSelection()

            if (selection.isCollapsed) {
                return
            }

            event.preventDefault()

            let range = selection.getRangeAt(0)
            let children = parentEl.children
            console.log(children, range.startContainer, range.endContainer)
            let startDiv = range.startContainer.parentElement
            let endDiv = range.endContainer.parentElement
            let startDivIndex = findIndex(children, c => c === startDiv)
            let endDivIndex = findIndex(children, c => c === endDiv)
            console.log(startDivIndex, endDivIndex)

            let indexesInBetween = lodash_range(startDivIndex + 1, endDivIndex)

            let extract = range.extractContents()
            console.log(extract)
        }
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
    on:keydown={handleKeydown} />
