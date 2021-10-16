<script>
	let isShowing = false;
	const toggle = () => {
		document.body.classList[!isShowing ? 'add' : 'remove']('noscroll');
		if (!isShowing) {
			openMenu();
		} else {
			closeMenu();
		}
	};

	function openMenu() {
		isShowing = true;
		setTimeout(() => {
			document.querySelector('.curtain-menu').style.width = '100vw';
		}, 5);

		setTimeout(() => {
			document.querySelector('.primary-nav').style.opacity = 1;
		}, 305);
	}

	function closeMenu() {
		document.querySelector('.primary-nav').style.opacity = 0;
		setTimeout(() => {
			document.querySelector('.curtain-menu').style.width = '0';
		}, 500);
		setTimeout(() => {
			isShowing = false;
		}, 800);
	}

	function handleMenuEscape(event) {
		if (event.key === 'Escape' && isShowing) {
			toggle();
		}
	}

	const focusMenuButton = (event) => {
		document.querySelector('#menuButton').focus();
	};
</script>

<button aria-label="toggle navigation menu" class="btn" id="menuButton" on:click={toggle}
	>{#if !isShowing}<svg stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16m-7 6h7"
			/></svg
		>
	{:else}
		<svg
			fill="currentColor"
			stroke="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
	{/if}
</button>

{#if isShowing}
	<div class="curtain-menu">
		<nav>
			<ul class="primary-nav">
				<li>
					<a sveltekit:prefetch on:click={toggle} class="font-md" href="/">Home</a>
				</li>
				<li>
					<a sveltekit:prefetch on:click={toggle} class="font-md" href="/blog/the-seo-component"
						>SEO</a
					>
				</li>
				<li>
					<a sveltekit:prefetch on:click={toggle} class="font-md" href="/blog/image-optimisation"
						>Image Optimisation</a
					>
				</li>
				<li>
					<a sveltekit:prefetch on:click={toggle} class="font-md" href="/blog/loading-posts"
						>Loading Posts</a
					>
				</li>
				<li>
					<a
						sveltekit:prefetch
						id="lastCurtainLink"
						on:click={toggle}
						on:blur={focusMenuButton}
						class="font-md"
						href="/blog">Blog</a
					>
				</li>
			</ul>
		</nav>
	</div>
{/if}

<svelte:window on:keydown={handleMenuEscape} />

<style>
	button {
		position: relative;
		z-index: 1001;
		height: 2.5rem;
		display: flex;
		padding: 0.5rem;
		border-radius: 0.55rem;
	}

	button svg {
		height: 100%;
	}

	.curtain-menu {
		width: 0;
		background: white;
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		z-index: 1000;
		transition: width 0.3s;
	}

	.primary-nav {
		opacity: 0;
		transition: opacity 0.3s;
		list-style: none;
		max-width: 18rem;
		text-align: center;
	}

	.primary-nav a {
		color: var(--gray-700);
		text-decoration: none;
		font-weight: 900;
	}

	nav {
		display: grid;
		place-items: center;
		height: 100%;
	}

	.curtain-menu ul {
		padding: 0;
	}

	.curtain-menu ul > * + * {
		margin-top: 0.5rem;
	}
</style>
