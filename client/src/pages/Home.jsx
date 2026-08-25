import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { AiOutlineDown } from "react-icons/ai";
import { useRef } from 'react'
const slides = [
  {
    image: '/images/home/hero/heroSlider1.png',
    title: (
      <>
        Cultivating <span className="text-orange-500">Trust,</span>
        <br />
        Growing Prosperity
      </>
    ),
    description:
      "Pakistan's trusted source for premium wheat, cotton, mustard, mung, sesame, corn & paddy seeds — plus expert cotton ginning services.",
  },
  {
    image: '/images/home/hero/heroSlider2.png',
    title: (
      <>
        Growing <span className="text-orange-500">Quality,</span>
        <br />
        Harvesting Success
      </>
    ),
    description:
      'Premium agricultural seeds developed to help farmers achieve stronger crops and better yields.',
  },
  {
    image: '/images/home/hero/heroSlider3.png',
    title: (
      <>
        Seeds for a <span className="text-orange-500">Better</span>
        <br />
        Tomorrow
      </>
    ),
    description:
      'Reliable agricultural solutions built around quality, innovation and the success of Pakistani farmers.',
  },
]
const featuredVarities = [
  {
    image: "/images/home/section03/wheat.png",
    type: "wheat",
    name: "Wafa Gold 21",
    attribute: "High Yield",
    description: "Rust-resistant variety with excellent grain weight and adaptability to late sowing.",
    time: "Maturity: 140 Days"
  },
  {
    image: "/images/home/section03/cotton.png",
    type: "Cotton",
    name: "Wafa Premium BT",
    attribute: "Pest Resistant",
    description: "Advanced BT cotton with superior boll retention and exceptional fiber length.",
    time: "Maturity: 140 Days"
  },
  {
    image: "/images/home/section03/green.png",
    type: "Fodder",
    name: "GreenMax Super",
    attribute: "Fast Growth",
    description: "Multi-cut sorghum hybrid providing highly nutritious, palatable green fodder.",
    time: "Maturity: 140 Days"
  },
  {
    image: "/images/home/section03/green.png",
    type: "Fodder",
    name: "GreenMax Super",
    attribute: "Fast Growth",
    description: "Multi-cut sorghum hybrid providing highly nutritious, palatable green fodder.",
    time: "Maturity: 140 Days"
  },
  {
    image: "/images/home/section03/green.png",
    type: "Fodder",
    name: "GreenMax Super",
    attribute: "Fast Growth",
    description: "Multi-cut sorghum hybrid providing highly nutritious, palatable green fodder.",
    time: "Maturity: 140 Days"
  },
]
const WhatWeDealIn = [
  {
    icon: '/images/home/section02/Icon.png',
    title: 'Certified Seeds',
    description: "High-purity, disease resistant seeds rigorously tested for optimal germination and yield potential."
  }, {
    icon: '/images/home/section02/Icon1.png',
    title: 'Ginning Services',
    description: "State-of-the-art ginning processes ensuring clean, high-grade cotton fiber separation and processing."
  }, {
    icon: '/images/home/section02/Icon2.png',
    title: "Hybrid Varieties",
    description: "Advanced hybrid seeds developed for superior adaptability to diverse climatic conditions and soil types."
  }, {
    icon: '/images/home/section02/Icon3.png',
    title: "Fodder Solutions",
    description: "Nutritious, high-yielding fodder seeds designed to support robust livestock health and productivity."
  }
]
const stats = [
  {
    number: "16+",
    title: "YEARS OF TRUST"
  }, {
    number: "1K+",
    title: "HAPPY FARMERS"
  }, {
    number: "10+",
    title: "SEED VARIETIES"
  }, {
    number: "100%",
    title: "CERTIFIED QUALITY"
  }
]
const statofart = [
  { detail: "Clean and efficient fiber separation" },
  { detail: "High-capacity processing capabilities" },
  { detail: "Strict quality control measures" }
]
const whyChooseUs = [
  { icons: "/images/home/section06/Icon1.png", title: "Guaranteed Quality", description: "Every batch undergoes rigorous testing to ensure it meets our strict standards for germination and purity." },
  { icons: "/images/home/section06/Icon2.png", title: "Expert Guidance", description: "Our team of agronomists provides comprehensive support to help you maximize your crop yield." },
  { icons: "/images/home/section06/Icon3.png", title: "Timely Delivery", description: "We ensure your seeds reach you right on time for the optimal sowing season." }
]
const testimonial = [
  { message: "Since switching to Wafa Gold-21, my wheat yield has increased by 15%. The support from their team hasbeen invaluable.", writer: "- Muhammad Ali, Rahim Yar Khan" },
  { message: "The quality of their BT cotton seed is exceptional. We've seen significantly less pest damage and higher boll retention.", writer: "- Tariq Mehmood, Multan" },
]
const faqs = [

  {

    question: "Where can I purchase Wafa Seeds?",

    answer:

      "You can purchase Wafa Seeds through our authorized dealers and distributors. Contact our team to find the nearest supplier.",

  },

  {

    question: "Do you offer bulk discounts for large farms?",

    answer:

      "Yes, we offer special pricing and bulk discounts for large farms and agricultural businesses. Contact us for more information.",

  },

  {

    question: "What crops do you provide seeds for?",

    answer:

      "We provide high-quality seeds for a variety of crops, including wheat, cotton, corn, rice, and mustard.",

  },

];
const Home = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const swiperRef = useRef(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <main>
      {/* hero */}
      <section className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative min-h-[680px] w-full bg-cover bg-center bg-no-repeat md:min-h-[680px]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1280px] items-center px-6 py-20 md:px-16">
                  <div className="max-w-[650px]">
                    <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-7 max-w-[620px] text-base leading-7 text-white/75 sm:text-lg">
                      {slide.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">
                      <a
                        href="/products"
                        className="rounded-lg bg-orange-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-orange-600"
                      >
                        Explore Our Products
                      </a>

                      <a
                        href="/ginning"
                        className="rounded-lg border border-white/40 bg-black/20 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10"
                      >
                        Visit Ginning Unit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* what we deal in */}
      <section className="flex flex-col gap-12 py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FFF4E5]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            {/* Heading */}
            <div className="flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:gap-4">
              <h2 className="text-2xl font-semibold leading-tight text-[#171D17] sm:text-3xl md:text-[32px]">
                What We Deal In
              </h2>

              <p className="text-sm leading-6 text-[#3E4A3E] sm:text-base">
                Comprehensive agricultural solutions driving yield and purity across
                all stages of farming.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-0 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {WhatWeDealIn.map((item, index) => (
              <div
                key={index}
                className="flex min-h-[320px] flex-col justify-between rounded-xl border border-[#BDCABA4D] bg-[#F5FBF0] p-6 sm:min-h-[340px] sm:p-7 lg:min-h-[360px] lg:p-8"
              >
                {/* Icon */}
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#00873A1A]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="size-[21px]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-xl font-bold leading-tight text-[#171D17] sm:text-[22px] lg:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-[#3E4A3E] sm:text-base">
                  {item.description}
                </p>

                {/* Link */}
                <Link
                  to="/learn-more"
                  className="flex items-center gap-2 mt-6 w-fit text-sm font-semibold text-[#00873A] transition hover:underline"
                >
                  Learn More <LuArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Varities */}
      <section className='bg-[#FFF4E5] px-4 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-32'>
        <div className="mx-auto max-w-[1280px] ">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <h2 className="text-2xl font-semibold leading-tight text-[#171D17] sm:text-3xl md:text-[32px]">

                Featured Varieties

              </h2>

              <p className="mt-2 text-sm leading-6 text-[#3E4A3E] sm:text-base md:text-lg">

                Discover our top-performing seed selections for the current season.

              </p>

            </div>

            {/* Navigation */}

            <div className="flex gap-2">

              <button

                type="button"

                className="featured-prev flex size-12 shrink-0 items-center justify-center rounded-full border border-[#BDCABA]"

              >

                <LuArrowLeft />

              </button>

              <button

                type="button"

                className="featured-next flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1E9E4A] text-white"

              >

                <LuArrowRight />

              </button>

            </div>

          </div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1} loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, }}
            spaceBetween={24}

            navigation={{
              prevEl: ".featured-prev",
              nextEl: ".featured-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-10 mt-8"
          >

            {featuredVarities.map((item, index) => (

              <SwiperSlide key={index} className='!h-auto overflow-hidden bg-white rounded-xl '>
                <div className="relative">
                  <img src={item.image} alt="" className='w-full h-[256px] rounded-xl' />
                  <div className="bg-[#FFF4E5] text-[#F5821F] top-3 left-3 absolute rounded-2xl py-0.5 px-2 text-center text-[12px]">{item.type}</div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className='text-lg font-semibold leading-tight text-[#171D17] sm:text-xl md:text-[24px]'>{item.name}</h4>
                    <div className="bg-[#FFF4E5] rounded-md py-0.5 px-2 text-center text-[#F5821F] justify-around text-[12px]">{item.attribute}</div>
                  </div>
                  <div className="">
                    <p className='text-[16px] leading-6 text-[#3E4A3E] sm:text-[14px]'>{item.description}</p>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-[12px] leading-6 text-[#3E4A3E] sm:text-[10px]'>{item.time}</span>
                    <Link className='text-[#1E9E4A] text-[16px]'>Views Specs</Link>
                  </div>
                </div>
              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>
      {/* stats */}
      <section className='w-full bg-[#1E9E4A] py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto px-4">
          {stats.map((item, index) => {
            return (
              <div key={index} className='flex flex-col items-center justify-center gap-2'>
                <h3 className='text-[56px] font-bold text-white'>{item.number}</h3>
                <p className='text-[14px] font-semibold text-white/80'>{item.title}</p>
              </div>
            )
          })}
        </div>
      </section>
      {/* State-of-the-Art Cotton Ginning */}
      <section className='mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-20 lg:py-32'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">

            <img src="/images/home/section05/Container.png" alt="" className='w-full' />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold leading-tight text-[#171D17] sm:text-3xl md:text-[32px]">State-of-the-Art Cotton Ginning</h2>
            <p className="text-[16px] leading-6 text-[#3E4A3E] sm:text-[14px]">
              Our modern ginning facility is equipped with advanced machinery to ensure the highest quality processing of raw cotton. We pride ourselves on maintaining the integrity of the fiber while maximizing output efficiency.
            </p>
            <ul>
              {statofart.map((item, index) => {
                return (
                  <li key={index} className='flex gap-2 items-center'>
                    <img src="/images/home/section05/tick.png" alt="" className='size-4' />
                    <p className="text-[14px] leading-6 text-[#3E4A3E] gap-3 py-2">
                      {item.detail}
                    </p>
                  </li>
                )
              })}
            </ul>
            <Link to="/learn-more" className="flex items-center gap-2 text-[16px] font-semibold text-[#F5821F] transition hover:underline">
              Learn more about our ginning process
              <LuArrowRight />
            </Link>
          </div>
        </div>
      </section>
      {/* why choose us */}
      <section className=' bg-[#EFF6EB] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-20 lg:py-32'>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12">
          <div className="text-center">
            <h2 className='text-[#171D17] text-[32px] font-semibold'>Why Choose Wafa Seeds</h2>
          </div>
          <div className="grid md:grid-cols-3  grid-cols-1 gap-8 ">
            {whyChooseUs.map((item, index) => {
              return (
                <div className="bg-[#F5FBF0] border border-[#BDCABA33] p-8 rounded-2xl gap-3 " key={index}>

                  <div className="bg-[#1E9E4A1A] rounded-lg size-12 flex justify-center items-center">
                    <img src={item.icons} alt="icon" />
                  </div>
                  <h2 className='pt-3 text-[#171D17] text-[24px] font-semibold'>{item.title}</h2>
                  <p className='text-[#3E4A3E] text-[16px]'>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* what farmer says */}
      <section className='bg-[#F5FBF0] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-20 lg:py-32'>
        <div className="mx-auto max-w-[1280px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 items-center">
            <h2 className='text-[#171D17] text-[32px] font-semibold'>What Our Farmers Say</h2>
            <p className='text-[#3E4A3E] text-[16px]'>Hear from the people who grow with Wafa Seeds.</p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
            {testimonial.map((item, index) => {
              return (
                <div className="p-8 rounded-2xl gap-4 border-l-4 border-[#1E9E4A] " key={index}>
                  <p className='text-[#3E4A3E] text-[18px]'>{item.message}</p>
                  <p className='text-[#171D17] text-[18px] font-semibold'>{item.writer}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto flex w-full max-w-[770px] flex-col items-center">

          {/* Heading */}
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-2xl font-semibold leading-tight text-[#171D17] sm:text-3xl md:text-[32px]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ */}
          <div className="flex w-full flex-col gap-3.5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="w-full overflow-hidden rounded-xl bg-[#F5FBF0] text-[#171D17] transition-shadow duration-300"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="text-sm leading-6 sm:text-base">
                      {item.question}
                    </span>

                    <span
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      <AiOutlineDown className="text-base sm:text-lg" />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out  ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden bg-white pt-4 border-2  border-[#f2f6ef] rounded-xl">
                      <p className=" px-5 pb-5 text-sm leading-6 text-[#3E4A3E] sm:px-6 sm:pb-6 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* last section */}
      <section className="bg-[#F5FBF0] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 rounded-2xl bg-gradient-to-r from-[#F5821F] to-[#1E9E4A] px-5 py-10 text-center sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">

          <h2 className="max-w-4xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
            Ready to boost your harvest?
          </h2>

          <p className="max-w-2xl text-sm leading-6 text-white/90 sm:text-base md:text-lg">
            Get in touch with our experts today to find the perfect seed varieties
            and agricultural solutions for your specific needs.
          </p>

          <Link
            to="/contact"
            className="mt-2 rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#1E9E4A] transition-colors hover:bg-gray-100 sm:px-10 sm:text-base"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

    </main>
  )
}

export default Home