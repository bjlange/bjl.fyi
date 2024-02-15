export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/projects/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const allProjectSlugs = async () => {
    const allPostFiles = import.meta.glob('/src/routes/projects/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allSlugs = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const postSlug = path.slice(21, -3);
            return postSlug;
        })
    );
    return allSlugs
};