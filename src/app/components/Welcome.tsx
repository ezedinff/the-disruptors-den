"use client";
export default function Welcome() {
  return (
    <section className=" bg-[#F0F0E6] items-center py-16">
      <div className="container items-center text-center mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          Welcome to
          <span className="text-[#184235] relative inline-block pl-2">
            The Disrupters Den
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#184235] animate-underline"></span>
          </span>
        </h2>
        <p className=" text-lg text-center">
          Watch and introduction video of who we are at TDD, and the community
          we are building for entrepreneurs and aspiring ones.
        </p>
      </div>

      <div className="container mx-auto mt-16 max-w-screen-md ">
        <iframe
          className="rounded-3xl"
          width="100%"
          height="350"
            // src="https://www.youtube.com/embed/iGtE4ua9o00?controls=0&autoplay=1&showinfo=0&mute=1"
            src="https://www.youtube.com/embed/j1p2PbfNk0c?controls=0&autoplay=1&showinfo=0&mute=1" 
          title="Nomadi Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      {/* Logo list */}
      <div className="container flex flex-row justify-center mx-auto mt-16 max-w-screen-md">
        <div className="w-1/2 p-4">
          <img
            className="object-contain h-10"
            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
            alt="Tuple"
          />
        </div>
        <div className="w-1/2 p-4">
          <img
            className="object-contain h-10"
            src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
            alt="Mirage"
          />
        </div>
        {/* one for alx log */}
        <div className="w-1/2 p-4 items-center justify-center">
          <h1>Logo</h1>
        </div>
        <div className="w-1/2 p-4">
          <img
            className="object-contain h-10"
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
            alt="StaticKit"
          />
        </div>
        <div className="w-1/2 p-4">
          <img
            className="object-contain h-10"
            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
            alt="Transistor"
          />
        </div>
        <div className="w-1/2 p-4">
          <img
            className="object-contain h-10"
            src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
            alt="Workcation"
          />
        </div>
        <div className="w-1/2 p-4">
          <img
            className="object-contain h-10"
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
            alt="StaticKit"
          />
        </div>
      </div>
    </section>
  );
}
