<script>
  import RedThing from './Red.svelte'
	import GreenThing from './Green.svelte'
	import BlueThing from './Blue.svelte'

	const options = [
		{ color: 'red',   component: RedThing   },
		{ color: 'green', component: GreenThing },
		{ color: 'blue',  component: BlueThing  },
	]

	let selected = options[0]
</script>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option.color}</option>
  {/each}
</select>

<svelte:component this={selected.component} />
