import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function Footer() {
  return (
    <div className="bg-black flex flex-col items-center pt-8 pb-5 px-16 max-md:px-5">
      <div className="flex w-full max-w-[1200px] flex-col items-stretch max-md:max-w-full">
        <div className="w-[802px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-10">
                <Image
                  src="/Nomadi.png"
                  alt="nomadi"
                  className="aspect-[4] object-contain object-center w-[115px] max-w-full"
                  layout="intrinsic"
                  width={500}
                  height={500}
                />
                <div className="text-white text-xs font-medium leading-3 whitespace-nowrap mt-1.5">
                  where digital talents connect
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow items-stretch justify-between gap-5 text-sm text-white font-medium max-md:mt-10">
                <div className="items-stretch flex flex-col">
                  <div className="text-lg font-semibold leading-7">
                    Features
                  </div>
                  <Link className="mt-2.5" href="#about">About Us</Link>
                  <Link className="whitespace-nowrap mt-1.5" href="#events">Events (Masterclass & Mixes)</Link>
                   <Link className="mt-1.5" href="#trips">Trips</Link>
                  <Link className="mt-1.5" href="#media">Media (Podcast & Blogs)</Link>
                  <Link className="mt-1.5" href="#join">Join community</Link>
                </div>
                <div className="items-stretch flex flex-col whitespace-nowrap self-start">
                  <div className="text-lg font-semibold leading-7">Company</div>
                  <Link className="mt-2.5" href="#kacha">Kacha Labs</Link>
                  <Link className="mt-1.5" href="#privacy">Privacy policy</Link>
                  <Link className="mt-1.5" href="#terms">Terms of Use</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-stretch justify-between gap-5 mt-6 px-px max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-sm font-medium leading-7 grow shrink basis-auto mt-5 self-start">
          &copy; All Rights Reserved.
            <Link href="#" className="font-bold"> Kacha Labs</Link> 2023
          </div>
          <div className="items-stretch flex gap-3">
            <a
              href="https://www.example.com/link1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="nomadi"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd83719d690a4e158a5869d85b69b14bc7e68548b83a575aab93b64263183b26?"
                className="aspect-square object-contain object-center w-[41px] shrink-0"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://www.example.com/link2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="nomadi"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf44cf33343fde76736b9de6c7377ebc2b1f50249e3411f29974a8e63f115bf?"
                className="aspect-square object-contain object-center w-[41px] shrink-0 cursor-pointer"
                width={500}
                height={500}
                layout="intrinsic"
              />
            </a>
            <a
              href="https://www.example.com/link3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="nomadi"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c413dd393ab69a807f8abb5828ffd70bf7e03645a2df3032c45c6b1fd2bf918b?"
                className="aspect-square object-contain object-center w-[41px] shrink-0"
                width={500}
                height={500}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
