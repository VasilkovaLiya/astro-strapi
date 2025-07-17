import type { Cover } from '@components/ui/Image';
import React from 'react';
import Image from '@components/ui/Image';
type BlogPostProps = {
    title: string;
    description: string;
    publishedAt: string;
    richTextContent: string;
    cover: Cover
}
export default function BlogPost({ title, description, publishedAt, cover, richTextContent }: BlogPostProps) {
    return (
        <article>
            <h1>{title}</h1>
            <p className="description">{description}</p>
            <p className="date">Опубликовано: {new Date(publishedAt).toLocaleDateString()}</p>
            <Image cover={cover} alt={title} />
        </article>
        //   {richTextContent && <article dangerouslySetInnerHTML={richTextContent}} />}
    )
}