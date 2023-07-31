"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="60"
      width="40"
      alt="Avatar"
      src={src || "/bob-sponge.jpg"}
    />
  );
};

export default Avatar;
