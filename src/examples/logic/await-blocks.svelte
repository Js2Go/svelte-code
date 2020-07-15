<script>
  let disabled = false
  let promise = getRandomNumber()

  async function getRandomNumber() {
    disabled = true
    const res = await fetch(`http://localhost:9988`)
    const text = await res.text()
    disabled = false

    if (res.ok) {
      return text
    } else {
      throw new Error(text)
    }
  }

  function handleClick() {
    promise = getRandomNumber()
  }
</script>

<button disabled={disabled} on:click={handleClick}>
  generate random number
</button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red;">{error.message}</p>
{/await}
