<script>
	export let title = 'SvelteKit Starter by Jesse Benjamin';
	export let ogTitle;
	export let twitterTitle;
	export let description = 'This is a fallback metadescription.';
	export let ogDescription;
	export let twitterDescription;
	export let image = '/images/plant1.jpg';
	export let ogImageWidth;
	export let ogImageHeight;
	export let alt = 'closeup of a plant';
	export let ogImage;
	export let ogImageAlt;
	export let ogImageType;
	export let twitterImage;
	export let twitterImageAlt;
	export let robots = 'index';
	export let googlebot = 'index';
	export let url = 'https://jbsks.pages.dev';
	export let ogType = 'website';
	export let slug;
</script>

<svelte:head>
	<!-- General Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<meta name="googlebot" content={googlebot || robots} />

	<!-- Open Graph Tags -->
	<meta property="og:title" content={ogTitle || title} />
	<meta property="og:description" content={ogDescription || description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:image" content={ogImage ? `${url}${ogImage}` : `${url}${image}`} />
	<meta property="og:image:alt" content={ogImageAlt ? ogImageAlt : alt} />
	{#if ogImageWidth}
		<meta property="og:image:width" content={ogImageWidth} />
		<meta property="og:image:height" content={ogImageHeight} />
	{/if}
	{#if ogImageType}
		<meta property="og:image:type" content={ogImageType} />
	{/if}

	<!-- Twitter Tags -->
	<meta property="twitter:title" content={twitterTitle || title} />
	<meta property="twitter:description" content={twitterDescription || description} />
	<meta
		property="twitter:image"
		content={twitterImage ? `${url}${twitterImage}` : `${url}${image}`}
	/>
	<meta property="twitter:image:alt" content={twitterImageAlt ? twitterImageAlt : alt} />
	<meta property="twitter:card" content="summary" />

	<!-- Url tags-->
	{#if url}
		<meta property="og:url" content={`${url}${slug}`} />
		<link rel="canonical" href={`${url}${slug}`} />
	{/if}
</svelte:head>
