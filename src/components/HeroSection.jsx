import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row justify-between p-10 m-10">
      <div className="space-y-4">
        <h3 className="text-2xl lg:text-4xl  font-sans">Hello, My Name is</h3>
        <h1 className="text-4xl lg:text-6xl font-sans">AbuBakar Siddique</h1>
        <h3 className="text-2xl lg:text-4xl font-sans">I am a <span className="text-textcolor">Web Developer</span></h3>
        <p className="text-wrap font-sans text-md">I am a full-stack web developer with a strong background in building dynamic and responsive web applications.</p>
        <div className="mt-4">
        <Link href="/" className="border border-textcolor bg-secondary rounded-lg w-10 py-3 px-8">add</Link>
        </div>
      </div>
      <div className="bg-secondary rounded-full min-h-[300px] w-[300px] md:min-w-[300px] relative flex justify-center items-center overflow-hidden">
          <Image
           src="/images/mypic2.png"
           width={600}
           height={600}
           className="absolute mb-[150px] object-cover"
          />
      </div>
    </div>
  )
}

export default HeroSection