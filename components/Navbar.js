import Link from 'next/link';
// import { BeakerIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  return (
    <div className="navbar container">
      <ul>
        <li className="hover:bg-gray-100">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/snippets">Snippets</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/resources">Resources</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/quotes">Quotes</Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href="/project">Projects</Link>
        </li>
      </ul>
    </div>
  );
}
