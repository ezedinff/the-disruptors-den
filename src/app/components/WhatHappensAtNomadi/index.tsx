import Image from 'next/image';
import GroupSvg from '../../../../public/Group1.svg';
import GroupTips from '../../../../public/GroupTips.svg';
import CityHangout from '../../../../public/CityHangouts.svg';
import Opportunities from '../../../../public/Oppotunities.svg';
import VirtualNet from '../../../../public/VirtualNet.svg';
import PersonalGrowth from '../../../../public/PersonalGrowth.svg';
export default function WhatHappensAtNomadi() {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* rounded svg  */}
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4 mx-auto"
                    viewBox="0 0 975.036 975.036"
                >
                    <path d="M937.036 292.518c0-10.946-8.875-19.82-19.82-19.82h-19.82V19.82C897.396 8.875 888.521 0 877.575 0H97.575C86.629 0 77.754 8.875 77.754 19.82v252.878H57.934c-10.946 0-19.82 8.875-19.82 19.82v19.82h919.926v-19.82z" />
                    <path d="M957.036 975.036H17.575c-10.946 0-19.82-8.875-19.82-19.82V390.518c0-10.946 8.875-19.82 19.82-19.82h939.461c10.946 0 19.82 8.875 19.82 19.82v564.698c0 10.945-8.874 19.82-19.82 19.82zM97.575 390.518v564.698h839.461V390.518H97.575z" />
                </svg> */}
                    <Image 
                    src={GroupSvg}
                    alt="Group"
                    layout='intrinsic'
                    className='block w-12 h-12 text-gray-400 mb-4 mx-auto'
                   /> 
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Masterclass
                </h1>
                <p className="leading-relaxed mb-3">
                    Learn from the best in the industry. Our masterclasses are
                    taught by industry experts who have been in the game for years.
                </p>
                </div>
            </div>
            <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                </h2> */}
                <Image 
                    src={GroupTips}
                    layout='intrinsic'
                    alt="Group"
                    className='block w-12 h-12 text-gray-400 mb-4 mx-auto'
                   /> 
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Group Trips
                </h1>
                <p className="leading-relaxed mb-3">
                    Travel the world with us. We host group trips to different
                    cities around the world. We take care of the logistics, you
                    just have to show up.
                </p>

                </div>
            </div>
            <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <Image 
                    src={CityHangout}
                    layout='intrinsic'
                    alt="Group"
                    className='block w-12 h-12 text-gray-400 mb-4 mx-auto'
                   /> 
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    City Hangouts and Mixers
                </h1>
                <p className="leading-relaxed mb-3">
                    Meet other digital nomads in your city. We host monthly
                    hangouts and mixers in different cities around the world.
                </p>
                </div>
            </div>
            <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                <Image 
                    src={Opportunities}
                    layout='intrinsic'
                    alt="Group"
                    className='block w-12 h-12 text-gray-400 mb-4 mx-auto'
                   />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Opportunities & Resources
                </h1>
                <p className="leading-relaxed mb-3">
                    Find opportunities and resources to help you grow your
                    business. We have a list of opportunities and resources
                    that will help you grow your business.
                </p>

                </div>
            </div>
            <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <Image 
                    src={VirtualNet}
                    alt="Group"
                    layout='intrinsic'
                    className='block w-12 h-12 text-gray-400 mb-4 mx-auto'
                   />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Virtual Networking
                </h1>
                <p className="leading-relaxed mb-3">
                    Meet other digital nomads from around the world. We host
                    virtual networking events every month.
                </p>

                </div>
            </div>
            <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <Image
                    src={PersonalGrowth}
                    layout='intrinsic'
                    alt="Group"
                    className='block w-12 h-12 text-gray-400 mb-4 mx-auto'
                   />
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Personal Growth
                </h1>
                <p className="leading-relaxed mb-3">
                    Learn how to grow your business. We host monthly workshops
                    to help you grow your business.
                </p>

                </div>
            </div>
            </div>
        </div>
        </section>
    );
};  