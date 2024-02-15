// /src/routes/sitemap.xml/+server.js
import * as sitemap from 'super-sitemap';
import { allProjectSlugs } from '$lib/utils';

export const prerender = true;

export const GET = async () => {
	const projectSlugs = await allProjectSlugs();


	return await sitemap.response({
		origin: 'https://bjl.fyi',
        paramValues: {
            '/projects/[slug]': projectSlugs
        }
	});
};
