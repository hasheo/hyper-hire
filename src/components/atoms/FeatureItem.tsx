import React from 'react';

const FeatureItem = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-black border-t-white py-2 text-white">{title}</div>
      <div className="text-base font-black text-white/80">{subTitle}</div>
    </div>
  );
};

export default FeatureItem;
