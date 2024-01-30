import Image from 'next/image';
import Man from '../../../../public/man-with-sunglasses.png'
export default function WhoWeAre() {
  return (
    <section className="bg-gray-100">
      <div className="container items-center px-5 py-8 mx-auto lg:px-24">
        <div className="flex flex-wrap mb-12 text-left">
          <div className="w-full mx-auto lg:w-1/3">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-center text-black sm:text-4xl title-font">
            We are nomadies
            </h2>
            <p className="mb-4  text-center leading-relaxed text-gray-600">
            A diverse group of remote and digital workers including software engineers, freelancers, designers, creatives & influencers, writers, product, growth & sales specialists, operators, investors, and founders united with a common mission of building the home for digital talents.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 lg:w-1/3">
            <div className="h-full p-8 bg-white rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 mb-4 text-gray-400"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M637.518 0H337.518c-42.638 0-77.236 34.598-77.236 77.236v820.564l-82.4-82.4c-9.998-9.998-26.206-9.998-36.205 0-9.998 9.998-9.998 26.206 0 36.205l120.803 120.803c9.998 9.998 26.206 9.998 36.205 0l120.803-120.803c9.998-9.998 9.998-26.206 0-36.205-9.997-9.997-26.206-9.997-36.204 0l-82.4 82.4V77.236c0-42.638-34.598-77.236-77.236-77.236zm-300 900.036h600V128.236h-600v772.8z" />
              </svg>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
              <a className="inline-flex items-center">
                <Image
                  alt="testimonial"
                  src={Man}
                  className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                />
                <span className="flex flex-col flex-grow pl-4">
                  <span className="font-medium text-gray-900 title-font">
                    Alper Kamu
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <div className="h-full p-8 bg-white rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 mb-4 text-gray-400"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M637.518 0H337.518c-42.638 0-77.236 34.598-77.236 77.236v820.564l-82.4-82.4c-9.998-9.998-26.206-9.998-36.205 0-9.998 9.998-9.998 26.206 0 36.205l120.803 120.803c9.998 9.998 26.206 9.998 36.205 0l120.803-120.803c9.998-9.998 9.998-26.206 0-36.205-9.997-9.997-26.206-9.997-36.204 0l-82.4 82.4V77.236c0-42.638-34.598-77.236-77.236-77.236zm-300 900.036h600V128.236h-600v772.8z" />
              </svg>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
              <a className="inline-flex items-center">
                <Image
                  alt="testimonial"
                  src={Man}
                  className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                />
                <span className="flex flex-col flex-grow pl-4">
                  <span className="font-medium text-gray-900 title-font">
                    Alper Kamu
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <div className="h-full p-8 bg-white rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 mb-4 text-gray-400"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M637.518 0H337.518c-42.638 0-77.236 34.598-77.236 77.236v820.564l-82.4-82.4c-9.998-9.998-26.206-9.998-36.205 0-9.998 9.998-9.998 26.206 0 36.205l120.803 120.803c9.998 9.998 26.206 9.998 36.205 0l120.803-120.803c9.998-9.998 9.998-26.206 0-36.205-9.997-9.997-26.206-9.997-36.204 0l-82.4 82.4V77.236c0-42.638-34.598-77.236-77.236-77.236zm-300 900.036h600V128.236h-600v772.8z" />
              </svg>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
              <a className="inline-flex items-center">
                <Image
                  alt="testimonial"
                  src={Man}
                  className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                />
                <span className="flex flex-col flex-grow pl-4">
                  <span className="font-medium text-gray-900 title-font">
                    Alper Kamu
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <div className="h-full p-8 bg-white rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 mb-4 text-gray-400"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M637.518 0H337.518c-42.638 0-77.236 34.598-77.236 77.236v820.564l-82.4-82.4c-9.998-9.998-26.206-9.998-36.205 0-9.998 9.998-9.998 26.206 0 36.205l120.803 120.803c9.998 9.998 26.206 9.998 36.205 0l120.803-120.803c9.998-9.998 9.998-26.206 0-36.205-9.997-9.997-26.206-9.997-36.204 0l-82.4 82.4V77.236c0-42.638-34.598-77.236-77.236-77.236zm-300 900.036h600V128.236h-600v772.8z" />
              </svg>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
              <a className="inline-flex items-center">
                <Image
                  alt="testimonial"
                  src={Man}
                  className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                />
                <span className="flex flex-col flex-grow pl-4">
                  <span className="font-medium text-gray-900 title-font">
                    Holdy Dark
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    DESIGNER
                  </span>
                </span>
              </a>
            </div>
          </div>
          {/* cta button */}
          <div className="flex justify-center w-full pt-8 mt-8 border-t border-gray-200">
          <button style={{padding: 10, border:'1px solid black', backgroundColor: 'black',borderRadius: 40, width: '20%' , color: 'white'}}>Become a nomadai today</button>

             </div>
        </div>
      </div>
    </section>
  );
}