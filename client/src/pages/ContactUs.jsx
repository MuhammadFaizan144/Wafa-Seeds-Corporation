
import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
const contactCard=[
  {icon:"/images/contactUs/contactCard/icon1.png",heading:"Address",description:"Bahar Industries, Manthar Road, Sadiqabad, Pakistan"},
  {icon:"/images/contactUs/contactCard/icon2.png",heading:"Phone",description:"0300-8679098"},
  {icon:"/images/contactUs/contactCard/icon3.png",heading:"Mail",description:"wafaseeds@gmail.com"},
  {icon:"/images/contactUs/contactCard/icon4.png",heading:"Hours",description:"Mon - Sat:9:00 AM - 6:00 PM"},
]
const ContactUs = () => {
  return (
    <main className="bg-[#F5FBF0E5]">
       <div className="flex items-center gap-2 max-w-[1280px] mx-auto px-10 py-4">
          <span className="text-[14px] text-[#4A4A4A]">
            Home {" "} 
          </span>
          <span className=' text-[#4A4A4A]'>
            <FaChevronRight className='text-[10px]'/>
          </span>
          <span className="text-[#964900] text-[14px] font-bold"> Contact Us</span>
        </div>
        <section className="py-32 px-20">
            <div className="flex flex-col items-center max-w-[1280px] text-center gap-8">
              <h2 className="text-[46px] leading-10 text-[#006B2D] font-semibold sm:text-[50px] lg:text-[56px]">Let's Grow Together</h2>
              <p className="text-[14px] max-w-[660px] leading-6 text-[#3E4A3E] sm:text-[16px] lg:text-[18px]">We are always ready to assist you. Reach out to us for any inquiries regarding our premium agricultural products, dealership opportunities, or technical support.</p>
            </div>
        </section>
        <section className="bg-[#EFF6EB] lg:py-32 py-28 lg:px-20 md:px-14 px-8">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 ">
            {contactCard.map((item,index)=>{
              return(
                <div key={index} className="flex flex-col shadow-lg shadow-[#1A1A1A0F] gap-2 p-6 rounded-xl bg-[#F5FBF0] ">
                  <div className="size-12 rounded-full bg-[#00873A] flex items-center justify-center"><img src={item.icon} alt="" /></div>
                  <h2 className="text-[16px] leading-6 text-[#006B2D] font-bold sm:text-[20px] lg:text-[24px]">{item.heading}</h2>
                  <p className="text-[12px] leading-6 text-[#3E4A3E] sm:text-[14px] lg:text-[16px]">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>
        <section className="bg-[#E3EADF] py-32 ">
            <div className="px-20 max-w-[1280px] mx-auto">
              <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col items-center text-center gap-4">
                  <h2 className="text-[28px] leading-6 text-[#006B2D] font-semibold sm:text-[30px] lg:text-[32px]">Find Us</h2>
                  <p className="text-[12px] leading-6 text-[#3E4A3E] sm:text-[14px] lg:text-[16px]">Visit our headquarters in Sadiqabad.</p>
                </div>
                <div className="w-full h-[400px] md:h-[450px] rounded-[18px] overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.1646029493795!2d70.14774969999999!3d28.2630253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393769000bda9e2d%3A0x91bd4f4b9064f137!2sWafa%20Seed%20Corporation!5e0!3m2!1sen!2s!4v1788102630394!5m2!1sen!2s" className="w-full h-full border-0" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
        </section>
        <section className="bg-[#F5FBF0] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 rounded-2xl bg-gradient-to-r from-[#F5821F] to-[#1E9E4A] px-5 py-10 text-center sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">

          <h2 className="max-w-4xl lg:text-[32px] md:text-[30px] text-[28px] font-bold leading-tight text-white">
            Ready to boost your harvest?
          </h2>

          <p className="max-w-2xl leading-6 text-white/90 lg:text-[18px] md:text-[16px] text-[14px]">
            Get in touch with our experts today to find the perfect seed varieties
            and agricultural solutions for your specific needs.
          </p>

          <Link
            to="/contact"
            className="mt-2 rounded-lg flex items-center gap-2 bg-white px-7 py-3 text-[12px] font-bold text-[#006B2D] transition-colors hover:bg-gray-100 sm:px-10 sm:text-base"
          >
            Apply Now <ArrowRight size={24} strokeWidth={3}/>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ContactUs
