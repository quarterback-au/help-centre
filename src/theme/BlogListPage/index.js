import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
    PageMetadata,
    HtmlClassNameProvider,
    ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';

function BlogListPageMetadata(props) {
    const { metadata } = props;
    const {
        siteConfig: { title: siteTitle },
    } = useDocusaurusContext();
    const { blogDescription, blogTitle, permalink } = metadata;
    const isBlogOnlyMode = permalink === '/';
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (
        <>
            <PageMetadata title={title} description={blogDescription} />
            <SearchMetadata tag="blog_posts_list" />
        </>
    );
}

function ChangelogHeader() {
    return (
        <header className="changelog-header">
            <h1 className="changelog-title">Changelog</h1>
            <p className="changelog-subtitle">
                All the latest updates, improvements, and fixes to Quarterback
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

function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props;
    return (
        <BlogLayout sidebar={sidebar}>
            <ChangelogHeader />
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={metadata} />
        </BlogLayout>
    );
}

export default function BlogListPage(props) {
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogListPage,
            )}>
            <BlogListPageMetadata {...props} />
            <BlogListPageContent {...props} />
        </HtmlClassNameProvider>
    );
}
