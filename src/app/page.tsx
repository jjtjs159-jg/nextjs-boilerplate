import { AiOutlineGold } from 'react-icons/ai';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.icon}>
            <AiOutlineGold className={styles.shape} />
          </span>
          <h4 className={styles.title}>Components</h4>
          <p className={styles.description}>
            Tried to increase the reusability of frequently used UI elements by using tailwind css
            and sass.
          </p>
        </div>
      </div>
    </div>
  );
}
