import { FaChevronRight } from "react-icons/fa"
import { IoIosSearch} from "react-icons/io";
import { useState } from "react";
import {
  IoCalculatorOutline,
  IoCalendarOutline,
  IoHeadsetOutline,
  IoArrowForward,
} from "react-icons/io5";
import { Link } from "react-router-dom";
const resources = [
    {
      icon: <IoCalculatorOutline />,
      title: "Seed Rate Calculator",
      description:
        "Determine the exact seed quantity required based on your acreage and crop type.",
      link: "Use Calculator",
      iconBg: "bg-[#E8F3ED]",
      iconColor: "text-[#00813D]",
      linkColor: "text-[#00813D]",
    },
    {
      icon: <IoCalendarOutline />,
      title: "Crop Calendars",
      description:
        "Interactive sowing and harvesting schedules tailored to your specific climatic zone.",
      link: "View Calendars",
      iconBg: "bg-[#F7EEE5]",
      iconColor: "text-[#B55A00]",
      linkColor: "text-[#B55A00]",
    },
    {
      icon: <IoHeadsetOutline />,
      title: "Expert Consultation",
      description:
        "Book a 1-on-1 session with our agronomists for personalized crop advice.",
      link: "Book Session",
      iconBg: "bg-[#E8F3ED]",
      iconColor: "text-[#00813D]",
      linkColor: "text-[#00813D]",
    },
  ];
  const recentResource = [
    {
      category: "Crop Management",
      date: "March 12, 2024",
      readTime: "15 min read",
      title: "Optimizing Nitrogen Application for High-Yield",
      description:
        "Strategic fertilizer application timelines based on recent soil health studies across the Punjab region.",
      image: "/images/publications/Wheatfield.png",
    },
    {
      category: "Market Insights",
      date: "February 28, 2024",
      readTime: "8 min read",
      title: "2024 Seed Market Trends & Forecasts",
      description:
        "An analysis of shifting global seed demands and how local farmers can capitalize on upcoming export...",
      image: "/images/publications/Wheatfield.png",
    },
    {
      category: "Research Reports",
      date: "February 15, 2024",
      readTime: "25 min read",
      title: "Pest Resistance in New Cotton Varietals",
      description:
        "A decade-long study on the efficacy of Wafa Seeds' proprietary cotton blends against common regional pests.",
      image: "/images/publications/Wheatfield.png",
    },
  ];
const Publications = () => {
  const [activeTab, setActiveTab] = useState("All Publications");

  const tabs = [
    "All Publications",
    "Sowing Guides",
    "Research Reports",
    "Crop Management",
    "Market Insights",
  ];
  return (
    <main className="bg-[#F5FBF0E5]">
      <div className="flex items-center gap-2 max-w-[1280px] mx-auto px-10 py-4">
              <Link to="/" className="text-[14px] text-[#4A4A4A]">
                Home
              </Link>
              <span className=' text-[#4A4A4A]'>
                  
                <FaChevronRight className='text-[10px]'/>
              </span>
              <span className="text-[#F5821F] text-[14px] font-bold"> Products</span>
            </div>
      <section className="py-24 lg:px-20 md:px-16 sm:px-12 px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-left max-w-[768px] flex flex-col gap-6">
            <h2 className="lg:text-[56px] text-[40px] font-bold text-[#1A1A1A]">Farmer Guides, Research & Seasonal Advisories</h2>
          <p className="lg:text-[18px] text-[16px] text-[#3E4A3E] ">Access our comprehensive library of agricultural resources. Empowering farmers with modern techniques, crop management strategies, and industry-leading research for optimal yield.</p>
          <div className="max-w-[576px] rounded-md bg-white flex items-center px-[16px] py-[16px] justify-between ">
            <IoIosSearch className="text-[20px] flex-shrink-0 text-[#DEE5DA]"/>
          <input type="text" placeholder=" Search publication, guides, crops.." className="w-full ml-1 mr-2 text-[16px] outline-none text-[#6B7280]"/>
          <button className="bg-[#964900] text-white px-4 py-2 rounded-md">Search</button>
          </div>
          
          </div>
        </div>
      </section>
      {/* section 2 */}

    <section className=" px-6 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Category Tabs */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max border-b border-[#D1D5DB]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 pb-3 text-[14px] font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "text-[#B85C00]"
                    : "text-[#253126] hover:text-[#B85C00]"
                }`}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#B85C00]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Publication */}
        <div className="relative mt-12 h-[520px] overflow-hidden rounded-[16px]">

          {/* Background Image */}
          <img
            src="/images/publications/ModernFarming.png"
            alt="Kharif crop sowing"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/5" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 lg:p-12">

            {/* Badge */}
            <span className="inline-flex rounded-full bg-[#009447] px-4 py-1.5 text-[12px] font-medium text-white">
              Latest Release
            </span>

            {/* Title */}
            <h2 className="mt-5 max-w-[700px] text-[30px] font-semibold leading-tight text-white sm:text-[34px] lg:text-[36px]">
              2024 Kharif Crop Sowing Guide
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[680px] text-[16px] leading-7 text-white/85 sm:text-[17px]">
              A complete comprehensive manual for the upcoming Kharif season.
              Covering soil preparation, optimal seed varieties, and modern
              irrigation techniques to maximize your yield potential.
            </p>

            {/* Button */}
            <button className="mt-6 flex items-center gap-2 rounded-md bg-white/25 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/35">
              Read Full Guide
              <IoArrowForward className="text-[17px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* section 3 */}
      <section className="bg-[#F3F9EF] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-[1120px]">

        {/* Heading */}
        <h2 className="text-[30px] font-semibold leading-tight text-[#18211B] sm:text-[34px]">
          Recent Resources
        </h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {recentResource.map((resource, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[16px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="relative h-[192px] overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-full w-full object-cover"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-[#007C3B] shadow-sm">
                  {resource.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex min-h-[262px] flex-col px-6 py-6">

                {/* Date */}
                <p className="text-[13px] text-[#D5DED3]">
                  {resource.date} • {resource.readTime}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-[24px] font-semibold leading-[1.3] text-[#18211B]">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[16px] leading-6 text-[#465148]">
                  {resource.description}
                </p>

                {/* Link */}
                <button className="mt-auto flex w-fit items-center gap-1 pt-5 text-[14px] font-semibold text-[#A95100] transition hover:text-[#7D3D00]">
                  View Report
                  <IoArrowForward className="text-[16px]" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-[7px] border border-[#788178] px-6 py-3.5 text-[14px] font-medium tracking-wide text-[#18211B] transition hover:bg-[#18211B] hover:text-white">
            Load More Publications
          </button>
        </div>
      </div>
    </section>
    {/* section 4 */}
      <section className="py-24 lg:px-20 md:px-16 sm:px-12 px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="lg:text-[32px] text-[30px] font-bold text-[#1A1A1A]">Essential Resources</h2>
            <p className="lg:text-[18px] text-[16px] text-[#3E4A3E] max-w-[672px] ">Quick access to our most requested tools and calculators to help you manage your farm efficiently.</p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {resources.map((resources)=>{
              return(
                <div className="bg-white rounded-2xl flex flex-col text-center items-center p-6" key={resources}>
                  <div className={`size-[64px] rounded-full flex mb-[24px] justify-center items-center ${resources.iconBg} ${resources.iconColor}`}><span className="text-[27px]">{resources.icon}</span></div>
                  <h3 className="lg:text-[24px] text-[20px] font-bold mb-[16px] text-[#1A1A1A]">{resources.title}</h3>
                  <p className="lg:text-[16px] text-[14px] text-[#3E4A3E] mb-[24px]">{resources.description}</p>
                  <button className={`flex items-center  ${resources.linkColor}`}>{resources.link} <IoArrowForward className="text-[16px]" /></button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-24 lg:px-20 md:px-16 sm:px-12 px-10 bg-[#E3EADF]">
        <div className="max-w-[768px] mx-auto flex flex-col items-center text-center gap-12">
            <span className="text-[#964900] px-4 py-2 text-[12px] bg-white border rounded-full">Stay Updated</span>
            <h2 className="lg:text-[36px] text-[32px] font-bold text-[#1A1A1A]text-center">Get Agricultural Insights Delivered</h2>
            <p className="lg:text-[18px] text-[16px] text-[#3E4A3E] ">Join over 10,000 farmers receiving our weekly digest on crop strategies, market trends, and new seed varietals.</p>
            <div className="w-full max-w-[576px] flex md:flex-row flex-col items-center px-[16px] gap-4
             py-[16px] justify-between ">
              <input type="text" placeholder="Enter your email address" className="rounded-md w-full flex-1 px-8 py-4 text-[14px] outline-none text-[#6B7280]"/>
              <button className="bg-[#F5821F] shrink-0 max-md:w-full text-[14px] text-white px-8 py-4 rounded-md">Subscribe Now</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Publications
