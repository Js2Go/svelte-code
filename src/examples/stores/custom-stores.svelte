<script>
  import { custom } from './stores'
</script>

<h1>The count is {$custom}</h1>

<button on:click={custom.increment}>+</button>
<button on:click={custom.decrement}>-</button>
<button on:click={custom.reset}>reset</button>
