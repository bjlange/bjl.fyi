export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, description } = post.metadata;
	const content = post.default;

	const edited =
		'Read about ' +
		description.charAt(0).toLowerCase() +
		description.slice(1) +
		" on Brian J. Lange's portfolio site.";

	const pageMetaTags = {
		title: title,
		description: edited,
		openGraph: {
			title: title,
			description: edited,
			siteName: 'Brian J. Lange'
		}
	};

	return {
		content,
		title,
		date,
		pageMetaTags
	};
}
