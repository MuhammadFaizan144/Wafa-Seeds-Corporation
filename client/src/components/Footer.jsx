import React from 'react'
import { Link } from 'react-router-dom'
const footertable = [
  { title: "Company", name: ["Home", "About Us", "Products", "Contact Us"], link: ["/", "/about-us", "/products", "/contact-us"] },
  { title: "Resources", name: ["Publications", "Media", "Privacy Policy", "Terms of Service"], link: ["/publications", "/media", "/privacy-policy", "/terms-of-service"] },
]
const Footer = () => {
  return (
    <footer className="max-w-[1280px] mx-auto bg-[#171D17]">
      <div className="">
        <div className="">
          <img src="/images/logo.png" alt="Logo" className="size-16" />
          <div className="">
            <p>Empowering agriculture with
              premium seeds and state-of-the-
              art ginning solutions for a
              prosperous tomorrow.</p>
            <p>Bahar Industries, Manthar Road, Sadiqabad</p>
          </div>

        </div>
        <div className="">
          <ul>
            {footertable.map((item, index) => {
              return (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            })}

          </ul>
        </div>
        <div className="">
          <h2>Stay Updated</h2>
          <p>Subscribe for the latest
            agricultural insights.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
