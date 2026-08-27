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

const member=[
  {
    image:"/images/aboutUs/section3/member1.png",
    name:"Tariq Mehmood",
    position:"Chief Executive Officer"
  },
  {
    image:"/images/aboutUs/section3/member2.png",
    name:"Dr. Sara Khan",
    position:"Head of R&D"
  }
]
const stats=[
  {
    number:"99%",
    name:"GENETIC PURITY"
  },
  {
    number:"16+",
    name:"YEARS EXPERIENCE"
  },
  {
    number:"99K",
    name:"ACRES SERVED"
  },
  {
    number:"100%",
    name:"TESTED LOTS"
  }
]
const certification=[
  {icon:"/images/aboutUs/section4/icon1.png",name:"FSC Certified"},
  {icon:"/images/aboutUs/section4/icon2.png",name:"ISO 9001:2015"},
  {icon:"/images/aboutUs/section4/icon3.png",name:"National Seed Council"},
]
const AboutUs = () => {
  return (
    <main>
  {/* Hero Section */}
  <section className="py-[60px] px-5 sm:px-8 md:py-[96px] md:px-[80px]">
    <div className="mx-auto flex max-w-[1280px] flex-col">
      
      <div className="mb-6">
        <span className="text-[14px] text-[#4A4A4A]">
          Home{" "}
          <span className="text-[#F5821F]">About Us</span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-[38px] font-bold leading-[1.05] text-[#1A1A1A] sm:text-[46px] md:text-[56px]">
            Rooted in Trust <br />
            <span className="text-[#1E9E4A]">
              Since Day One
            </span>
          </h2>

          <p className="mt-6 text-[16px] leading-relaxed text-[#4A4A4A] sm:text-[17px] md:text-[18px]">
            We bridge the gap between traditional farming values and modern
            biotechnology, delivering premium seeds that guarantee agricultural
            excellence and trusted prosperity for generations.
          </p>
        </div>

        <div>
          <img
            src="/images/aboutUs/hero.png"
            alt="hero"
            className="w-full rounded-xl"
          />
        </div>

      </div>
    </div>
  </section>


  {/* Cards Section */}
  <section className="mx-auto bg-[#FFF4E5] py-[60px] px-5 sm:px-8 md:py-[96px] md:px-[80px]">
    <div className="mx-auto max-w-[1280px] p-0 md:p-10 lg:p-20">
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {cards.map((card) => {
          const Icon = card.icon

          return (
            <div
              className="w-full max-w-[357px] p-6 sm:p-8 bg-[#FAFAF7] rounded-xl border border-[#E5E5E54D] md:mx-0"
              key={card.title}
            >
              <div
                className={`${card.iconBg} mb-6 flex size-12 items-center justify-center rounded-full`}
              >
                <Icon
                  className={card.iconColor}
                  size={22}
                />
              </div>

              <h2 className="mb-4 text-[22px] font-semibold text-[#1A1A1A] sm:text-[24px]">
                {card.title}
              </h2>

              <p className="text-[15px] leading-relaxed text-[#4A4A4A] sm:text-[16px]">
                {card.content}
              </p>
            </div>
          )
        })}

        {/* Values */}
        <div className="w-full max-w-[357px] bg-[#FAFAF7] p-6 sm:p-8 rounded-xl border border-[#E5E5E54D]">
          
          <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#E5E5E5]">
            <Handshake size={22} />
          </div>

          <h3 className="mb-4 text-[22px] font-semibold text-[#1A1A1A] sm:text-[24px]">
            Our Values
          </h3>

          <ul className="flex flex-col gap-3">
            {values.map((values) => (
              <li
                key={values}
                className="flex items-start gap-2"
              >
                <CircleCheck
                  size={15}
                  className="mt-1 shrink-0 text-[#1E9E4A]"
                />

                <span className="text-[15px] text-[#4A4A4A] sm:text-[16px]">
                  {values}
                </span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  </section>


  {/* Team / Chairman Section */}
  <section className="bg-[#FAFAF7] py-20 px-5 sm:px-8 md:px-20 md:py-32">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-16">

      {/* Chairman */}
      <div className="flex w-full max-w-[348px] flex-col gap-4">
        
        <img
          src="/images/aboutUs/section3/Icon.png"
          alt="quotation"
          className="h-6 w-[34px]"
        />

        <h2 className="text-[28px] font-semibold text-[#1A1A1A] sm:text-[32px]">
          Guided by Experience, Driven by Innovation.
        </h2>

        <p className="text-[16px] italic leading-relaxed text-[#4A4A4A] sm:text-[18px]">
          "Our commitment to the land is mirrored in our commitment to the
          farmers. We don't just sell seeds; we cultivate long-term prosperity
          through unwavering reliability."
        </p>

        <div className="flex flex-col border-t border-[#E5E5E5] pt-4">
          <span className="text-[14px] font-bold text-[#1A1A1A]">
            Abdul Salam
          </span>

          <p className="text-[12px] font-bold text-[#4A4A4A]">
            Chairman, Wafa Seeds
          </p>
        </div>
      </div>


      {/* Members */}
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        {member.map((item, index) => {
          return (
            <div
              className="w-full"
              key={index}
            >
              <div className="w-full max-w-[352px] rounded-xl border-4 border-[#F5821F] p-0.5">
                <img
                  src={item.image}
                  alt="member"
                  className="h-auto max-h-[425px] w-full rounded-xl object-cover"
                />
              </div>

              <span className="mt-2 block text-[21px] font-semibold text-[#1A1A1A] sm:text-[24px]">
                {item.name}
              </span>

              <p className="text-[15px] text-[#F5821F] sm:text-[16px]">
                {item.position}
              </p>
            </div>
          )
        })}
      </div>

    </div>
  </section>


  {/* Guarantee Section */}
  <section className="bg-[#FAFAF7] py-20 px-5 sm:px-8 md:px-20 md:py-32">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:gap-12">

      <div className="text-center text-[28px] font-bold sm:text-[32px]">
        <h2>The Wafa Guarantee</h2>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {stats.map((item, index) => {
          return (
            <div
              className="flex rounded-xl border border-[#E5E5E54D] p-5 sm:p-6"
              key={index}
            >
              <div className="flex flex-col">
                <span className="text-[42px] font-bold text-[#1E9E4A] sm:text-[48px] md:text-[56px]">
                  {item.number}
                </span>

                <span className="text-[13px] font-semibold text-[#4A4A4A] sm:text-[14px]">
                  {item.name}
                </span>
              </div>
            </div>
          )
        })}
      </div>


      {/* Certifications */}
      <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
        {certification.map((item, index) => (
          <div
            className="flex items-center gap-2 border-r-0 border-[#E5E5E5] pr-0 sm:border-r-4 sm:pr-8 sm:last:border-r-0"
            key={index}
          >
            <img
              src={item.icon}
              alt="icon"
              className="shrink-0"
            />

            <p className="text-[13px] font-bold text-[#4A4A4A] sm:text-[14px]">
              {item.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
</main>
  )
}

export default AboutUs
