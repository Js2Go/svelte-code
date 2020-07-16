<script>
  import { time, elapsed } from './stores'
  
  const formatter = new Intl.DateTimeFormat('zh-Hans-CN', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  })
</script>

<h1>The time is {formatter.format($time)}</h1>

<p>
  The page has been open fro {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</p>
