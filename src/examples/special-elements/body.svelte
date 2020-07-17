<script>
  let hereKitty = false

  const handleMouseenter = () => hereKitty = true
	const handleMouseleave = () => hereKitty = false
</script>

<style>
  img {
		position: absolute;
		left: 0;
		bottom: -60px;
		transform: translate(-80%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
	}

	:global(body) {
		overflow: hidden;
  }
  
  .wrap {
    position: relative;
    height: 100vh;
  }
</style>

<svelte:body
  on:mouseenter={handleMouseenter}
  on:mouseleave={handleMouseleave}
/>

<!-- creative commons BY-NC http://www.pngall.com/kitten-png/download/7247 -->
<div class="wrap">
  <img
    class:curious={hereKitty}
    alt="Kitten wants to know what's going on"
    src="../assets/img/kitten.png"
  >
</div>
