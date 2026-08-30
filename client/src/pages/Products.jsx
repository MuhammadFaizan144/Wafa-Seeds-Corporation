import { Leaf, Bug, Ruler, Droplets, Sprout, Sun, ArrowRight } from "lucide-react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const tabContent = {

  Overview: {
    title: "Revolutionizing Cotton Yields",
    description:
      "Wafa BT-100 represents the pinnacle of modern seed technology, combining extraordinary yield potential with robust resistance to common pests. Developed specifically for diverse regional climates, it ensures farmers can maximize their output while minimizing chemical interventions.",
    features: [
      {
        icon: Leaf,
        title: "Exceptional Fiber Length",
        description:
          "Produces long, strong fibers highly sought after by textile manufacturers.",
      },
      {
        icon: Bug,
        title: "Enhanced Pest Resistance",
        description:
          "Built-in tolerance against bollworms reduces pesticide reliance by up to 40%.",
      },
    ],
  },
  Specifications: {
    title: "Premium Seed Specifications",
    description:
      "Wafa BT-100 has been developed with carefully selected genetic traits to deliver consistent performance, excellent fiber quality, and strong field adaptability.",
    features: [
      {
        icon: Ruler,
        title: "High Yield Potential",
        description:
          "Designed to deliver excellent yield performance under suitable growing conditions.",
      },
      {
        icon: Leaf,
        title: "Superior Fiber Quality",
        description:
          "Produces high-quality cotton fibers with excellent strength and desirable length.",
      },
      {
        icon: Sprout,
        title: "Strong Plant Structure",
        description:
          "Healthy plant architecture supports better boll development and harvesting.",
      },
    ],
  },
  Agronomy: {
    title: "Optimized Agronomic Performance",
    description:
      "Wafa BT-100 is designed to perform across diverse agricultural conditions when supported by proper crop management, irrigation, and nutrient practices.",
    features: [
      {
        icon: Droplets,
        title: "Efficient Water Management",
        description:
          "Performs effectively with properly managed irrigation throughout the crop cycle.",
      },
      {
        icon: Sun,
        title: "Climate Adaptability",
        description:
          "Developed to maintain strong performance across a range of regional growing conditions.",
      },
      {
        icon: Sprout,
        title: "Balanced Crop Growth",
        description:
          "Supports healthy vegetative growth while maintaining strong reproductive development.",
      },
    ],
  },
};
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
const categories = [
    "All",
    "Wheat",
    "Cotton",
    "Mustard",
    "Mung",
    "Sesame",
    "Corn",
    "Paddy",
    "Ginning Services",
  ];
  const products = [
    {
      id: 1,
      category: "Cotton",
      name: "Wafa BT-100",
      description:
        "High-yield BT cotton variety with excellent pest resistance and fiber quality.",
      image: "/images/products/section1or2/image1.png",
      meta: "Maturity: 140 Days",
    },
    {
      id: 2,
      category: "Wheat",
      name: "Wafa Gold-24",
      description:
        "Premium rust-resistant wheat seed designed for maximum output per acre in diverse soil conditions.",
      image: "/images/products/section1or2/image2.png",
      meta: "Germination: 95%",
    },
    {
      id: 3,
      category: "Cotton",
      name: "Wafa Star-X",
      description:
        "Drought-tolerant cotton variety ideal for arid regions, ensuring consistent yields.",
      image: "/images/products/section1or2/image3.png",
      meta: "Maturity: 135 Days",
    },
    {
      id: 4,
      category: "Mustard",
      name: "Wafa Mustard-12",
      description:
        "High-performing mustard variety with excellent oil content and strong disease resistance.",
      image: "/images/products/section1or2/image1.png",
      meta: "Maturity: 125 Days",
    },
    {
      id: 5,
      category: "Mung",
      name: "Wafa Mung-8",
      description:
        "Fast-growing mung bean variety with excellent grain quality and reliable production.",
      image: "/images/products/section1or2/image1.png",
      meta: "Maturity: 70 Days",
    },
    {
      id: 6,
      category: "Sesame",
      name: "Wafa Sesame-10",
      description:
        "Premium sesame seed variety selected for high yield and excellent oil recovery.",
      image: "/images/products/section1or2/image1.png",
      meta: "Maturity: 110 Days",
    },
    {
      id: 7,
      category: "Corn",
      name: "Wafa Corn-20",
      description:
        "High-yield corn hybrid with strong stalks and excellent grain production.",
      image: "/images/products/section1or2/image1.png",
      meta: "Maturity: 120 Days",
    },
    {
      id: 8,
      category: "Paddy",
      name: "Wafa Paddy-15",
      description:
        "Premium paddy variety offering excellent grain quality and dependable field performance.",
      image: "/images/products/section1or2/image1.png",
      meta: "Maturity: 130 Days",
    },
  ];
const tabs=Object.keys(tabContent)
const Products = () => {
  const[activeTab,setActiveTab]=useState("Overview")
  const[activeCategory,setActiveCategory]=useState("All")
  const filteredProducts=activeCategory==="All" ?products:products.filter((product)=>product.category===activeCategory)
  const content=tabContent[activeTab];
  return (
    <main>
      <div className="flex items-center gap-2 max-w-[1280px] mx-auto px-10 py-4">
              <span className="text-[14px] text-[#4A4A4A]">
                Home {" "} 
              </span>
              <span className=' text-[#4A4A4A]'>
      
                <FaChevronRight className='text-[10px]'/>
              </span>
                <span className="text-[#F5821F] text-[14px] font-bold"> Products</span>
            </div>
      <section className="bg-[#FFF4E5] py-32">
        <div className="max-w-[1280px] mx-auto px-20 flex flex-col gap-6 items-center text-center">
          <h2 className="lg:text-[56px] text-[40px] font-bold text-[#1A1A1A] max-w-[896px]">Our Complete <span className="text-[#1E9E4A]">Seed & Ginning</span> Product Line</h2>
          <p className="lg:text-[18px] text-[16px] text-[#3E4A3E] max-w-[672px]">Cultivating prosperity through high-yield genetics and state-of-the-art processing. Explore our range of premium agricultural products.</p>
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
      <section className="bg-[#FAFAF7] py-32 px-20">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {filteredProducts.map((products)=>{
          return(
            <div className="" key={products.id}>
              <div className="relative rounded-xl">
                  <img src={products.image} alt="" className='w-full h-[256px] rounded-xl' />
                  <div className="bg-[#FFF4E5] text-[#F5821F] top-3 left-3 absolute rounded-2xl py-0.5 px-2 text-center text-[12px]">{products.category}</div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h4 className='text-lg font-semibold leading-tight text-[#171D17] sm:text-xl md:text-[24px]'>{products.name}</h4>
                  </div>
                  <div className="">
                    <p className='text-[16px] leading-6 text-[#3E4A3E] sm:text-[14px]'>{products.description}</p>
                  </div>
                  <div className="flex justify-between">
                    <span className='text-[12px] leading-6 text-[#3E4A3E] sm:text-[10px]'>{products.meta}</span>
                    <Link className='text-[#F5821F] flex justify-center gap-2 items-center text-[14px] font-bold'>Views Details <ArrowRight size={14} strokeWidth={3}/></Link>
                  </div>
                </div>
            </div>
          )
        })}
        </div>
      </section>
      <section className="bg-[#FFF4E5] lg:py-32 py-24">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:px-20 sm:px-14 px-6 gap-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="lg:text-[32px] text-[26px] font-semibold text-[#1A1A1A]">Featured Highlight: Wafa BT-100</h2>
            
              <p className="lg:text-[18px] text-[16px] text-[#3E4A3E] max-w-[672px]">Discover the superior genetics and performance metrics of our flagship cotton seed variety.</p>
            
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="">
              <img src="/images/products/section3/cotton.png" alt="" className="rounded-2xl w-full"/>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex border-b border-[#DCDDD6]">
                {tabs.map((tab)=>{
                  const isActive=activeTab===tab
                  return(
                    <button aria-selected={isActive} onClick={()=>setActiveTab(tab)} className={`relative flex-1 pb-4 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-[#119447]"
                        : "text-[#4A4A43] hover:text-[#119447]"
                    }`}>
                      {tab}
                      {/* Active underline */}

                    <span

                      className={`absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#119447] transition-all duration-300 ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0"
                      }`}
                    />
                    </button>
                  )
                })}
              </div>
              <div className="flex flex-col gap-4" key={activeTab}>
                <h3 className="lg:text-[24px] text-[20px] font-semibold text-[#1A1A1A]">{content.title}</h3>
                <p className="text-[12px] leading-6 text-[#3E4A3E] md:text-[16px]">{content.description}</p>
               <div className="mt-7 space-y-5">
                  {content.features.map((feature)=>{
                    const Icon=feature.icon
                    return(
                      <div className="flex gap-3" key={feature}>
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E1F5E6]">
                          <Icon
                          size={15}
                          strokeWidth={2}
                          className="text-[#13A24D]"/>
                        </div>
                        <div className="">
                        <div className="text-[16px] font-medium text-[#242424]">{feature.title}</div>
                        <div className="mt-1 text-[16px] leading-6 text-[#4D514A]">{feature.description}</div>

                        </div>
                      </div>
                    )
                  })}
               </div>
              </div>
            </div>
          </div>
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
