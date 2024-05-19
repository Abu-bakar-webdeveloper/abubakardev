import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between p-8">
        <div className="">LOGO</div>
        <div className="space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-white">About Me</Link>
            <Link href="#projexts"  className="text-gray-600 hover:text-white">Projects</Link>
            <Link href="#contact"  className="text-gray-600 hover:text-white">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar