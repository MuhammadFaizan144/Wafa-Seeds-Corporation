import { useState } from "react"

import {
  FaShareAlt,
  FaRegHeart,
} from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom";
const categories=["All","Photos","Videos","Press"]
const photo=[
  {image:"/images/media/section2/cotton.png",type:"cotton"},
  {image:"/images/media/section2/cotton.png",type:"cotton"},
  {image:"/images/media/section2/cotton.png",type:"cotton"}
]
const video=[
  {image:"/images/media/section3/video.png",heading:"cotton",description:"Hello"},
  {image:"/images/media/section3/video.png",heading:"cotton",description:"Hello"},
  {image:"/images/media/section3/video.png",heading:"cotton",description:"Hello"},
]
const timelineData = [
  {
    date: (
      <>
        Oct 15,
        2024
      </>
    ),
    type: "Press Release",
    title: "Wafa Seeds Announces New Drought-Resistant Wheat",
    description:
      "Our latest breakthrough in agricultural science brings a new strain of wheat specifically engineered to thrive in arid climates, ensuring food security in changing environments.",
    link: "Read Full Story",
  },
  {
    date: (
      <>
        Sep 28,
        2024
      </>
    ),
    type: "Event",
    title: "Annual Farmers Convention 2024",
    description:
      "Join us in Lahore for the biggest gathering of agricultural innovators, featuring keynote speeches from our leading agronomists and live demonstrations of our new seed varieties.",
    link: "View Highlights",
  },
  {
    date: (
      <>
        Aug 12,
        2024
      </>
    ),
    type: "Award",
    title: "Excellence in Agricultural Innovation Award",
    description:
      "Wafa Seeds has been recognized by the National Agricultural Board for our continuous efforts in improving crop yields and sustainable farming practices.",
    link: "Read More",
  },
];

const socialPosts = [
  {
    image: "/images/media/section5/farmer.png",
    text: "Incredible results from this season's cotton harvest in the Punjab region. Our new hybrid...",
    icon: FaShareAlt,
  },
  {
    image: "/images/media/section5/farmer-wheat.png",
    text: "Hearing these success stories from our partner farmers makes all the R&D worth it. Empowering",
    icon: FaRegHeart,
  },
  {
    image: "/images/media/section5/field-2.png",
    text: "The future of farming is not just about doing more, it's about doing better. Precision agriculture is the key.",
    icon: FaShareAlt,
  },
  {
    image: "/images/media/section5/field.png",
    text: "Beautiful aerial view of our test fields. Geometry meeting nature for optimized resource...",
    icon: FaShareAlt,
  },
];
const Media = () => {
  const[activeCategory,setActiveCategory]=useState("All")
  return (
    <main>
      <div className="flex items-center gap-2 max-w-[1280px] mx-auto px-10 py-4">
        <Link to="/" className="text-[14px] text-[#4A4A4A]">
          Home
        </Link>
        <span className=' text-[#4A4A4A]'>
            
          <FaChevronRight className='text-[10px]'/>
        </span>
        <span className="text-[#F5821F] text-[14px] font-bold"> Products</span>
      </div>
      <section className="bg-[#fff] py-32 ">
        <div className="max-w-[1280px] mx-auto px-20 flex flex-col gap-6 items-center text-center">
          <h2 className="lg:text-[56px] text-[40px] font-bold text-[#1A1A1A] max-w-[896px]">See Wafa Seeds in Action</h2>
          <p className="lg:text-[18px] text-[16px] text-[#3E4A3E] max-w-[672px]">Explore our gallery of agricultural excellence, field demonstrations, and the latest news from the forefront of modern farming technology.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {categories.map((category)=>{
              const isActive=activeCategory===category
              return(
                <button className={`rounded-full border px-5 py-2 text-[13px] font-semibold transition-all duration-200 ${isActive?'border-[#F58220] bg-[#F58220] text-white':'border-[#D7D8D1] bg-white text-[#4A4A45] hover:border-[#1FA34A] hover:text-[#1FA34A]'}`} key={category} onClick={()=>setActiveCategory(category)}>
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-32 px-10 sm:px-12 md:px-16 lg:px-20 bg-[#FFF4E5]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
            <div className="">
              <h2 className="lg:text-[32px] text-[30px] font-bold text-[#1A1A1A]">Field Photography</h2>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {photo.map((item,index)=>{
                return(
                <div className=" w-full" key={index}>
                  <img src={item.image} alt={item.type} className="rounded-xl w-full h-[220px]"/>
                </div>)
              })}
            </div>
        </div>
      </section>
      <section className="py-32 px-10 sm:px-12 md:px-16 lg:px-20 bg-[#FAFAF7]">
        <div className=" max-w-[1280px] mx-auto flex flex-col gap-12">
          <h2 className="lg:text-[32px] text-[30px] font-bold text-[#1A1A1A]">Video Showcases</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {video.map((item,index)=>{
              return(
                <div className="" key={index}>
                  <div className="w-full h-[220px]">
                  <img src={item.image} alt="" className="rounded-xl w-full h-[220px]"/>

                  </div>
                  <h5 className="lg:text-[24px] text-[20px] font-semibold text-[#1A1A1A]">{item.heading} </h5>
                  <p className="lg:text-[16px] text-[14px] text-[#1A1A1A]/40">{item.description} </p>
                </div>
              )
            })}
              
          </div>
        </div>
      </section>
       <section className="bg-[#FFF4E5] py-24 lg:py-32 px-6 sm:px-10 lg:px-20">
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[36px] lg:text-[34px] font-bold text-[#1A1A1A] mb-12 lg:mb-14">
            Press & Events Timeline
          </h2>

          {/* Timeline */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#CDE4CC] hidden md:block" />

            <div className="flex flex-col gap-12 lg:gap-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-[145px_1fr] gap-5 md:gap-4"
              >

                {/* Date */}
                <div className="relative text-left md:text-right">
                  <span className="text-[14px] sm:text-[15px] leading-6 font-bold text-[#159447]">
                    {item.date}
                  </span>

                  {/* Timeline Dot */}
                  <span className="hidden md:block absolute -right-[10px] top-[8px] w-[8px] h-[8px] rounded-full bg-[#159447]" />
                </div>

                {/* Content Card */}
                <div className="bg-[#FFFFFF] rounded-[14px] border border-[#F0EEE9] px-6 sm:px-7 lg:px-6 py-6 sm:py-7 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

                  {/* Type */}
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium mb-4 ${
                      item.type === "Event"
                        ? "bg-[#E5F4E8] text-[#159447]"
                        : "bg-[#FFF0DF] text-[#F58220]"
                    }`}
                  >
                    {item.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] leading-8 font-bold text-[#1A1A1A] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[16px] leading-6 text-[#555555] max-w-[900px]">
                    {item.description}
                  </p>

                  {/* Link */}
                  <button className="mt-5 text-[14px] md:text-[16px] font-semibold text-[#1E9E4A] hover:text-[#0D7435] transition-colors">
                    {item.link} →
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#FFFFFF] py-24 lg:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div>
            <h2 className="text-[32px] sm:text-[36px] lg:text-[34px] leading-tight font-bold text-[#1A1A1A]">
              Connect With Us
            </h2>

            <p className="mt-2 text-[16px] text-[#4A4A4A]">
              Follow our journey on social media.
            </p>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 text-[#159447] font-bold text-[16px] hover:text-[#0D7435] transition-colors"
          >
            @wafaseeds

            <span className="text-[20px]">
              ↗
            </span>
          </a>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => {
            const Icon = post.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[12px] overflow-hidden border border-[#EEEEEE] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <div className="h-[192px] overflow-hidden">
                  <img
                    src={post.image}
                    alt="Wafa Seeds"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* User row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#159447] flex items-center justify-center text-white text-[12px] font-bold">
                        WS
                      </div>

                      <span className="text-[14px] font-semibold text-[#292929]">
                        Wafa Seeds
                      </span>
                    </div>

                    {/* Action */}
                    <button className="text-[#159447] text-[18px]">
                      <Icon />
                    </button>
                  </div>

                  {/* Text */}
                  <p className="mt-3 text-[14px] leading-5 text-[#555555]">
                    {post.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    </main>
  )
}

export default Media
