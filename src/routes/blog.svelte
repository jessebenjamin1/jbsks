<script context="module">
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
	import SEO from '$components/SEO.svelte';
	import HeroBanner from '$components/HeroBanner.svelte';
	import bannerJpg from '../../static/images/plant1.jpg?w=300;450;900;1280;1500;1920;2500&jpg&srcset';
	import bannerWebp from '../../static/images/plant1.jpg?w=300;450;900;1280;1500;1920;2500&webp&srcset';
	import bannerPlaceholder from '../../static/images/plant1.jpg?width=5';
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

<SEO title="Blog" description="A list of all blog posts on the site." slug="/blog" />

<HeroBanner
	focus="center"
	placeholder={bannerPlaceholder}
	srcsetJpg={bannerJpg}
	srcsetWebp={bannerWebp}
	showOverlay={false}
	title="Blog"
/>

<section class="py-r">
	<h2 class="mx-auto w-md ta-c">Recent Blog Posts</h2>
	<div class="post-grid mx-auto w-xl mt-lg">
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
</section>

<style>
	.post-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	}
</style>
