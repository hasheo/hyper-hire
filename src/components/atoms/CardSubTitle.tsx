import React, { ReactNode } from 'react';

const CardSubTitle = ({ job, expLength }: { job: string; expLength: string }) => {
  return (
    <p className="text-[#4A77FF] text-sm flex gap-1">
      <span className="font-bold">{job}</span>
      <span className="font-black">·</span>
      <span className="font-black">{expLength}</span>
    </p>
  );
};

export default CardSubTitle;
