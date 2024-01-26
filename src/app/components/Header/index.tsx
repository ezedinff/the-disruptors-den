// import { Link } from 'react-router-dom';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow-lime-100 text-white py-4">
      <div className="container mx-auto flex items-center justify-around">
        <h1 className="text-2xl font-semibold">The Disruptors Den</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/trips">Trips</Link>
            </li>
            <li>
              <Link href="/media">Media</Link>
            </li>
          <button>Join Community</button>
          </ul>

        </nav>
      </div>
    </header>
  );
};
