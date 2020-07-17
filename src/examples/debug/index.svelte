<script>
  let user = {
    firstname: 'Ada',
    lastname: 'Lovelace'
  }
</script>

<input type="text" bind:value={user.firstname}>
<input type="text" bind:value={user.lastname}>

{@debug user}

<h1>Hello {user.firstname}</h1>
