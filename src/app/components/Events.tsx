import Image from "next/image";
import Tdd from "../../../public/images/tddd.png";
import masterClass from "../../../public/images/masterclass.png";
import { Box, Button, Text } from "@mantine/core";
import {IconArrowRight} from '@tabler/icons-react'
export default function Events() {
  return (
    <section className="bg-[#F0F0E6]" id="events">
      <Box className="container items-center px-5 py-8 mx-auto lg:px-24">
        <Box className="flex flex-wrap mb-12 mt-16   text-left">
          <Box className="w-full mx-auto lg:w-1/3">
            <Text className="mb-4 text-[#184235] text-3xl font-extrabold tracking-tight sm:text-4xl text-center title-font">
              Upcoming 
              <span className="text-[#184235] relative inline-block pl-2">
              Events
            <span className="absolute bottom-0 left-2 w-full h-0.5 bg-[#184235] animate-pulse"></span>
          </span>
              
            </Text>
          </Box>
        </Box>
        <Box className="flex flex-wrap ">
          <Box className="w-full p-5 lg:w-1/3">
            <Box className=" bg-white rounded-lg shadow-lg">
              <Image
                src={Tdd}
                alt="testimonial"
                className="w-full p-0 rounded-t-lg"
              />
              <Box className="flex flex-col items-center p-5 text-left">
                <Text className=" text-2xl font-extrabold tracking-tight text-black">
                Weekly Coffee Meetup
                </Text>
                <Text className="lg:w-80 items-center mx-auto text-base leading-relaxed text-gray-600">
                Personal Branding and Leadership Development
                </Text>
                <Text className="lg:w-80   mx-auto text-base leading-relaxed font-bold">
                Jan 27, 2024 at ALXEthiopia, Haya Hulet Hub
                </Text>
                <Text className="text-center mx-auto text-base leading-relaxed font-bold">
                Starting from 2PM (8LT) 
                </Text>
                <Text className="text-4xl font-bold leading-relaxed text-gray-600">
                  Free
                </Text>

                <Button rightSection={<IconArrowRight size={18} stroke={1.6}/>} className="inline-flex items-center  bg-black rounded-full text-white">
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="w-full p-5 lg:w-1/3">
            <Box className=" bg-white rounded-lg shadow-lg">
              <Image
                src={masterClass}
                alt="testimonial"
                className="w-full p-0 rounded-t-lg"
              />
              <Box className="flex flex-col items-center p-5 text-left">
                <Text className=" text-2xl font-extrabold tracking-tight text-black">
                Weekly Coffee Meetup
                </Text>
                <Text className="lg:w-80 items-center mx-auto text-base leading-relaxed text-gray-600">
                Personal Branding and Leadership Development
                </Text>
                <Text className="lg:w-80   mx-auto text-base leading-relaxed font-bold">
                Jan 27, 2024 at ALXEthiopia, Haya Hulet Hub
                </Text>
                <Text className="text-center mx-auto text-base leading-relaxed font-bold">
                Starting from 2PM (8LT) 
                </Text>
                <Text className="text-4xl font-bold leading-relaxed text-gray-600">
                  Free
                </Text>

                <Button rightSection={<IconArrowRight size={18} stroke={1.6}/>} className="inline-flex items-center  bg-black rounded-full text-white">
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="w-full p-5 lg:w-1/3">
            <Box className=" bg-white rounded-lg shadow-lg">
              <Image
                src={Tdd}
                alt="testimonial"
                className="w-full p-0 rounded-t-lg"
              />
              <Box className="flex flex-col items-center p-5 text-left">
                <Text className=" text-2xl font-extrabold tracking-tight text-black">
                Weekly Coffee Meetup
                </Text>
                <Text className="lg:w-80 items-center mx-auto text-base leading-relaxed text-gray-600">
                Personal Branding and Leadership Development
                </Text>
                <Text className="lg:w-80   mx-auto text-base leading-relaxed font-bold">
                Jan 27, 2024 at ALXEthiopia, Haya Hulet Hub
                </Text>
                <Text className="text-center mx-auto text-base leading-relaxed font-bold">
                Starting from 2PM (8LT) 
                </Text>
                <h1 className="text-4xl font-bold leading-relaxed text-gray-600">
                  Free
                </h1>

                <Button rightSection={<IconArrowRight size={18} stroke={1.6}/>} className="inline-flex items-center  bg-black rounded-full text-white">
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
          
        </Box>
      </Box>
    </section>
  );
}
