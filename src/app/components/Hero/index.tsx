import HeroSvg from "../../../../public/svg/hero-section-img.svg";
import Image from "next/image";
import underline from "../../../../public/svg/underline.svg";
import vector from "../../../../public/svg/vector1.svg";

export default function Hero() {
  return (
    <section className="shadow-lime-100 text-black py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <Image src={HeroSvg} alt="Herosection" />
        </div>
        <div className="flex flex-col justify-start items-center md:items-end gap-10">
          <div className="relative">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center md:text-right lg:text-right font-bold leading-relaxed" style={{ fontFamily: "Darker Grotesque" }}>
              <span>The choice community for </span>
              <span className="relative inline-block pb-2">
                <span className="text-green-900">entrepreneurs</span>
                <Image src={underline} alt="underline" layout="fi ll" className="absolute top-[-12px]" />
              </span>
              <span> <br />and aspiring ones</span>
            </div>
          </div>
          <div className="text-center md:text-right lg:text-right text-sm sm:text-md md:text-lg font-light leading-relaxed">Connect online and in-person, find opportunities, learn, collaborate and grow with a community of people just like you.</div>
          <button className="bg-black p-2 sm:p-3 text-sm sm:text-base md:text-lg text-center md:text-right lg:text-right text-white rounded-full"> Join Community</button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image className="absolute right-0 sm:right-6 md:right-10 lg:right-19 top-14 sm:top-20 md:top-[-25px] object-contain w-auto h-auto" src={vector} alt="Herosection" />
      </div>
    </section>
  );
}