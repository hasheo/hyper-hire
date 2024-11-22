import React from 'react';
import checklist from '@/assets/checkbox.svg';
import Image from 'next/image';

const ChecklistWithItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={checklist} alt="checklist" width={20} height={20} />
      <span className="font-black text-white text-base">{text}</span>
    </div>
  );
};

export default ChecklistWithItem;
