<script>
  let hovering

  function enter() {
    hovering = true
  }

  function laeve() {
    hovering = false
  }
</script>

<div on:mouseenter={enter} on:mouseleave={laeve}>
  <slot hovering={hovering}></slot>
</div>
