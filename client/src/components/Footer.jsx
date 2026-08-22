import React from 'react'
import { Link } from 'react-router-dom'
const companyLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Products", link: "/products" },
  { name: "Contact Us", link: "/contact-us" }
]
const resourcesLinks = [

  { name:"Publications", link: "/publications" },
  { name:"Media", link: "/media" },
  { name:"Privacy Policy", link: "/privacy-policy" },
  { name:"Terms of Service", link: "/terms-of-service" }
]
const Footer = () => {
  return (
    <footer className="text-[#DEE5DAB2] bg-[#171D17] lg:py-32 md:py-24 py-16 lg:px-20 md:px-16 px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-6">
          <img src="/images/logo.png" alt="Logo" className="size-16" />
          
            <p className=' text-lg'>Empowering agriculture with
              premium seeds and state-of-the-
              art ginning solutions for a
              prosperous tomorrow.</p>
            <p className='font-medium text-[12px]'>Bahar Industries, Manthar Road, Sadiqabad</p>
          

        </div>
        <div className="flex flex-col gap-4">
          <h2 className='text-white font-semibold text-[24px]'>Company</h2>
          <ul className="flex flex-col gap-4">
            {companyLinks.map((item, index) => {
              return (
                <li key={index} className=" font-medium text-[12px]">
                  
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            })}

          </ul>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className='text-white font-semibold text-[24px]'>Resources</h3>
          <ul className="flex flex-col gap-4">
            {resourcesLinks.map((item, index) => {
              return (
                <li key={index} className=" font-medium text-[12px]">
                  <Link className='flex ' to={item.link}>{item.name}</Link>
                </li>
              )
            })}

          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h2 className='text-white font-semibold text-[24px]'>Stay Updated</h2>
          <p className='font-medium text-[16px]'>Subscribe for the latest
            agricultural insights.</p>
          <form className='flex gap-2'>
            <input className='bg-white/5 border border-white/10 w-full py-3 px-4 rounded-lg' type="email" placeholder="Enter your email" />
            <button type="submit" className='bg-[#F5821F] py-3 px-4 rounded-lg'> <img src="/images/footer/emailsendbutton.png" alt="" /></button>
          </form>
          <div className="">
            <p className='font-medium text-[12px]'>© 2024 Wafa Seeds Corporation. All rights
              reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
