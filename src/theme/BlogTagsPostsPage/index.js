import React from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import {
    PageMetadata,
    HtmlClassNameProvider,
    ThemeClassNames,
    usePluralForm,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import Link from '@docusaurus/Link';

function useBlogPostsPlural() {
    const { selectMessage } = usePluralForm();
    return (count) =>
        selectMessage(
            count,
            translate(
                {
                    id: 'theme.blog.post.plurals',
                    description:
                        'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: 'One post|{count} posts',
                },
                { count },
            ),
        );
}

function BlogTagsPostsPageMetadata({ tag }) {
    const title = translate(
        {
            id: 'theme.blog.tagTitle',
            description: 'The title of the page for a blog tag',
            message: '{nPosts} tagged with "{tagName}"',
        },
        { nPosts: tag.count, tagName: tag.label },
    );
    return (
        <>
            <PageMetadata title={title} />
            <SearchMetadata tag="blog_tags_posts" />
        </>
    );
}

function TagHeader({ tag }) {
    const blogPostsPlural = useBlogPostsPlural();
    return (
        <header className="changelog-header">
            <Link to="/changelog" className="changelog-back-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                </svg>
                All updates
            </Link>
            <h1 className="changelog-title changelog-title--tag">
                {tag.label}
            </h1>
            <p className="changelog-subtitle">
                {blogPostsPlural(tag.count)} with this tag
            </p>
            <div className="changelog-actions">
                <a
                    href="https://x.com/quarterbackau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="changelog-btn"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Follow
                </a>
                <a
                    href="/changelog/rss.xml"
                    className="changelog-btn changelog-btn--icon"
                    title="RSS Feed"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 11a9 9 0 0 1 9 9" />
                        <path d="M4 4a16 16 0 0 1 16 16" />
                        <circle cx="5" cy="19" r="1" />
                    </svg>
                </a>
            </div>
            <div className="changelog-separator" />
        </header>
    );
}

function BlogTagsPostsPageContent({ tag, items, sidebar, listMetadata }) {
    return (
        <BlogLayout sidebar={sidebar}>
            <TagHeader tag={tag} />
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={listMetadata} />
        </BlogLayout>
    );
}

export default function BlogTagsPostsPage(props) {
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogTagPostListPage,
                'blog-tags-posts-page-custom',
            )}>
            <BlogTagsPostsPageMetadata {...props} />
            <BlogTagsPostsPageContent {...props} />
        </HtmlClassNameProvider>
    );
}
