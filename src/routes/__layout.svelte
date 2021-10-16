<script context="module">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../common.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
