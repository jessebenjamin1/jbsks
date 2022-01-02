<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch('/blog.json').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}

	import SEO from '$lib/components/SEO.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

<script>
	export let posts;
</script>

<SEO title="Blog" description="A list of all blog posts on the site." slug="/blog" />

<section class="flow">
	<h2 class="mx-auto w-md ta-c">Recent Blog Posts</h2>
	<div class="post-grid mx-auto w-xl mt-lg">
		{#each posts as { title, description, slug, alt, focus, srcset, imageSrc, imageWidth, imageHeight, placeholder, dominantColor }}
			<article>
				<main class="flow flow-md">
					<Image
						{srcset}
						src={imageSrc}
						{alt}
						width={imageWidth}
						height={imageHeight}
						{placeholder}
						{dominantColor}
						{focus}
					/>
					<h1 class="fs-2 fw-6">{title}</h1>
					<p>{description}</p>
					<a sveltekit:prefetch class="btn" href={`/blog${slug}`}>Full Post</a>
				</main>
			</article>
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		padding: var(--s-sm) 0 var(--s-c1);
	}
	.post-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	}
	img {
		background-size: cover;
		color: rgba(0, 0, 0, 0);
	}
</style>
