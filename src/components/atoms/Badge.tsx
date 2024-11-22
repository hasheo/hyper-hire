import React, { ReactNode } from 'react';

const Badge = ({ text }: { text: string }) => {
  return <div className="border border-[#C1C5CF] rounded-md px-3 py-1 text-sm font-black text-[#5E626F]">{text}</div>;
};

export default Badge;
