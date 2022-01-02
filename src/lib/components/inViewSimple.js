export default function inView(node) {
	const handleIntersect = (e) => {
		node.dispatchEvent(
			new CustomEvent('intersect', {
				detail: e[0].isIntersecting
			})
		);
		if (e[0].isIntersecting) {
			observer.unobserve(node);
		}
	};

	const root = null;
	const rootMargin = `0px 0px 0px 0px`;
	const threshold = 0.75;
	const options = { root, rootMargin, threshold };
	const observer = new IntersectionObserver(handleIntersect, options);
	observer.observe(node);

	return {
		destroy() {
			if (observer) observer.disconnect();
		}
	};
}
