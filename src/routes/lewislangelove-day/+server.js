import { error } from '@sveltejs/kit';

// Import the HTML content as a static string
const indexHtml = `<!DOCTYPE html><!-- Handled by Exflow.site --><html data-wf-page="658b3c70f3efd1f4a45f8616" data-wf-site="658b3c70f3efd1f4a45f8611"><head><meta charset="utf-8"/><title>Allison Lewis &amp; Brian Lange Wedding - Chicago, IL - June 28, 2024</title><meta content="Allison &amp; Brian are getting married!" name="description"/><meta content="Allison Lewis &amp; Brian Lange Wedding - Chicago, IL - June 28, 2024" property="og:title"/><meta content="Allison &amp; Brian are getting married!" property="og:description"/><meta content="Allison Lewis &amp; Brian Lange Wedding - Chicago, IL - June 28, 2024" property="twitter:title"/><meta content="Allison &amp; Brian are getting married!" property="twitter:description"/><meta property="og:type" content="website"/><meta content="summary_large_image" name="twitter:card"/><meta content="width=device-width, initial-scale=1" name="viewport"/><meta content="Webflow" name="generator"/><link href="css/webflow-style.css" rel="stylesheet" type="text/css"/><link href="https://fonts.googleapis.com" rel="preconnect"/><link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous"/><script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script><script type="text/javascript">WebFont.load({  google: {    families: ["League Spartan:regular,500,600,700","Source Serif 4:regular,700,italic,700italic"]  }});</script><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script><link href="images/favicon.png" rel="shortcut icon" type="image/x-icon"/><link href="images/app-icon.png" rel="apple-touch-icon"/></head><body class="body"><div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar-2 w-nav"><div class="container-5 w-container"><a href="/" aria-current="page" class="w-nav-brand w--current"><div class="text-block-4">a<span class="text-span-2">♥︎</span>b</div></a><nav role="navigation" class="nav-menu-2 w-nav-menu"><a href="/travel" class="nav-link w-nav-link">Travel</a><a href="/faq" class="nav-link w-nav-link">FAQ</a></nav><div class="menu-button w-nav-button"><div class="icon w-icon-nav-menu"></div></div></div></div><div class="w-layout-blockcontainer container-2 w-container"><div class="w-layout-hflex flex-block"><div class="div-block"><h1 class="heading">allison &amp; brian are getting married!</h1><div class="detail-block"><div class="details">Friday, June 28, 2024<br/>6pm</div><div class="at-in">at</div><div class="details"><a href="https://maps.app.goo.gl/Ebu9W8ciq8uCPXdf8" target="_blank">Ignite Glass Studios</a></div><div class="at-in">in</div><div class="details">Chicago, IL</div></div></div><img class="portrait-postcard" src="images/allisonbrianengagement_rmp-98_websize.webp" width="1158" alt="Brian and Allison, walking in the Montrose Bird Sanctuary" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0, 0);transform-style:preserve-3d" sizes="(max-width: 479px) 90vw, (max-width: 991px) 470px, 400px" data-w-id="fe2e5ed0-15a1-f2c7-bec4-276fc939e4ac" loading="lazy" srcset="images/allisonbrianengagement_rmp-98_websize-p-500.webp 500w, images/allisonbrianengagement_rmp-98_websize-p-800.webp 800w, images/allisonbrianengagement_rmp-98_websize.webp 1067w"/></div></div><div class="w-layout-hflex flex-block-2"><a href="#" class="button w-button">RSVP</a><a href="#" class="button w-button">Registry</a><a href="#" class="button w-button">Travel</a></div><div class="w-layout-hflex flex-block-3"><a data-w-id="84806742-5b13-c16a-92bb-569ae5410af0" href="https://withjoy.com/brian-and-allison-eclm55fq8b000001x77mjw4xszs/rsvp" target="_blank" class="link-block flowa w-inline-block"><div class="theme-button">RSVP</div></a><a data-w-id="0d3e4131-2a10-4eaf-3141-6302baea8718" href="/travel" class="link-block bean w-inline-block"><div class="text-block-6">Travel</div></a><a data-w-id="cf367b98-568e-9038-cf85-b842e771327f" href="https://withjoy.com/brian-and-allison-eclm55fq8b000001x77mjw4xszs/registry" target="_blank" class="link-block plate w-inline-block"><div class="text-block-7">Registry</div></a></div><div class="w-layout-blockcontainer w-container"><ol role="list" class="w-list-unstyled"><li></li><li></li><li></li></ol></div><script src="js/jquery.js?site=658b3c70f3efd1f4a45f8611" type="text/javascript"  ></script><script src="js/webflow-script.js" type="text/javascript"></script></body></html>`;

export async function GET() {
	try {
		let fileContent = indexHtml;
		
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
		throw error(500, 'Internal server error');
	}
}