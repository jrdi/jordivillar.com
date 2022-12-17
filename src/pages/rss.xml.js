import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

// Works with Markdown files only!
const postImportResult = import.meta.glob('./**/[^index|about]*.{md,mdx}', { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			link: post.url,
			title: post.frontmatter.title,
			pubDate: post.frontmatter.pubDate,
			content: sanitizeHtml(post.compiledContent()),
		}))
	});
