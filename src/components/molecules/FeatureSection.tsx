import React from 'react';
import FeatureItem from '../atoms/FeatureItem';

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-3 mt-[60px] motion-preset-fade motion-duration-500">
      <FeatureItem title="평균 월 120만원" subTitle="임금을 해당 국가를 기준으로 계산합니다." />
      <FeatureItem title="최대 3회 인력교체" subTitle="막상 채용해보니 맞지 않아도 걱정하지 마세요. " />
      <FeatureItem title="평균 3일, 최대 10일" subTitle="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다." />
    </div>
  );
};

export default FeatureSection;
