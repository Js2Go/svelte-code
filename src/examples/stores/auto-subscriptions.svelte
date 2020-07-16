<script>
  import { count } from './stores'
  import Increment from './Increment.svelte'
  import Decrement from './Decrement.svelte'
  import Resetter from './Resetter.svelte'
</script>

<h1>The count is {$count}</h1>

<Increment />
<Decrement />
<Resetter />
