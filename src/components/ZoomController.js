import { writable, derived } from "svelte/store"

const width_ratio = 8.5
const height_ratio = 11

export const width_px = writable(600)
export const height_px = derived(
    width_px,
    w => w * (height_ratio / width_ratio)
)

export const page_padding_px = derived(width_px, w => w / width_ratio)
