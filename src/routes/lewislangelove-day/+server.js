import { error } from '@sveltejs/kit';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
	try {
		// Serve the index.html file from the lewislangelove-day directory
		const indexPath = join(process.cwd(), 'src/routes/lewislangelove-day/index.html');
		let fileContent = await readFile(indexPath, 'utf-8');
		
		// Fix path references to work with the subpath
		fileContent = fileContent
			// Fix absolute paths (starting with /) - but not external URLs
			.replace(/href="\/([^"]*\.html)"/g, 'href="/lewislangelove-day/$1"') // Fix HTML links
			.replace(/href="\/([^"]*\.css)"/g, 'href="/lewislangelove-day/$1"') // Fix CSS links
			.replace(/href="\/([^"]*\.js)"/g, 'href="/lewislangelove-day/$1"') // Fix JS links
			.replace(/src="\/([^"]*\.js)"/g, 'src="/lewislangelove-day/$1"') // Fix JS src
			.replace(/src="\/([^"]*\.png)"/g, 'src="/lewislangelove-day/$1"') // Fix image src
			.replace(/src="\/([^"]*\.jpg)"/g, 'src="/lewislangelove-day/$1"') // Fix image src
			.replace(/src="\/([^"]*\.webp)"/g, 'src="/lewislangelove-day/$1"') // Fix image src
			// Fix navigation links without extensions (like /faq)
			.replace(/href="\/(travel|faq)"/g, 'href="/lewislangelove-day/$1"') // Fix navigation links
			// Fix root logo link to stay within the subpath
			.replace(/href="\/" aria-current="page"/g, 'href="/lewislangelove-day/" aria-current="page"') // Fix root logo link with aria-current
			.replace(/href="\/" class="w-nav-brand"/g, 'href="/lewislangelove-day/" class="w-nav-brand"') // Fix root logo link without aria-current
			// Fix relative paths (not starting with / or http)
			.replace(/href="([^"\/h][^"]*\.css)"/g, 'href="/lewislangelove-day/$1"') // Fix relative CSS links
			.replace(/href="([^"\/h][^"]*\.js)"/g, 'href="/lewislangelove-day/$1"') // Fix relative JS links
			.replace(/src="([^"\/h][^"]*\.js)"/g, 'src="/lewislangelove-day/$1"') // Fix relative JS src
			.replace(/src="([^"\/h][^"]*\.png)"/g, 'src="/lewislangelove-day/$1"') // Fix relative image src
			.replace(/src="([^"\/h][^"]*\.jpg)"/g, 'src="/lewislangelove-day/$1"') // Fix relative image src
			.replace(/src="([^"\/h][^"]*\.webp)"/g, 'src="/lewislangelove-day/$1"') // Fix relative image src
			// Fix favicon and app icon links
			.replace(/href="images\/favicon\.png"/g, 'href="/lewislangelove-day/images/favicon.png"') // Fix favicon
			.replace(/href="images\/app-icon\.png"/g, 'href="/lewislangelove-day/images/app-icon.png"') // Fix app icon
			// Fix jQuery script src
			.replace(/src="js\/jquery\.js/g, 'src="/lewislangelove-day/js/jquery.js') // Fix jQuery
			// Fix srcset attributes - handle the complex srcset format properly
			.replace(/srcset="([^"]*)"/g, (match, srcset) => {
				// Fix image paths in srcset, but preserve the width descriptors
				// Split by comma, fix each image path, then rejoin
				return `srcset="${srcset.split(',').map(item => {
					const parts = item.trim().split(' ');
					if (parts[0] && !parts[0].startsWith('/lewislangelove-day/') && !parts[0].startsWith('http')) {
						parts[0] = '/lewislangelove-day/' + parts[0];
					}
					return parts.join(' ');
				}).join(', ')}"`;
			});
		
		return new Response(fileContent, {
			headers: {
				'Content-Type': 'text/html',
				'Cache-Control': 'public, max-age=3600' // Cache for 1 hour for HTML
			}
		});
	} catch (err) {
		if (err.code === 'ENOENT') {
			throw error(404, 'Wedding website not found');
		}
		throw error(500, 'Internal server error');
	}
}
