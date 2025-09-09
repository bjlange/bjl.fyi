import { error } from '@sveltejs/kit';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';

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

export async function GET({ params, url }) {
	try {
		// Get the requested path
		const requestedPath = params.path || '';
		
		// If no path is specified, serve index.html
		let filePath = requestedPath === '' ? 'index.html' : requestedPath;
		
		// If the path doesn't have an extension, try adding .html
		if (filePath && !extname(filePath)) {
			const htmlPath = filePath + '.html';
			const htmlFilePath = join(process.cwd(), 'src/routes/lewislangelove-day', htmlPath);
			try {
				// Check if the .html file exists
				await readFile(htmlFilePath);
				filePath = htmlPath;
			} catch (err) {
				// If .html doesn't exist, keep the original path
			}
		}
		
		// Construct the full path to the static file
		const staticFilePath = join(process.cwd(), 'src/routes/lewislangelove-day', filePath);
		
		// Read the file
		let fileContent = await readFile(staticFilePath);
		
		// Determine the MIME type based on file extension
		const ext = extname(filePath).toLowerCase();
		const mimeType = mimeTypes[ext] || 'application/octet-stream';
		
		// If it's an HTML file, transform the paths
		if (ext === '.html') {
			let htmlContent = fileContent.toString('utf-8');
			
			// Fix path references to work with the subpath
			htmlContent = htmlContent
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
			
			fileContent = Buffer.from(htmlContent, 'utf-8');
		}
		
		// Return the file with appropriate headers
		return new Response(fileContent, {
			headers: {
				'Content-Type': mimeType,
				'Cache-Control': ext === '.html' ? 'public, max-age=3600' : 'public, max-age=31536000' // Cache HTML for 1 hour, other assets for 1 year
			}
		});
	} catch (err) {
		// If file not found, return 404
		if (err.code === 'ENOENT') {
			throw error(404, 'File not found');
		}
		// For other errors, return 500
		throw error(500, 'Internal server error');
	}
}
