import HeroSvg from "../../../../public/Hero section Image.svg"
import Image from "next/image";
import underline from "../../../../public/underline.svg"
import vector from "../../../../public/Vector1.svg"

export default function Hero() {
  return (
    <section className="shadow-lime-100 text-black py-16 relativce">
      <div className="container mx-auto text-center flex flex-col md:flex-row">
       <div className="w-full md:w-1/2">
        <Image src={HeroSvg} alt="Herosection" />
       </div>
       <div className="w-full md:w-1/2 lg:mt-12">
       <div className="flex flex-col justify-start items-end gap-10">
       <div className="relative">
  <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center md:text-right lg:text-right font-bold leading-relaxed" style={{ fontFamily: "Darker Grotesque" }}>
    <span>The choice community for </span>
    <span className="relative inline-block pb-2">
      <span className="text-green-900">entrepreneurs</span>
      <Image src={underline} alt="underline" layout="fill" className="absolute mt-16" />
    </span>
    <span> <br/>and aspiring ones</span>
  </div>
</div>

<div className="text-center md:text-right lg:text-right text-sm sm:text-md md:text-lg font-light leading-relaxed">Connect online and in-person, find opportunities, learn, collaborate and grow with a community of people just like you.</div>
 
<button className="bg-black p-2 sm:p-3 text-sm sm:text-base md:text-lg text-white rounded-full"> Join Community</button>
</div>
</div>
</div>
<div>
  <Image className="absolute right-[-12px] sm:right-6 md:right-[-35px] top-14 sm:top-20 md:top-14 object-cover" src={vector} alt="Herosection" />
</div>
    </section>
  );
};