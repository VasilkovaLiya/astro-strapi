import React from 'react';


type CoverFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export type Cover = {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width: number;
    height: number;
    formats?: {
        small?: CoverFormat;
        thumbnail?: CoverFormat;
        [key: string]: CoverFormat | undefined;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

type ImageProps = {
    cover: Cover;
    alt?: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ cover, alt = '', className = '' }) => {
    console.log('cover', cover);
    if (!cover) return null;

    const srcSet = [
        cover.formats?.thumbnail?.url && `${cover.formats.thumbnail.url} 156w`,
        cover.formats?.small?.url && `${cover.formats.small.url} 500w`,
        cover.url && `${cover.url} 700w`,
    ]
        .filter(Boolean)
        .join(', ');

    const src = cover.url;

    return (
        <img
            src={src}
            srcSet={srcSet}
            sizes="(max-width: 500px) 100vw, 700px"
            alt={alt || cover.alternativeText || ''}
            width={cover.width}
            height={cover.height}
            loading="lazy"
            className={className}
            style={{ maxWidth: '100%', height: 'auto' }}
        />
    );
};

export default Image;
