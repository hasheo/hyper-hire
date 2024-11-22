import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const CardAvatarImage = ({ src }: { src: string | StaticImport }) => {
  return (
    <Image
      src={src}
      width={64}
      height={64}
      alt="avatar"
      className="rounded-full"
    />
  );
};

export default CardAvatarImage;
