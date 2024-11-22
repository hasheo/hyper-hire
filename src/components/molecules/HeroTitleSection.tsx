import React from 'react';
import HeroTitle from '../atoms/HeroTitle';
import HeroSubTitle from '../atoms/HeroSubTitle';

const HeroTitleSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <HeroTitle text="최고의 실력을 가진 외국인 인재를 찾고 계신가요?" />
      <HeroSubTitle text="법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요." />
    </div>
  );
};

export default HeroTitleSection;
