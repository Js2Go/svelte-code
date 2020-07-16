import { onDestroy } from 'svelte'

export function onInterval(cb, millisec) {
  const interval = setInterval(cb, millisec)

  onDestroy(() => {
    clearInterval(interval)
  })
}
