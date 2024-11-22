import React from 'react';

const HeroTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="text-4xl font-black text-white lg:text-5xl motion-translate-x-in-[0%] motion-translate-y-in-[90%] motion-opacity-in-[0%]">
      {text}
    </h1>
  );
};

export default HeroTitle;
