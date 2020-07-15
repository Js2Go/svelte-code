<script>
  let m = { x: 0, y: 0 }

  function handleMousemove(e) {
    m.x = e.clientX
    m.y = e.clientY
  }
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>

<div on:mousemove={handleMousemove}>
  The mouse position is {m.x} x {m.y}
</div>
