<script>
  import { fade, fly } from 'svelte/transition'
  let visible = true
</script>

<label>
  <input type="checkbox" bind:checked={visible}>
  visible
</label>

{#if visible}
  <p in:fly={{ y: 100, duration: 500 }} out:fade>
    Files in, fades out
  </p>
{/if}
