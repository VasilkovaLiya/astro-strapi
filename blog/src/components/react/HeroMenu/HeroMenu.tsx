import styles from './HeroMenu.module.scss';
import { HeroMenuItem } from './HeroMenuItem';

export const HeroMenu = () => {
    return <div className={styles.heroMenu}>
        <div className={styles.container}>
            <h2 className={styles.title}>МЕНЮ</h2>
            <p>Some subtitle</p>
            <ul>
                <HeroMenuItem></HeroMenuItem>
            </ul>
        </div>
    </div>
}
