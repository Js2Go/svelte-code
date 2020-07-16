<script>
  import { fly } from 'svelte/transition'
  let visible = true
</script>

<label>
  <input type="checkbox" bind:checked={visible}>
  visible
</label>

{#if visible}
  <p transition:fly="{{ x: 100, duration: 300 }}">
    Files in and out
  </p>
{/if}
