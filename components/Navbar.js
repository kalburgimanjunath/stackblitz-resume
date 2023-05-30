import Link from 'next/link';
// import { BeakerIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/snippets">Snippets</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/quotes">Quotes</Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
      </ul>
    </div>
  );
}
