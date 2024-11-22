import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const CountryImage = ({ src }: { src: string | StaticImport }) => {
  return (
    <Image
      src={src}
      width={24}
      height={18}
      alt="country"
      className="absolute bottom-0 -right-1 rounded-sm"
    />
  );
};

export default CountryImage;
