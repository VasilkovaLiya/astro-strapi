
import styles from "./HeroBanner.module.scss";
import Image from '@components/ui/Image';
import type { StaticImageProps, DynamicImageProps } from '@components/ui/Image';
import { isDynamicImage } from '@components/ui/Image';

type HeroBannerProps = {
  image: ImageMetadata | DynamicImageProps;
  overlay?: boolean;
  overlayColor?: string;
  height?: string;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

export const HeroBanner = ({
  image,
  overlay = false,
  overlayColor = "rgba(0,0,0,0.4)",
  height = "60vh",
  className = "",
  contentClassName = "",
  children,
}: HeroBannerProps) => {
  console.log('image', image);
  // Получаем URL и alt текст в зависимости от типа изображения
  const imageUrl = isDynamicImage(image) ? image.cover.url : image.src;
  const altText = isDynamicImage(image)
    ? image.alt || image.cover.alternativeText || ""
    : image.alt;

  return (
    <section
      className={`${styles.heroBanner} ${className}`}
      style={{ height }}
    >
      {/* Фоновое изображение */}
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={altText}
      />

      {/* Опциональный оверлей */}
      {overlay && (
        <div
          className={styles.overlay}
          style={{ backgroundColor: overlayColor }}
        />
      )}

      {/* Контент */}
      <div className={`${styles.content} ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
};