import React from 'react';
import dollarSign from '@/assets/dollar-green.svg';
import Image from 'next/image';

const TalkBubbleMiddle = () => {
  return (
    <div className="relative inline-block bg-[#E9F7EF] text-[#00C696] rounded-lg px-3 py-[6px] mb-4 font-black text-lg">
      <div className="flex items-center">
        <Image src={dollarSign} alt="dollar" width={26} height={26} />
        <span className="ml-[10px]">월 100만원</span>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#E9F7EF]"></div>
    </div>
  );
};

export default TalkBubbleMiddle;
