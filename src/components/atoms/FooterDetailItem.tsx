import React from 'react';

const FooterDetailItem = ({ title, subTitle, content }: { title: string; subTitle: string; content: string }) => {
  return (
    <div className="flex flex-col">
      <p className="font-black text-xs mb-[10px] text-[#343741]">{title}</p>
      <p className="font-black text-[13px] mb-[5px] text-[#5E626F]">{subTitle}</p>
      <p className="font-black text-[13px] text-[#5E626F]">{content}</p>
    </div>
  );
};

export default FooterDetailItem;
