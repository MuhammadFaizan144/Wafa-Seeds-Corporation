import React from 'react'
import { Link } from 'react-router-dom'
const Navlinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Publications', path: '/publications' },
    { name: 'Media', path: '/media' },
    { name: 'About Us', path: '/about-us' }
]
const Navbar = () => {
    return (
        <header>

            <nav className="flex justify-between items-center">
                <div className="">
                    <img src="/images/logo.png" alt="Logo" className="size-16" />
                </div>
                <div className="">
                    <ul className="flex justify-center items-center">
                        {Navlinks.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <div className="flex">
                        <p>0300 1234567</p>
                        <Link to="/contact-us">Get in Touch</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
