"use client";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Box, Center, Flex, Text } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import tenageG from "../../../public/images/tenage.png";
import man from "../../../public/images/man.png";
import selam from "../../../public/images/selam.png";
import amanuel from "../../../public/images/amanuel.png";
import Image from "next/image";
export default function WhoWeAre() {
  return (
    <section className="bg-[#F0F0E6]">
      <Box className=" px-5 py-8 mx-auto lg:px-24">
        <Box className="mb-12 ">
          <Box className=" mx-auto lg:w-1/2">
            <Text className="mb-4 text-3xl font-semibold tracking-tight text-center text-black sm:text-4xl">
              We are
              <span className="text-[#184235] relative inline-block pl-2">
                disruptors
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#184235] animate-pulse"></span>
              </span>
            </Text>
            <Text className="mb-4 text-center font-medium text-md">
              A diverse group of remote and digital workers including software
              engineers, freelancers, designers, creatives & influencers,
              writers, product, growth & sales specialists, operators,
              investors, and founders united with a common mission of building
              the home for digital talents.
            </Text>
          </Box>
        </Box>
        <Carousel
          withIndicators
          withControls
          controlsOffset={20}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          loop
          className="lg:w-1/2 mx-auto items-center"
        >
          <Carousel.Slide>
            <Box className="flex flex-col m-3 items-center text-center text-black  bg-white rounded-xl " >
              <Image src={selam} alt="Meron Tessema" className="rounded-t-xl" />
              <Box className="mt-1.5 text-lg font-semibold">Selam Terefe</Box>
              <Text className=" text-sm">CEO, Fidel Tutorials</Text>
              <Box className="flex mb-4 px-5 mt-2 text-xs items-center text-zinc-400">
                <IconMapPin size={12} />
                <Text>Adama</Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col m-3 items-center text-center text-black  bg-white rounded-xl ">
              <Image src={man} alt="Meron Tessema" className="rounded-t-xl" />
              <Box className="mt-1.5 text-lg font-semibold">
                Abenazzar B. Tadesse
              </Box>
              <Text className=" text-sm">Aspiring Enterpreneur</Text>
              <Box className="flex mb-4 px-5 mt-2 text-xs items-center text-zinc-400">
                <IconMapPin size={12} />
                <Text>Mekele</Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col m-3 items-center text-center text-black  bg-white rounded-xl ">
              <Image
                src={tenageG}
                alt="Meron Tessema"
                className="rounded-t-xl"
              />
              <Box className="mt-1.5 text-lg font-semibold">Meron Tessema</Box>
              <Text className=" text-sm">Student</Text>
              <Box className="flex mb-4 px-5 mt-2 text-xs items-center text-zinc-400">
                <IconMapPin size={12} />
                <Text>China</Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col m-3 items-center text-center text-black  bg-white rounded-xl ">
              <Image
                src={amanuel}
                alt="Meron Tessema"
                className="rounded-t-xl"
              />
              <Box className="mt-1.5 text-lg font-semibold">
                Ammanuel Tessema
              </Box>
              <Text className=" text-sm">Software Engineer</Text>
              <Box className="flex mb-4 px-5 mt-2 text-xs items-center text-zinc-400">
                <IconMapPin size={12} />
                <Text>Jimma</Text>
              </Box>
            </Box>
          </Carousel.Slide>
        </Carousel>

        {/* cta button */}
        <Box className="flex justify-center w-full pt-8 mt-8 border-gray-200">
          <button
            className="px-8 py-3 lg:font-semibold text-white bg-black rounded-full"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/disruptorsden/",
                "_blank"
              );
            }}
            formTarget="_blank"
          >
            Become a disruptor today
          </button>
        </Box>
      </Box>
    </section>
  );
}
