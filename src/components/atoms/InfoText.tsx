import React from 'react';

const InfoText = ({ className }: { className?: string }) => {
  return <p className={`font-black text-base text-[#FBFF23] mt-4 underline ${className}`}>개발자가 필요하신가요?</p>;
};

export default InfoText;
