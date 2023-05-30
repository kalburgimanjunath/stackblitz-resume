import { SNIPPETS } from '../api/snippets';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
export default function Index() {
  return (
    <div className={styles.container}>
      <h3>Snippets</h3>
      <p>
        Reusable code snippets that can be easily integrated in your application
        🧩. The page contains functions and code snippets which can be used on
        your webpage.
      </p>
      <div>
        {SNIPPETS &&
          SNIPPETS.map((item) => {
            return (
              <div>
                <Link href={`./snippets${item.liveurl}`}>{item.title}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
