"use client";

import Avatar from "./Avatar";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { TbSearch, TbCircle } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      {domLoaded && (
        <div className="md:flex justify-around text-gray-400 bg-[#010B13] border-b-[1px] border-gray-800 py-5">
          <div className="hidden md:block text-white text-2xl font-bold">
            MOVEA
          </div>
          <div className="gap-10 hidden sm:flex">
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
          <div className="md:hidden flex items-center justify-between px-5">
            <div className="text-white text-xl font-bold">MOVEA</div>
            <div
              onClick={toggle}
              className="py-1 px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-1 rounded-full cursor-pointer"
            >
              <AiOutlineMenu />
              <Avatar src={null} />
            </div>
          </div>
          {isOpen && (
            <div className="gap-2 md:hidden flex flex-col items-center">
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
          )}
          <div className="gap-5 hidden sm:flex">
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
        </div>
      )}
    </>
  );
};

export default Navbar;
