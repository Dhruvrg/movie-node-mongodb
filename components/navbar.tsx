"use client";

import Avatar from "./Avatar";
import { useRouter } from "next/navigation";
import { TbSearch, TbCircle, TbSquare8Filled } from "react-icons/tb";
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-around text-gray-400 bg-[#010B13] border-b-[1px] border-gray-800 py-5">
      <div className="text-white text-2xl font-bold">MOVEA</div>
      <div className="flex gap-10">
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
          TV shows
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
      <div className="flex gap-5">
        <TbSearch
          className="text-lg hover:text-white hover:text-xl duration-300"
          size={25}
        />
        <TbCircle
          className="text-lg hover:text-white hover:text-xl duration-300"
          size={25}
        />
        <Avatar src={null} />
      </div>
    </nav>
  );
};

export default Navbar;
