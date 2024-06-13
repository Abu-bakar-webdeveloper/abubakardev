import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row justify-between p-10 md:p-20 space-y-10 md:space-y-0 items-center">
      <div className="space-y-6 animate-fade-in-up md:w-1/2">
        <h3 className="text-2xl lg:text-4xl font-sans text-gray-600">
          Hello, My Name is
        </h3>
        <h1 className="text-4xl lg:text-6xl font-bold font-sans text-textcolor">
          AbuBakar Siddique
        </h1>
        <h3 className="text-2xl lg:text-4xl font-sans text-gray-600">
          I am a{" "}
          <span className="font-bold text-transparent bg-gradient-to-r from-extra via-textcolor to-extra2 bg-clip-text">
            Web Developer
          </span>
        </h3>
        <p className="text-md lg:text-lg font-sans text-gray-600">
          I am a full-stack web developer with a strong background in building
          dynamic and responsive web applications.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="border border-textcolor bg-secondary text-white rounded-lg py-3 px-8 transition-transform transform hover:scale-105"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="bg-secondary rounded-full min-h-[300px] w-[300px] md:min-w-[400px] md:h-[400px] relative flex justify-center items-center overflow-hidden animate-scale-in-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-extra via-textcolor to-extra2 p-2">
          <div className="rounded-full bg-secondary p-1 flex justify-center items-center h-full w-full">
            <Image
              src="/images/mypic2.png"
              width={400}
              height={400}
              className="absolute mb-[150px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
