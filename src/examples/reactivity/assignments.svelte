<script>
  let count = 0

  function handleClick() {
    count += 1
  }
</script>

<button on:click={ handleClick }>
  { count === 0 ? 'Click' : `Clicked ${ count } ${ count === 1 ? 'time' : 'times' }` }
</button>
