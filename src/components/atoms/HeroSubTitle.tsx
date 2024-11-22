import React from 'react';

const HeroSubTitle = ({ text }: { text: string }) => {
  return (
    <h2 className="text-lg font-black text-white/80 lg:text-2xl motion-translate-x-in-[0%] motion-translate-y-in-[90%] motion-opacity-in-[0%]">
      {text}
    </h2>
  );
};

export default HeroSubTitle;
