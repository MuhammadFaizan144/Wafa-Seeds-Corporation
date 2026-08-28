
const services=[
  {icon:"/images/products/section4/icon1.png",
    name:"1. RAW COTTON INTAKE",
    describe:"Automated weighbridges and initial quality sampling ensure accurate recording of raw cotton deliveries."
  },
  {icon:"/images/products/section4/icon2.png",
    name:"2. GINNING",
    describe:"High-speed saw gins separate the seed from the lint efficiently without damaging the fiber length."
  },
  {icon:"/images/products/section4/icon3.png",
    name:"3. LINT GRADING",
    describe:"Advanced optical sensorsclassify lint based on color, trash content, and fiber properties."
  },
  {icon:"/images/products/section4/icon4.png",
    name:"4. BULK DISPATCH",
    describe:"Lint is compressed into standard high-density bales, wrapped, tagged,and dispatched securely."
  },
]
const partner=[
  {icon:"/images/products/section5/icon1.png",describe:"Dedicated Account Managers"},
  {icon:"/images/products/section5/icon2.png",describe:"Nationwide Delivery"},
  {icon:"/images/products/section5/icon3.png",describe:"Certified Quality Assurance"},
]
const Products = () => {
  return (
    <main>
      <section className="bg-[#FFF4E5] lg:py-32 py-24">
        <div className="flex lg:flex-row flex-col lg:px-20 sm:px-14 px-6">
          <div className="">
            <h2 className="lg:text-[32px] text-[26px] font-semibold text-[#1A1A1A]">Featured Highlight: Wafa BT-100</h2>
            
              <p className="lg:text-[18px] text-[16px] text-[#3E4A3E] max-w-[672px]">Discover the superior genetics and performance metrics of our flagship cotton seed variety.</p>
            
          </div>
          <div className=""></div>
        </div>
      </section>
      <section className='lg:py-32 py-24 bg-[#FAFAF7]'>
        <div className="lg:px-20 sm:px-14 px-6  flex flex-col gap-16 max-w-[1280px] mx-auto">
          <div className="flex flex-col text-center items-center gap-4">
            <h2 className='lg:text-[32px] text-[26px] font-semibold text-[#1A1A1A]'>Our Ginning Pipeline</h2>
            <p className='lg:text-[18px] text-[16px] text-[#3E4A3E] max-w-[672px]'>A seamless, technologically advanced process designed to extract maximum value from your raw cotton while preserving fiber integrity.</p>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 ">
              {services.map((item,index)=>{
                return(
                  <div className="rounded-2xl w-full broder bg-white border-[#DEE5DA66] flex flex-col gap-2 p-6 items-center" key={index}>
                    <div className="size-20 rounded-full flex justify-center items-center bg-[#E9F0E5]">
                      <img src={item.icon} alt="icon"/>
                    </div>
                    <h5 className='lg:text-[14px] text-[12px] font-bold text-[#1A1A1A]'>{item.name}</h5>
                    <p className='lg:text-[16px] text-[14px] text-[#3E4A3E] text-center'>{item.describe}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      <section className="relative min-h-[678px] overflow-hidden bg-[#1E9E4A]">
          {/* Background */}
          <img
            src="/images/products/section5/bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Content */}
          <div className="relative mx-auto flex min-h-[678px] max-w-[1280px] items-center px-6 py-16 lg:px-10">
            <div className="ml-auto w-full max-w-[1050px] overflow-hidden rounded-[28px] bg-[#F5FBF0] shadow-xl">
              <div className="grid md:grid-cols-[336px_1fr]">
                {/* LEFT SIDE */}
                <div className="bg-[#F5821F] p-8 text-white lg:p-10">
                  <h2 className="mb-4 text-[32px] font-semibold leading-tight">
                    Partner With Us
                  </h2>
                  <p className="mb-8 text-[16px] leading-[1.6] text-white/90">
                    Looking for bulk seed supply or industrial ginning contracts?
                    Reach out for customized pricing and logistics solutions.
                  </p>
                  <div className="flex flex-col gap-6">
                    {partner.map((item, index) => (
                      <div
                        className="flex items-center gap-3"
                        key={index}
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                          <img
                            src={item.icon}
                            alt=""
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                        <p className="text-[16px] font-medium leading-[1.4] text-white">
                          {item.describe}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="p-8 lg:p-10">
                  <form className="space-y-6">
                    {/* First Row */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="text-[14px] font-medium text-[#3F4540]"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          className="h-[56px] w-full rounded-xl border border-[#CDD4CA] bg-white px-5 text-[16px] outline-none transition focus:border-[#1E9E4A] focus:ring-2 focus:ring-[#1E9E4A]/20 placeholder:text-[#8A909D]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="text-[14px] font-medium text-[#3F4540]"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="h-[56px] w-full rounded-xl border border-[#CDD4CA] bg-white px-5 text-[16px] outline-none transition focus:border-[#1E9E4A] focus:ring-2 focus:ring-[#1E9E4A]/20 placeholder:text-[#8A909D]"
                        />
                      </div>
                    </div>
                    {/* Second Row */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="product"
                          className="text-[14px] font-medium text-[#3F4540]"
                        >
                          Product Interest
                        </label>
                        <select
                          id="product"
                          defaultValue="cotton"
                          className="h-[56px] w-full rounded-xl border border-[#CDD4CA] bg-white px-5 text-[16px] text-[#333] outline-none transition focus:border-[#1E9E4A] focus:ring-2 focus:ring-[#1E9E4A]/20"
                        >
                          <option value="cotton">Cotton Seeds</option>
                          <option value="wheat">Wheat Seeds</option>
                          <option value="paddy">Paddy Seeds</option>
                          <option value="mustard">Mustard Seeds</option>
                          <option value="corn">Corn Seeds</option>
                          <option value="cotton-bale">Cotton Bale</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="volume"
                          className="text-[14px] font-medium text-[#3F4540]"
                        >
                          Estimated Volume
                        </label>
                        <input
                          id="volume"
                          type="text"
                          placeholder="e.g. 500 kg or 1000 bale"
                          className="h-[56px] w-full rounded-xl border border-[#CDD4CA] bg-white px-5 text-[16px] outline-none transition focus:border-[#1E9E4A] focus:ring-2 focus:ring-[#1E9E4A]/20 placeholder:text-[#8A909D]"
                        />
                      </div>
                    </div>
                    {/* Additional Requirements */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="requirements"
                        className="text-[14px] font-medium text-[#3F4540]"
                      >
                        Additional Requirements
                      </label>
                      <textarea
                        id="requirements"
                        rows={4}
                        placeholder="Tell us about your specific needs..."
                        className="w-full resize-none rounded-xl border border-[#CDD4CA] bg-white px-5 py-4 text-[16px] outline-none transition focus:border-[#1E9E4A] focus:ring-2 focus:ring-[#1E9E4A]/20 placeholder:text-[#8A909D]"
                      />
                    </div>
                    {/* Button */}
                    <button
                      type="submit"
                      className="h-[56px] w-full rounded-xl bg-[#1E9E4A] text-[16px] font-semibold text-white transition hover:bg-[#188C40] active:scale-[0.99]"
                    >
                      Request a Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Products
