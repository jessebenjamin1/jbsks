<script context="module">
	export async function load({ fetch }) {
		const allPosts = await fetch('/blog.json').then((res) => res.json());
		const posts = allPosts.slice(0, 3);
		return {
			props: {
				posts
			}
		};
	}
	import SEO from '$lib/components/SEO.svelte';
	import Image from '$lib/components/Image.svelte';
	import bannerMeta from '$static/images/leaf.jpg?width=288&metadata';
	const { bannerSrc, bannerWidth, bannerHeight } = bannerMeta;
	import bannerPlaceholder from '$static/images/leaf.jpg?w=10&blur=10&quality=5';
	import bannerSrcset from '$static/images/leaf.jpg?w=288;576;900;1280;1920&format=webp;jpg&srcset&quality=80';
</script>

<script>
	export let posts;
</script>

<SEO
	title="SvelteKit Starter for Static Sites & Blogs by Jesse Benjamin"
	description="This is JB SvelteKit Starter, a project by Jesse Benjamin designed to get you up and running with SvelteKit for static websites and blogs."
	slug="/"
/>

<section class="stack">
	<Image
		loading="eager"
		srcset={bannerSrcset}
		src={bannerSrc}
		width={bannerWidth}
		height={bannerHeight}
		alt="closeup of a leaf"
		placeholder={bannerPlaceholder}
	/>
	<div class="bannerContent mx-auto">
		<h1 class="mx-auto fs-4">JB SvelteKit Starter</h1>
	</div>
</section>

<section class="py-c1">
	<div class="mx-auto w-sm flow">
		<h2>Hyper-performant, flexible Static Sites & Blogs with SvelteKit & MDSvex!</h2>
		<div class="line" />
		<p class="flow-top-lg">
			This is JB SvelteKit Starter, a project by <a href="https://jessebenjamin.me/"
				>Jesse Benjamin</a
			> designed to get you up and running with SvelteKit for static websites and blogs.
		</p>
		<p>
			I started this project because I love Svelte, want to see more people use it, and felt there
			was a lack of good reference for a blog with support for search & image optimisation all in
			the one place.
		</p>
		<a
			href="https://github.com/jessebenjamin1/jbsks"
			target="_blank"
			rel="noopener"
			class="btn iconbtn"
			><svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-i6dzq1 svelte-z1f8v2"
				><path
					d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
				/></svg
			> <span>View on Github</span></a
		>
	</div>
</section>

<section class="py-c1 bg-g-50 col-p-900">
	<div class="mx-auto w-xl flow">
		<h2 class="ta-c">Blog posts about blog posts</h2>
		<div class="blog-list mt-lg">
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
	</div>
</section>

<section class="py-c1">
	<div class="mx-auto w-sm flow">
		<h2>SvelteKit is great</h2>
		<p>
			I think SvelteKit is really cool. Svelte by itself is incredible, and SvelteKit is exactly
			what you want from a meta-framework. It may be less purpose-built for it than other
			meta-frameworks, but it can definitely be used to produce hyper-performant marketing sites &
			blogs that make heavy use of images with the great DX Svelte provides.
		</p>
		<p>
			Looking at the roadmap in SvelteKit's GitHub repo, it seems like it's only going to get easier
			to do so in the future. I'm excited, and I think you should be too!
		</p>
	</div>
</section>

<style lang="postcss">
	.bannerContent {
		width: var(--content-width);
		max-width: var(--md);
		text-align: center;
		padding: calc(2 * var(--s-xl)) 0;
		h1 {
			background: white;
			padding: 1rem;
			width: max-content;
		}
	}

	.blog-list {
		display: grid;
		gap: 3rem;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	}
</style>
