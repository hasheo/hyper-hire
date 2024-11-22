import React from 'react';

const TalkBubble = () => {
  return (
    <div className="relative inline-block bg-[#8BC4FF] text-white rounded-lg px-3 py-[6px] mb-4 font-black text-lg motion-translate-x-in-[0%] motion-translate-y-in-[90%] motion-opacity-in-[0%] motion-delay-500">
      풀타임, 파트타임
      <div className="absolute left-[16px] transform -translate-x-1/2 bottom-[-8px] w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#8BC4FF]"></div>
    </div>
  );
};

export default TalkBubble;
