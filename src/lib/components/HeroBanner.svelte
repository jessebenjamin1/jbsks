<script>
	export let showOverlay = true;
	export let overlay = 'rgba(0,0,0,0.5)';
	export let focus = 'center';
	export let showContent = true;
	export let placeholder;
	export let srcsetJpg;
	export let srcsetWebp;
	export let imageWidth;
	export let imageHeight;
	export let lazy = false;
	export let title;
	export let minHeight = 'clamp(25rem, 47vh, 52rem)';
	let blurry = true;
	setTimeout(() => {
		blurry = false;
	}, 500);
</script>

<section class="hero-banner" style={`--min-height: ${minHeight}`}>
	<!-- <img src={placeholder} alt="lol" /> -->
	<picture class={blurry ? 'blurry' : 'focused'} style={`--focus:${focus}`}>
		<source srcset={srcsetWebp} type="image/webp" />
		<!-- <source scrset={srcsetJpg} type="image/jpg" /> -->
		<img
			aria-hidden="true"
			class={blurry ? 'blurry' : 'focused'}
			loading={lazy ? 'lazy' : 'eager'}
			src={placeholder}
			alt="background"
			width={imageWidth}
			height={imageHeight}
		/>
	</picture>
	{#if showOverlay}
		<div class="overlay" style={`--overlay:${overlay}`} />
	{/if}
	{#if showContent}
		<div class="hero-placer">
			<div class="hero-content mx-auto">
				<h1>{title}</h1>
			</div>
		</div>
	{/if}
</section>

<style>
	.hero-banner {
		display: grid;
		grid-template: 'banner';
		height: 0;
		min-height: var(--min-height);
		overflow: hidden;
		position: relative;
	}

	.hero-banner > * {
		grid-area: banner;
		place-items: center;
		position: relative;
	}

	.hero-banner img {
		object-fit: cover;
		height: 100%;
		position: absolute;
		z-index: 0;
		color: var(--gray-800);
		background-image: linear-gradient(var(--gray-200), var(--gray-500));
	}

	picture,
	img {
		transition: filter 1s, transform 2.5s ease-out;
		background-color: var(--gray-800);
	}

	.overlay {
		height: 100%;
		width: 100%;
		background: var(--overlay);
		z-index: 1;
	}

	.hero-placer {
		display: grid;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.hero-content {
		text-align: center;
		padding: 1.25rem clamp(1.5rem, calc(1.25rem + 1.5vw), 2.25rem);
		position: relative;
		max-width: var(--content-width);
		background: white;
	}

	h1 {
		font-size: clamp(1.35rem, 1.9vw + 1rem, 2.25rem);
	}

	.blurry {
		filter: blur(50px);
	}
</style>
