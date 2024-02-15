export const load = async ({ fetch }) => {
	const response = await fetch(`/api/content`);
	const content = await response.json();

	const title = 'Brian J. Lange | Data x Product Leader';
	const description =
		'The hypertext pages of the Chicago-based data scientist, product person, and leader of creative problem solvers. Formerly of IDEO and Datascope.';
	const pageMetaTags = {
		title: title,
		titleTemplate: '%s',
		description: description,
		openGraph: {
			title: title,
			description: description
		}
	};

	return {
		content,
		pageMetaTags
	};
};
