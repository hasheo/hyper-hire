import React, { ReactNode } from 'react';

const CardTitle = ({ title }: { title: string }) => {
  return <span className="text-lg font-black text-[#24252F]">{title}</span>;
};

export default CardTitle;
