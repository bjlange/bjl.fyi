import { error } from '@sveltejs/kit';

// MIME type mapping for common file types
const mimeTypes = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'application/javascript',
	'.json': 'application/json',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.ico': 'image/x-icon',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.ttf': 'font/ttf',
	'.eot': 'application/vnd.ms-fontobject'
};

// Function to transform HTML content
function transformHtmlContent(htmlContent) {
	return htmlContent
		// Fix absolute paths (starting with /) - but not external URLs
		.replace(/href="\/([^"]*\.html)"/g, 'href="/lewislangelove-day/$1"') // Fix HTML links
		.replace(/href="\/([^"]*\.css)"/g, 'href="/lewislangelove-day/$1"') // Fix CSS links
		.replace(/href="\/([^"]*\.js)"/g, 'href="/lewislangelove-day/$1"') // Fix JS links
		.replace(/src="\/([^"]*\.js)"/g, 'src="/lewislangelove-day/$1"') // Fix JS src
		.replace(/src="\/([^"]*\.png)"/g, 'src="/lewislangelove-day/$1"') // Fix image src
		.replace(/src="\/([^"]*\.jpg)"/g, 'src="/lewislangelove-day/$1"') // Fix image src
		.replace(/src="\/([^"]*\.webp)"/g, 'src="/lewislangelove-day/$1"') // Fix image src
		// Fix navigation links without extensions (like /travel, /faq)
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
}

export async function GET({ params, url, platform }) {
	try {
		const requestedPath = params.path || '';
		let filePath = requestedPath === '' ? 'index.html' : requestedPath;

		// If the path doesn't have an extension, try adding .html
		if (filePath && !filePath.includes('.')) {
			const htmlPath = filePath + '.html';
			// For Cloudflare, we'll try to serve the file directly
			// If it doesn't exist, we'll fall back to the original path
			filePath = htmlPath;
		}

		// For Cloudflare, we need to use a different approach
		// We'll create a simple file serving mechanism that works with the static files
		
		// This is a simplified approach - in a real Cloudflare deployment,
		// you would typically use the static file serving capabilities
		// or pre-process the files at build time
		
		// For now, let's return a 404 for non-HTML files to avoid the fs issue
		// and focus on getting the HTML pages working
		
		if (!filePath.endsWith('.html')) {
			throw error(404, 'File not found');
		}

		// For HTML files, we'll need to handle them differently
		// Since we can't use fs/promises in Cloudflare, we'll need to
		// either pre-process the files or use a different approach
		
		throw error(404, 'HTML file serving not yet implemented for Cloudflare');
		
	} catch (err) {
		if (err.status) {
			throw err;
		}
		throw error(500, 'Internal server error');
	}
}