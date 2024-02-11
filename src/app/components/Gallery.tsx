import { Text } from "@mantine/core";

export default function Gallery() {
  return (
    <div className="bg-white lg:w-1/2  px-0 items-center mx-auto py-5">
        <Text className="text-center text-3xl font-bold mb-5">Gallery</Text>
      <div className="grid gap-4">
        <div>
          <img
            className="max-h-full max-w-full rounded-lg"
            src="/images/gallery1.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="images/gallery6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
