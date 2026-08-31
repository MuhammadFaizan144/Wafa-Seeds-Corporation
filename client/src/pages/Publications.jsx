import { FaChevronRight } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io";
import {
  IoCalculatorOutline,
  IoCalendarOutline,
  IoHeadsetOutline,
  IoArrowForward,
} from "react-icons/io5";
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
const Publications = () => {
  return (
    <main className="bg-[#F5FBF0E5]">
      <div className="flex items-center gap-2 max-w-[1280px] mx-auto px-10 py-4">
              <span className="text-[14px] text-[#4A4A4A]">
                Home
              </span>
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
