import styles from './HeroMenuItem.module.scss';
import Image, { type DynamicImageProps } from '@components/ui/Image';
export const HeroMenuItem = (image: ImageMetadata | DynamicImageProps, title, link) => {
    return <li className={styles.heroMenuItem}>
        <a href="#">
            <Image
                src={blogPlaceholder.src}
                alt="Placeholder image"
                width={400}
                height={300}
            />
        </a>
    </li>
}