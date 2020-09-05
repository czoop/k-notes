<script lang="ts">
    let textContent = ""

    let el: HTMLDivElement = null
    let transitioning = false
    let height: number = null

    async function handleInput(event: Event | InputEvent) {
        if (el !== null) {
            if (height !== el.scrollHeight) {
                height = el.scrollHeight
                transitioning = true
            }

            console.log(transitioning)
        }
    }
</script>

<style>
    .parent {
        box-sizing: content-box;
        background-color: white;
        padding: 3rem;

        transition: height 0.25s ease-in-out;
    }

    .child {
        font-family: "Fira Code", monospace;

        width: 100%;
        min-height: 1rem;

        border: none;
        outline: none;
        box-shadow: none;
        resize: none;
        overflow-y: hidden;
        border-radius: 0.25rem;
    }
</style>

<div
    class="parent"
    style="height: {height}px;"
    on:transitionend={() => (transitioning = false)}>
    <div
        class="child"
        spellcheck={true}
        autocomplete="true"
        contenteditable="true"
        on:input={handleInput}
        bind:textContent
        bind:this={el}>
        Hi
    </div>
</div>
