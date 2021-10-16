<script context="module">
	import SEO from '$components/SEO.svelte';
	import HeroBanner from '$components/HeroBanner.svelte';
	import bannerJpg from '../../static/images/leaf.jpg?w=300;450;900;1280;1500;1920;2500&jpg&srcset';
	import bannerWebp from '../../static/images/leaf.jpg?w=300;450;900;1280;1500;1920;2500&webp&srcset';
	import bannerPlaceholder from '../../static/images/leaf.jpg?width=5';
	export const postList = import.meta.glob('./blog/*/*.svx');
	let body = [];
	for (const path in postList) {
		body.push(postList[path]().then(({ metadata }) => metadata));
	}
	export async function load({ page, fetch }) {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
	function sortByDate(a, b) {
		const dateA = a.date;
		const dateB = b.date;
		let comparison = 0;
		if (dateA > dateB) {
			comparison = 1;
		} else if (dateA < dateB) {
			comparison = -1;
		}
		return comparison * -1;
	}
	posts.sort(sortByDate);
</script>

<SEO
	title="SvelteKit Starter for Static Sites & Blogs by Jesse Benjamin"
	description="This is JB SvelteKit Starter, a project by Jesse Benjamin designed to get you up and running with SvelteKit for static websites and blogs."
	slug="/"
/>

<HeroBanner
	focus="center"
	placeholder={bannerPlaceholder}
	srcsetJpg={bannerJpg}
	srcsetWebp={bannerWebp}
	showOverlay={false}
	title="JB SvelteKit Starter"
/>

<section class="py-r">
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
		<a href="https://github.com/jessebenjamin1/jbsks" target="_blank" rel="noopener" class="btn"
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

<section class="py-r dark">
	<div class="mx-auto w-xl flow">
		<h2 class="ta-c">Blog posts about blog posts</h2>
		<div class="blog-list mt-lg">
			{#each posts as { title, description, slug }}
				<article>
					<main class="flow flow-md">
						<h1 class="font-md">{title}</h1>
						<p>{description}</p>
						<a sveltekit:prefetch class="btn" href={`/blog${slug}`}>Full Post</a>
					</main>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="py-r">
	<div class="mx-auto w-sm flow">
		<h2>SvelteKit goes hard</h2>
		<p>
			SvelteKit is really cool. Svelte by itself is incredible, and SvelteKit is exactly what you
			want from a meta-framework. Even though it's geared more for web apps than websites, it can
			definitely be used to produce hyper-performant sites that make heavy use of images and other
			creative assets that make for good marketing sites.
		</p>
		<p>
			Looking at the roadmap in SvelteKit's GitHub repo, it seems like it's only going to get easier
			to do so in the future.I'm excited, and I think you should be too!
		</p>
	</div>
</section>

<style>
	.dark {
		background: var(--primary-100);
		color: var(--gray-700);
	}

	.line {
		height: 4px;
		background: var(--primary-200);
		width: 10rem;
	}

	.border-blur {
		display: grid;
		grid-template-areas: 'center';
	}

	.border-blur::after {
		content: '';
		grid-area: center;
		border: 4px dashed var(--secondary-400);
		filter: blur(4px);
	}

	.border-blur > * {
		grid-area: center;
		padding: 3rem;
	}

	.blog-list {
		display: grid;
		gap: 3rem;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	}
</style>
