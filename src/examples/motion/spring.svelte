<script>
  import { spring } from 'svelte/motion'

  let coords = spring({ x: 50, y: 50 }, {
    stiffness: 0.1,
    damping: 0.25
  })

  let size = spring(10)
</script>

<style>
  svg {
    width: 100%;
    height: 300px;
    margin: -8px;
  }
  circle {
    fill: #ff3e00;
  }
</style>

<div style="position: absolute; right: 1em">
  <label>
    <h3>stiffness ({coords.stiffness})</h3>
    <input type="range" bind:value={coords.stiffness} min="0" max="1" step="0.01">
  </label>

  <label>
    <h3>damping ({coords.damping})</h3>
		<input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
  </label>
</div>

<svg
  on:mousemove={e => coords.set({ x: e.offsetX, y: e.offsetY })}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(30)}
>
  <circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>
