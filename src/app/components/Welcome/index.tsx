export default function Welcome() {
  return (
    <section className=" items-center py-16">
      <div className="container items-center text-center mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Welcome to Nomadi</h2>
        <p className=" text-lg text-center">
          Watch and introduction video of who we are at Nomadi, and the
          community we are building for digital workers
        </p>
      </div>

      <div className="container mx-auto mt-16 max-w-screen-md rounded-md">
        <iframe
          className="rounded-3xl"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/iGtE4ua9o00"
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
