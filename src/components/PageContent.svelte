<script lang="ts">
    import {} from "svelte"
    import { h1, h2, h3, h4, h5, h6, span, p } from "./TypeMappings"

    interface Content {
        text: string
        type: string
        classes?: string[]
    }

    let content: Content[] = [
        { text: "Heading 1", type: "h1" },
        { text: "Heading 2", type: "h2" },
        { text: "Heading 3", type: "h3" },
        { text: "Heading 4", type: "h4" },
        { text: "Heading 5", type: "h5" },
        { text: "Heading 6", type: "h6" },
        { text: "Normal text ", type: "span" },
        { text: "Bold text ", type: "span", classes: ["bold"] },
        { text: "Italic text", type: "span", classes: ["italics"] },
        {
            text:
                "This is a long long long long long long long long long long long long long long long sentence",
            type: "span",
            classes: [],
        },
        {
            text: "This is a new line",
            type: "p",
        },
    ]
</script>

<style>
    div {
        overflow-wrap: break-word;
    }

    .bold {
        font-weight: bold;
    }

    .italics {
        font-style: italic;
    }
</style>

<div class="parent">
    {#each content as { text, type, classes }}
        {#if type === span}
            <span class={classes}>{text}</span>
        {:else if type === p}
            <p>{text}</p>
        {:else if type === h1}
            <h1>{text}</h1>
        {:else if type === h2}
            <h2>{text}</h2>
        {:else if type === h3}
            <h3>{text}</h3>
        {:else if type === h4}
            <h4>{text}</h4>
        {:else if type === h5}
            <h5>{text}</h5>
        {:else if type === h6}
            <h6>{text}</h6>
        {:else if text}<span>{text}</span>{/if}
    {/each}
</div>
