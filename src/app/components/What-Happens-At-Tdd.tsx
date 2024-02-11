import Image from "next/image";
import GroupSvg from '../../../public/svg/group.svg';
import GroupTips from "../../../public/svg/group-trips.svg";
import CityHangout from "../../../public/svg/city-hangouts.svg";
import Opportunities from "../../../public/svg/oppotunities.svg";
import VirtualNet from "../../../public/svg/virtualnet.svg";
import PersonalGrowth from "../../../public/svg/personal-growth.svg";
import { Box, Text } from "@mantine/core";

export default function WhatHappensAtNomadi() {
  return (
    <section className="text-gray-600 mt-28">
      <Box className="items-center text-center mx-auto">
        <Text className="text-3xl font-semibold mb-8">
          What happens at
          <span className="text-[#184235] pl-2">
            The Disrupters Den
          </span>
        </Text>
      </Box>
      <Box className="container px-5 py-24 mx-auto">
        <Box className="flex flex-wrap -m-4">
          <Box className="p-4 lg:w-1/3">
            <Box className="px-8 pb-24 rounded-lg overflow-hidden text-center ">
              {/*bg-gray-50*/}
              <Image
                src={GroupSvg}
                alt="Group"
                layout="intrinsic"
                className=" w-12 h-12 text-gray-400 mb-4 mx-auto"
              />
              <Text className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Masterclass
              </Text>
              <p className="mb-3">
                Learn from the best in the industry. Our masterclasses are
                taught by industry experts who have been in the game for years.
              </p>
            </Box>
          </Box>
          <Box className="p-4 lg:w-1/3">
            <Box className="  px-8  pb-24 rounded-lg overflow-hidden text-center ">
              <Image
                src={GroupTips}
                layout="intrinsic"
                alt="Group"
                className=" w-12 h-12 text-gray-400 mb-4 mx-auto"
              />
              <Text className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Group Trips
              </Text>
              <p className=" mb-3">
                Travel the world with us. We host group trips to different
                cities around the world. We take care of the logistics, you just
                have to show up.
              </p>
            </Box>
          </Box>
          <Box className="p-4 lg:w-1/3">
            <Box className="  px-8  pb-24 rounded-lg overflow-hidden text-center ">
              <Image
                src={CityHangout}
                layout="intrinsic"
                alt="Group"
                className=" w-12 h-12 text-gray-400 mb-4 mx-auto"
              />
              <Text className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                City Hangouts and Mixers
              </Text>
              <p className=" mb-3">
                Meet other digital nomads in your city. We host monthly hangouts
                and mixers in different cities around the world.
              </p>
            </Box>
          </Box>
          <Box className="p-4 lg:w-1/3">
            <Box className="  px-8  pb-24 rounded-lg overflow-hidden text-center ">
              <Image
                src={Opportunities}
                layout="intrinsic"
                alt="Group"
                className=" w-12 h-12 text-gray-400 mb-4 mx-auto"
              />
              <h1 className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Opportunities & Resources
              </h1>
              <p className=" mb-3">
                Find opportunities and resources to help you grow your business.
                We have a list of opportunities and resources that will help you
                grow your business.
              </p>
            </Box>
          </Box>
          <Box className="p-4 lg:w-1/3">
            <Box className="  px-8  pb-24 rounded-lg overflow-hidden text-center ">
              <Image
                src={VirtualNet}
                alt="Group"
                layout="intrinsic"
                className=" w-12 h-12 text-gray-400 mb-4 mx-auto"
              />
              <h1 className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Virtual Networking
              </h1>
              <p className=" mb-3">
                Meet other digital nomads from around the world. We host virtual
                networking events every month.
              </p>
            </Box>
          </Box>
          <Box className="p-4 lg:w-1/3">
            <Box className="  px-8  pb-24 rounded-lg overflow-hidden text-center ">
              <Image
                src={PersonalGrowth}
                layout="intrinsic"
                alt="Group"
                className=" w-12 h-12 text-gray-400 mb-4 mx-auto"
              />
              <h1 className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Personal Growth
              </h1>
              <p className=" mb-3">
                Learn how to grow your business. We host monthly workshops to
                help you grow your business.
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
