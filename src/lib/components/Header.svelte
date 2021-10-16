<script context="module">
	import Menu from './Menu.svelte';
</script>

<header>
	<div class="header-content mx-auto w-xxl">
		<a href="/" class="logo fw-7">jbsks</a>
		<Menu />
	</div>
</header>

<style>
	header {
		background: white;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.1rem 0;
	}

	.logo {
		font-size: 1.25rem;
		letter-spacing: 0.15em;
		text-decoration: none;
		transition: all 0.3s;
		color: var(--primary-800);
	}

	.logo:hover,
	.logo:focus {
		letter-spacing: 0.35em;
	}
</style>
