import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import { POST } from '../components/Post';
import { POSTS } from './api/posts';
import { MYDATA } from './api/mydata';
import Projects from '../components/Projects';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Hero data={MYDATA[0]} />

      <POST items={POSTS} title="Recent Blogs" />
      <div>
        <Link href="/blog">See All Blogs</Link>
      </div>
      <Projects data={MYDATA[0]} />
    </div>
  );
}
