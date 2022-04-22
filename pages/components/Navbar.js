import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div>
            <Link href={'/'} passHref>
                <a>
                    Brand Name
                </a>
            </Link>
        </div>
        <ul>
            <li>
                <Link href={'/'} passHref>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href={'/About'} passHref>
                    <a>About Us</a>
                </Link>
            </li>
            <li>
                <Link href={'/Blogs'} passHref>
                    <a>Blogs</a>
                </Link>
            </li>
            <li>
                <Link href={'/Contacts'} passHref>
                    <a>Contact Us</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
