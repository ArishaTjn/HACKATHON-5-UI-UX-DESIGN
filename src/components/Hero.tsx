
import Image from "next/image"
function Hero  ()  {
  return (
    
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
    <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <section className="max-w-frame px-4">
        <h2 className ="text-4xl lg:text-[50px] lg:leading-[50px] mb-5 lg:mb-8 pl-8">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        {/*left side*/}
        <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <div className="relative">
  <Image
    src="/images/Rectangle 2.png" 
    alt="Models" width={600} height={500}
    className=" justify-items-start"/>
</div>
            
        </section>
        </div>
        </header>
        
  )

        {/*right side*/}
        <div>
            <Image src={"/Rectangle 2.png"} width={1940}
             height={633} alt="Heroimage" className="mt-5"></Image>
        </div>
      
    
  
}

export default Hero