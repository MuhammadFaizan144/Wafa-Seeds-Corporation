import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navlinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Publications', path: '/publications' },
    { name: 'Media', path: '/media' },
    { name: 'About Us', path: '/about-us' }
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => {
        setIsOpen(false)
    }
    return (
        <header className="bg-[#F5F5F5] ">

            <nav className="flex relative justify-between items-center  max-w-[1280px] mx-auto px-4 py-2">
                <div className="flex justify-between items-center w-full">

                    <NavLink to="/">
                        <img src="/images/logo.png" alt="Logo" className="size-16" />
                    </NavLink>
                    <div className="lg:block hidden">
                        <ul className="flex justify-center items-center gap-8 text-[14px] font-semibold ">
                            {Navlinks.map((item, index) => (
                                <li key={index} className="hover:text-[#964900] text-[#3E4A3E]">
                                    <NavLink className="" to={item.path}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:block hidden">
                        <div className="flex gap-6 items-center">
                            <div className="flex gap-2 items-center">
                                <img src="/images/header/phoneicon.png" alt="Phone" className="size-4" />
                                <p className="text-[#3E4A3E] text-[14px] font-semibold">0300 1234567</p>
                            </div>
                            <NavLink to="/contact-us" className='bg-[#F5821F] text-[14px] font-semibold py-[10px] px-6 text-white rounded-lg'>Get in Touch</NavLink>
                        </div>
                    </div>
                </div>
                <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    <span className={`block w-6 h-0.5 bg-[#3E4A3E] transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#3E4A3E] transition-transform ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#3E4A3E] transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                <div className={`bg-[#F5F5F5] z-20 px-10 pb-5 lg:hidden w-full absolute right-0 top-20 overflow-hidden transition-all duration-300 rounded-bl-xl rounded-br-xl flex flex-col ${isOpen ? "max-h-[500px] opacity-100": "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col gap-4 py-4 text-[14px] font-semibold ">
                        {Navlinks.map((item,index)=>{
                            return(
                                <li key={index} className="hover:text-[#964900] text-[#3E4A3E] text-[14px] font-semibold">
                                    <NavLink className="" to={item.path} onClick={closeMenu}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                                <img src="/images/header/phoneicon.png" alt="Phone" className="size-4" />
                                <p className="text-[#3E4A3E] text-[14px] font-semibold">0300 1234567</p>
                            </div>
                            <NavLink to="/contact-us" className='bg-[#F5821F] text-[14px] font-semibold py-[10px] px-6 text-white rounded-lg' onClick={closeMenu}>
                                Get in Touch
                            </NavLink>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar
