import React from 'react';
import FooterItemButton from '../atoms/FooterItemButton';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const FooterItem = ({ image, title }: { image: string | StaticImport; title: string }) => {
  return (
    <div className="flex flex-col items-start p-4 gap-4 rounded-lg bg-white w-[160px] lg:w-[187px]">
      <div className="p-2 rounded-lg bg-[#EFF1F6] w-10 h-10 content-center">
        <Image src={image} alt={title} />
      </div>
      <span className="font-black text-sm">{title}</span>
      <FooterItemButton />
    </div>
  );
};

export default FooterItem;
