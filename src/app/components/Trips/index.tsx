import Image from "next/image";
import Man from "../../../../public/beach.png";
import event from "../../../../public/images/event.png";
// https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png

interface CardProps {
  title: string;
  venue: string;
  date: string;
  host: string;
  imageUrl: string;
}

interface CardSectionProps {
  cards: {
    title: string;
    venue: string;
    date: string;
    host: string;
    imageUrl: string;
  }[];
}

const Card: React.FC<CardProps> = ({ title, venue, date, host, imageUrl }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex">
    <img
      src={imageUrl}
      alt={title}
      className="w-24 max-h-fit object-cover rounded-lg mr-4"
    />
    <div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">
        <strong>Venue:</strong> {venue}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Date:</strong> {date}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Host:</strong> {host}
      </p>
    </div>
  </div>
);

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 p-4">
            <Card title={card.title} venue={card.venue} date={card.date} host={card.host} imageUrl={card.imageUrl}            />
          </div>
        ))}
      </div>
    </section>
  );
};

const UpcomingEvent: React.FC = () => {
  const cards = [
    {
      title: 'Community Welcome Event',
      venue: 'Twitter Space',
      date: 'March 28, 2023',
      host: 'Nomadi Team',
      imageUrl: 'https://media2.giphy.com/media/cnNLE8mJYwJb6aZ6LQ/giphy.gif'
    },
    {
      title: 'Another Community Event',
      venue: 'Zoom Meeting',
      date: 'April 10, 2023',
      host: 'Community Organizers',
      imageUrl: 'https://media.giphy.com/media/TH0H5O1fnEVRvTidKT/giphy.gif?cid=ecf05e47wmgt9bfb4mkj5zatfvnr9kizdjhrur5l3gevaa5h&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    {
      title: 'Third Community Event',
      venue: 'Discord Server',
      date: 'May 5, 2023',
      host: 'Event Hosts',
      imageUrl: 'https://media.giphy.com/media/wVhYn5jI6Cc9VtdMZD/giphy.gif?cid=790b7611y8jc1twqalkqtkc57aamz4jtchjkz3g6ekn90kwq&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    }
  ];

  return (
    <div className="container mx-auto">
      <CardSection cards={cards} />
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="bg-gray-100">
      <div className="container items-center px-5 py-8 mx-auto lg:px-24">
        {/* Upcoming Trip */}
        <div className="flex flex-wrap mb-12 mt-16   text-left">
          <div className="w-full mx-auto lg:w-1/3">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl text-center title-font">
              Upcoming Trips
            </h2>
            <p className="mb-4 text-center leading-relaxed text-gray-600">
              We are nomadies
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 lg:w-1/3">
            <div className="h-full bg-white rounded-lg shadow-lg">
              <Image
                src={Man}
                alt="testimonial"
                className="w-full p-0 rounded-md"
              />
              <div className="flex flex-col items-center p-8 text-left">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-black">
                  West Africa - Togo & Benin
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  Experience a good one week work trip as you work from a new
                  city.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  May 5th - 12th, 2023
                </p>
                <h1 className="mb-4 font-lg font-bold  border-l leading-relaxed text-gray-600">
                  $900/person
                </h1>

                <button className="inline-flex items-center p-3 bg-black rounded-full text-white">
                  See more{" "}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <div className="h-full bg-white rounded-lg shadow-lg">
              <Image
                src={Man}
                alt="testimonial"
                className="w-full p-0 rounded-md"
              />
              <div className="flex flex-col items-center p-8 text-left">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-black">
                  West Africa - Togo & Benin
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  Experience a good one week work trip as you work from a new
                  city.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  May 5th - 12th, 2023
                </p>
                <h1 className="mb-4 font-lg font-bold  border-l leading-relaxed text-gray-600">
                  $900/person
                </h1>

                <button className="inline-flex items-center p-3 bg-black rounded-full text-white">
                  See more{" "}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <div className="h-full bg-white rounded-lg shadow-lg">
              <Image
                src={Man}
                alt="testimonial"
                className="w-full p-0 rounded-md"
              />
              <div className="flex flex-col items-center p-8 text-left">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-black">
                  West Africa - Togo & Benin
                </h2>
                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  Experience a good one week work trip as you work from a new
                  city.
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-600">
                  May 5th - 12th, 2023
                </p>
                <h1 className="mb-4 font-lg font-bold  border-l leading-relaxed text-gray-600">
                  $900/person
                </h1>

                <button className="inline-flex items-center p-3 bg-black rounded-full text-white">
                  See more{" "}
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <UpcomingEvent />
      </div>
    </section>
  );
}
