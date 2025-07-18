import React from 'react';

export type StaticImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    loading?: 'eager' | 'lazy';
};

export type DynamicImageProps = {
    cover: {
        url: string;
        alternativeText?: string;
        width?: number;
        height?: number;
        formats?: {
            thumbnail?: { url: string };
            small?: { url: string };
            [key: string]: { url: string } | undefined;
        };
    };
    alt?: string;
    className?: string;
    loading?: 'eager' | 'lazy';
};

export type ImageProps = StaticImageProps | DynamicImageProps | ImageMetadata;

export const isDynamicImage = (props: ImageProps): props is DynamicImageProps => {
    return 'cover' in props;
};

const Image: React.FC<ImageProps> = (props) => {
    // Обработка статического изображения
    if (!isDynamicImage(props)) {
        const { src, alt, width, height, className = '', loading = 'lazy' } = props;

        return (
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                className={className}
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        );
    }

    // Обработка динамического изображения (из CMS)
    const { cover, alt = '', className = '', loading = 'lazy' } = props;

    if (!cover?.url) return null;

    const srcSet = [
        cover.formats?.thumbnail?.url && `${cover.formats.thumbnail.url} 156w`,
        cover.formats?.small?.url && `${cover.formats.small.url} 500w`,
        cover.url && `${cover.url} 700w`,
    ]
        .filter(Boolean)
        .join(', ');

    return (
        <img
            src={cover.url}
            srcSet={srcSet}
            sizes="(max-width: 500px) 100vw, 700px"
            alt={alt || cover.alternativeText || ''}
            width={cover.width}
            height={cover.height}
            loading={loading}
            className={className}
            style={{ maxWidth: '100%', height: 'auto' }}
        />
    );
};

export default Image;