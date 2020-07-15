<script>
  $: x = 7

  function input(e) {
    x = e.target.value
  }
</script>

<input type="text" name="" id="" value={x} on:input={input}>
{#if x > 10}
  <p>{x} is greater than 10</p>
{:else if 5 > x}
  <p>{x} is less than 5</p>
{:else}
  <p>{x} is between 5 and 10</p>
{/if}
