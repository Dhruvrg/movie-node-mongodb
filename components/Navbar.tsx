"use client";

import Avatar from "./Avatar";
import { useRouter } from "next/navigation";
import { TbSearch, TbCircle, TbSquare8Filled } from "react-icons/tb";
const Navbar = () => {
  const router = useRouter();

  return (
    <><div className="sm:hidden text-white font-bold flex justify-center items-center sm-bg-gradient py-4 text-2xl">MOVEA</div>
    <nav className="flex justify-around text-gray-400 bg-black border-b-[1px] border-gray-800 py-5 overflow-hidden sm-bg-gradient  mix-blend-screen">
      <div className="hidden sm:text-white sm:text-2xl sm:font-bold sm:flex">MOVEA</div>
      <div className="flex gap-7 px-8 font-semibold">
        <div
          className="text-lg hover:text-white hover:text-xl duration-300"
          onClick={() => router.push("/properties")}
        >
          Movies
        </div>
        <div
          className="text-lg hover:text-white hover:text-xl duration-300"
          onClick={() => router.push("/properties")}
        >
          Shows
        </div>
        <div
          className="text-lg hover:text-white hover:text-xl duration-300"
          onClick={() => router.push("/properties")}
        >
          Animations
        </div>
        <div
          className="text-lg hover:text-white hover:text-xl duration-300"
          onClick={() => router.push("/properties")}
        >
          Plans
        </div>
      </div>
      <div className="hidden sm:flex sm:gap-5 ">
        <TbSearch
          className="text-lg hover:text-white hover:text-xl duration-300 "
          size={25} />
        <TbCircle
          className="text-lg hover:text-white hover:text-xl duration-300"
          size={25} />
        <Avatar src={null} />
      </div>
    </nav></>
  );
};

export default Navbar;
