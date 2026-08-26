import React from 'react'
import { Flag, Eye, Handshake, CircleCheck } from "lucide-react";
const values = [
  "Integrity & Trust",
  "Scientific Rigor",
  "Farmer-Centric Approach",
];
const cards = [
  {
    title: "Our Mission",
    icon: Flag,
    iconColor: "text-[#16A34A]",
    iconBg: "bg-[#E5F3E9]",
    content:
      "To empower farmers with high-yielding, resilient seed varieties through continuous research and uncompromising quality, ensuring sustainable agricultural growth and food security.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    iconColor: "text-[#FF8A00]",
    iconBg: "bg-[#FFF1E1]",
    content:
      "To be the premier partner for agricultural prosperity globally, recognized for pioneering biotechnological advancements that respect and enhance traditional farming ecosystems.",
  },

];
const AboutUs = () => {
  return (
    <main>
      <section className='md:py-[96px] py-[60px] md:px-[80px] px-[50px]'>
        <div className="flex flex-col max-w-[1280px] mx-auto">
          <div className="">
            <span className='text-[14px] text-[#4A4A4A]'>Home  <span className='text-[#F5821F]'>About Us</span></span>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="">
              <h2 className='font-bold text-[56px] text-[#1A1A1A] leading-1'>Rooted in Trust <br /><span className='text-[#1E9E4A] leading-1'>Since Day One</span></h2>
              <p className='text-[18px] text-[#4A4A4A]'>We bridge the gap between traditional farming values and modern biotechnology, delivering premium seeds that guarantee agricultural excellence and trusted prosperity for generations.</p>
            </div>
            <div className="">
              <img src="/images/aboutUs/hero.png" alt="hero" className='w-full rounded-xl' />
            </div>
          </div>
        </div>
      </section>
      <section className='md:py-[96px] py-[60px] md:px-[80px] px-[50px] bg-[#FFF4E5]  mx-auto'>
        <div className="max-w-[1280px] mx-auto p-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            
              {cards.map((card) => {
                const Icon = card.icon
                return (
                  <div className="max-w-[357px] p-8 bg-[#FAFAF7] rounded-xl border border-[#E5E5E54D]" key={card.title}>
                    <div className={`${card.iconBg} size-12 flex mb-6 justify-center items-center rounded-full`}>
                      <Icon className={card.iconColor} size={22} />
                    </div>
                    <h2 className='text-[24px] text-[#1A1A1A] mb-4 font-semibold'>{card.title}</h2>
                    <p className='text-[16px] text-[#4A4A4A] '>{card.content}</p>
                  </div>
                )
              })}

            <div className=" max-w-[357px] bg-[#FAFAF7] p-8 rounded-xl border border-[#E5E5E54D]">
              <div className="bg-[#E5E5E5] size-12 mb-6 flex justify-center items-center rounded-full">
                <Handshake size={22} />
              </div>
              <h3 className='text-[24px] mb-4 text-[#1A1A1A] font-semibold'>Our Values</h3>
              <ul className='flex flex-col gap-3'>
                {values.map((values) => (
                  <li key={values} className='flex items-center gap-2'>
                    <CircleCheck size={15} className='text-[#1E9E4A]' />
                    <span className='text-[16px] text-[#4A4A4A] '>{values}</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
       
      </section>
    </main>
  )
}

export default AboutUs
