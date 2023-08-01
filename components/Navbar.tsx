"use client";

import Avatar from "./Avatar";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { TbSearch, TbCircle,TbUpload } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import CreateModal from "./CreateModel";

const Navbar = () => {
  const createModal = CreateModal();
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
        <div className="md:flex justify-around text-gray-400 bg-black border-b-[1px] border-gray-800/50 py-5  sm-bg-gradient mix-blend-screen">
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
            <div className="text-white sm:text-xl text-2xl font-bold b-2">MOVEA</div>
            <div
              onClick={toggle}
              className="py-2 px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-1 rounded-xl cursor-pointer"
            >
              <AiOutlineMenu />
              <Avatar src={null} />
            </div>
          </div>
          {isOpen && (
            <div className="gap-2 md:hidden flex flex-col items-center mt-1">
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
              <div
                className="text-lg hover:text-white hover:text-xl duration-300"
                onClick={()=>createModal.onOpen()}
              >
                Add Movie
              </div>
            </div>
          )}
          <div className="gap-5 hidden sm:flex">
            <TbSearch
              className="text-lg hover:text-white hover:text-xl duration-300"
              size={30}
            />
            <TbUpload
            onClick={()=>createModal.onOpen()}
              className="text-lg hover:text-white hover:text-xl duration-300"
              size={30}
            />
            <Avatar src={null} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;