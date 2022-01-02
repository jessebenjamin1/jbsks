<script>
	import { createLoadObserver } from './createLoadObserver.js';
	let loaded = false;
	const onload = createLoadObserver(() => {
		loaded = true;
	});

	import inView from './inViewSimple.js';
	let visible = false;

	export let src = '';
	export let alt = '';
	export let width = '';
	export let height = '';
	export let srcset = '';
	export let placeholder = '';
	export let dominantColor = 'var(--gray-100)';
	export let focus = 'center';
	export let loading = 'lazy';
	export let decoding = 'async';
</script>

<div
	style={`--bgi:url('${placeholder}'); --bgc: ${dominantColor}; --focus: ${focus}`}
	class="stack"
>
	<img
		use:onload
		use:inView
		on:intersect={({ detail }) => {
			visible = detail;
		}}
		class={loaded ? 'visible' : null}
		{loading}
		{decoding}
		srcset={visible ? srcset : null}
		src={visible ? src : null}
		{alt}
		{width}
		{height}
	/>
	<noscript>
		<img {src} {alt} {width} {height} />
	</noscript>
</div>

<style lang="postcss">
	div {
		display: grid;
		background-image: var(--bgi);
		background-color: var(--bgc);
		background-size: cover;
		overflow: hidden;
		img {
			height: 100%;
			transition: opacity 0.8s ease-out, filter 1.2s;
			color: transparent;
			background: none;
			opacity: 0;
			filter: saturate(0);
		}
	}

	.visible {
		opacity: 1;
		filter: saturate(1);
	}

	noscript {
		width: 100%;
		height: 100%;
	}

	div > noscript > img {
		opacity: 1;
		filter: none;
	}
</style>
