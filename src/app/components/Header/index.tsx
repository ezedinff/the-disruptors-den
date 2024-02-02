'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../public/images/logo.png';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/aboutus' },
  { title: 'Events', href: '/events' },
  { title: 'Trips', href: '/trips' },
  { title: 'Media', href: '/media' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-lime-100 text-black">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <Image className="w-20" src={logo} alt="logo" />
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block space-x-8`}>
          <ul className="flex items-center justify-center space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="hidden md:block border-black p-2 border rounded-full text-sm"
        >
          Join Community
        </button>
        <button
          className="block md:hidden  border-black p-2 border rounded-full text-sm"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-64 h-full">
            <button
              className="absolute top-2 right-2  border-black p-2 border rounded-full text-sm"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
              <li>
                <button className="border-black p-2  border rounded-full text-sm">
                  Join Community
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}