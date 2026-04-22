<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<p>Welcome {data.user?.username || 'Anonymus'}</p>
	{#if data.user}
	<form action="/logout?/logout" method="POST">
		<button type="submit">Logout</button></form>
	{:else}
	<a href="/login">Login</a>
	{/if}
</header>

{@render children()}
<footer>
	<div>
		<h2>Contact</h2>
		<a href="mailto:SerGur19@htl-shkoder.com">Write an e-mail!</a>
	</div>
	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-evenly;
		padding: 20px;
		background-color: pink;
	}
	a {
		text-decoration: none;
	}
	header {
		padding: 20px;
		background-color: aqua;
		display: flex;
		justify-content: space-between;
	}
</style>
