export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;


	const pageMetaTags = {
		title: title,
		openGraph: {
			title: title,
		}
	};


	return {
		content,
		title,
		date,
		pageMetaTags
	};
}