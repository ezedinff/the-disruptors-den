// import { Link } from 'react-router-dom';
import Link from 'next/link';
import logo from '../../../../public/logo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="shadow-lime-100 text-black space-between">
      <div className="container mx-auto flex items-center justify-between">
        <Image className='w-20' src={logo} alt='logo'/>
        <nav className=''>
          <ul className="flex space-x-8">
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
          </ul>
        </nav>
        <button className='border-2 border-black p-2 border rounded-full text-sm '>Join Community</button>
      </div>
    </header>
  );
};