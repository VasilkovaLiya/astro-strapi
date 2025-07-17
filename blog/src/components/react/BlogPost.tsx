import type { Cover } from '@components/ui/Image';
import React from 'react';
import Image from '@components/ui/Image';
import styles from './BlogPost.module.scss';

type BlogPostProps = {
    title: string;
    description: string;
    publishedAt: string;
    richTextContent: string;
    cover: Cover
}

export default function BlogPost({ title, description, publishedAt, cover, richTextContent }: BlogPostProps) {
    return (
        <article className={styles.blogPost}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.date}>Опубликовано: {new Date(publishedAt).toLocaleDateString()}</p>
            <Image cover={cover} alt={title} />
            {richTextContent && (
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: richTextContent }}
                />
            )}
        </article>
    )
}