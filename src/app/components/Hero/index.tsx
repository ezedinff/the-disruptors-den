import { IconArrowRight, IconBrandLinkedin } from "@tabler/icons-react";
export default function Hero() {
  return (
    <section className="bg-[#F0F0E6] py-8 dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mb-24">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Home to entrepreneurs and aspiring ones
          </h1>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Connect online and in-person, find opportunities, learn, collaborate
            and grow with a community of people just like you.
          </p>
          <a
            href="https://www.linkedin.com/company/disruptorsden/"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Join Us
            <IconBrandLinkedin
              size={18}
              stroke={1.8}
              className=" items-center ml-2"
            />
          </a>
          <a
            href="#events"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Events
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/images/tddd.png"
            className="bg-transparent rounded-md"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
}
