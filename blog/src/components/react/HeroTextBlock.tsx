
import styles from "./HeroTextBlock.module.scss";

type HeroTextBlockProps = {
  title: string;
  description: string;
  highlight: string;
  className?: string
};

export const HeroTextBlock = ({
  title,
  description,
  highlight,
  className = "",
}: HeroTextBlockProps) => {


  return (
    <section
      className={`${styles.heroTextBlock} ${className}`}

    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.highlight}>{highlight}</p>
        <p className={styles.description}>{description}</p>
      </div>

    </section>
  );
};