import { writable, derived } from "svelte/store"

const width_ratio = 8
const height_ratio = 11

export const width_px = writable(1000)
export const height_px = derived(
  width_px,
  (w) => w * (height_ratio / width_ratio)
)
