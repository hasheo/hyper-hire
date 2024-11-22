import React from 'react';
import Logo from '../atoms/Logo';

const FooterTitle = () => {
  return (
    <div className="flex flex-col gap-4 mb-[18px]">
      <Logo />
      <p className="font-black text-sm text-[#343741] w-[250px]">
        우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
      </p>
    </div>
  );
};

export default FooterTitle;
