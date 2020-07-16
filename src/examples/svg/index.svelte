<script>
  import { data } from './data'
  import Clock from './clock.svelte'
  import BarChart from './bar-chart.svelte'
  import AreaChart from './area-chart.svelte'
  import Scatterplot from './scatterplot.svelte'
  import SvgTransitions from './svg-transitions.svelte'
</script>

<style>
	.chart {
		width: 100%;
		max-width: 640px;
		height: calc(100% - 4em);
		min-height: 280px;
		max-height: 480px;
		margin: 0 auto;
  }
  
  .wrap {
    position: relative;
  }
</style>

<section>
  <Clock />
  <BarChart />
  <AreaChart />
  <div class="chart">
    <h2>Anscombe's quartet</h2>
    <Scatterplot points={data.a} />
    <Scatterplot points={data.b} />
    <Scatterplot points={data.c} />
    <Scatterplot points={data.d} />
  </div>
  <div class="wrap">
    <SvgTransitions />
  </div>
</section>
