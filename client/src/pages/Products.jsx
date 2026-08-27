import React from 'react'
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
      <section className='py-32 bg-[#FAFAF7]'>
        <div className="px-20 flex flex-col gap-16 max-w-[1280px] mx-auto">
          <div className="flex flex-col text-center items-center gap-4">
            <h2 className='text-[32px] font-semibold text-[#1A1A1A]'>Our Ginning Pipeline</h2>
            <p className='text-[18px] text-[#3E4A3E] max-w-[672px]'>A seamless, technologically advanced process designed to extract maximum value from your raw cotton while preserving fiber integrity.</p>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 ">
              {services.map((item,index)=>{
                return(
                  <div className="rounded-2xl w-full broder bg-white border-[#DEE5DA66] flex flex-col gap-2 p-6 items-center" key={index}>
                    <div className="size-20 rounded-full flex justify-center items-center bg-[#E9F0E5]">
                      <img src={item.icon} alt="icon"/>
                    </div>
                    <h5 className='text-[14px] font-bold text-[#1A1A1A]'>{item.name}</h5>
                    <p className='text-[16px] text-[#3E4A3E] text-center'>{item.describe}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      <section className=' relative bg-[#1E9E4A] h-[678px]'>
            <img src="/images/products/section5/bg.png" alt="" className=' w-full h-[678px]'/>
          <div className="px-56 py-32 relative">
              <div className="max-w-[840px] right-1 absolute mx-auto bg-[#F5FBF0] z-10">
                <div className="bg-[#F5821F] w-[336px] p-10 text-white">
                  <h2 className='text-[32px] font-semibold mb-4'>Partner With Us</h2>
                  <p className='text-[16px] text-white/90 mb-8'>Looking for bulk seed supply or industrial ginning contracts? Reach out for customized pricing and logistics solutions.</p>
                  {partner.map((item,index)=>{
                    return(
                  <div className="flex flex-col gap-4" key={index}>

                    <div className="flex gap-3" >
                      <div className="">
                        <img src={item.icon} alt="icon" />
                      </div>
                      <p className='text-[16px] text-white font-medium'>{item.describe}</p>
                    </div>
                    
                  </div>

                    )
                  })}
                </div>
                <div className=""></div>
              </div>
          </div>
      </section>
    </main>
  )
}

export default Products
