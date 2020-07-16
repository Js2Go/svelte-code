<script>
	import Introduce from './examples/introduction/index.svelte'
	import Reacitve from './examples/reactivity/index.svelte'
	import Props from './examples/props/index.svelte'
	import Logic from './examples/logic/index.svelte'
	import Events from './examples/events/index.svelte'
	import Bindings from './examples/bindings/index.svelte'
	import Lifecycle from './examples/lifecycle/index.svelte'
	export let name
</script>

<main>
	{ name }
	<Introduce />
	<Reacitve />
	<Props />
	<Logic />
	<Events />
	<Bindings />
	<Lifecycle />
</main>
