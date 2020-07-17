+ `$$props` references all props that are passed to a component

<hr>

+ `$$restProps` contains only the props which are not declared with export

<hr>

```
{#each expression as name, index (key)}...{/each}
```

```
{#await expression}...{:then name}...{:catch name}...{/await}
```

```
{@html expression}
```

```
{@debug var1, var2, ..., varN}
```
<hr>

#### dom events modifiers
- `preventDefault` — calls event.preventDefault() before running the handler
- `stopPropagation` — calls event.stopPropagation(), preventing the event reaching the next element
- `passive` — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
- `capture` — fires the handler during the capture phase instead of the bubbling phase
- `once` — remove the handler after the first time it runs
- `self` — only trigger handler if event.target is the element itself

<hr>

- Elements with the contenteditable attribute support innerHTML and textContent bindings

<hr>

- To get a reference to a DOM node, use `bind:this`

<hr>

```
use:action

use:action={parameters}

action = (node: HTMLElement, parameters: any) => {
	update?: (parameters: any) => void,
	destroy?: () => void
}
```
<hr>

```
transition:fn

transition:fn={params}

transition:fn|local

transition:fn|local={params}

transition = (node: HTMLElement, params: any) => {
	delay?: number,
	duration?: number,
	easing?: (t: number) => number,
	css?: (t: number, u: number) => string,
	tick?: (t: number, u: number) => void
}
```

<hr>

#### Transition events
+ introstart
+ introend
+ outrostart
+ outroend

<hr>

```
in:fn
in:fn={params}
in:fn|local
in:fn|local={params}
out:fn
out:fn={params}
out:fn|local
out:fn|local={params}
```

<hr>

```
animate:name
animate:name={params}
animation = (node: HTMLElement, { from: DOMRect, to: DOMRect } , params: any) => {
	delay?: number,
	duration?: number,
	easing?: (t: number) => number,
	css?: (t: number, u: number) => string,
	tick?: (t: number, u: number) => void
}
DOMRect {
	bottom: number,
	height: number,
	​​left: number,
	right: number,
	​top: number,
	width: number,
	x: number,
	y: number
}
```

#### <svelte:options>
```
<svelte:options option={value}/>
```
+ `immutable={true}` — you never use mutable data, so the compiler can do simple referential equality checks to determine if values have changed
+ `immutable={false}` — the default. Svelte will be more conservative about whether or not mutable objects have changed
+ `accessors={true}` — adds getters and setters for the component's props
+ `accessors={false}` — the default
+ `namespace="..."` — the namespace where this component will be used, most commonly "svg"
+ `tag="..."` — the name to use when compiling this component as a custom element
