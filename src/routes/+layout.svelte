<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
	footer{
		display: flex;
		justify-content: space-evenly;
		padding: 20px;
		background-color: pink;
	}
	a{
		text-decoration: none;
	}
	
</style>