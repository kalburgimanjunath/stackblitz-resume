import { POSTS } from './api/posts';
import { POST } from '../components/Post';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Blog() {
  return (
    <div className={styles.container}>
      <h2>Blog</h2>
      <p>
        I've been programming for almost 12 years now. Throughout this year,
        I've worked with various technologies. I'm here to share just that. Use
        the search below to filter by title.
      </p>
      <POST items={POSTS} title="Most Popular" />
      <div>
        <Link href="/blog">See All Blogs</Link>
      </div>
      <POST items={POSTS} title="All Posts" />
      <POST items={POSTS} title="Free Code Camp" />
    </div>
  );
}
