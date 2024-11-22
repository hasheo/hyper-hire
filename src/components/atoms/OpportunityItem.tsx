import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

const OpportunityItem = ({
  title,
  image,
  className,
}: {
  title: string;
  image: string | StaticImport;
  className?: string;
}) => {
  return (
    <div className={`bg-white/20 p-4 rounded-xl flex items-center gap-x-6 w-[332px] ${className}`}>
      <div className="bg-white/40 p-3">
        <Image src={image} alt={title} />
      </div>
      <p className="text-2xl text-white font-black">{title}</p>
    </div>
  );
};

export default OpportunityItem;
