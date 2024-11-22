import React from 'react';
import CardAvatar from '../molecules/CardAvatar';
import CardTitle from '../atoms/CardTitle';
import CardTitleSection from '../molecules/CardTitleSection';
import CardBadgeSection from '../molecules/CardBadgeSection';

const Card = () => {
  return (
    <div className="py-9 px-4 shadow-lg flex flex-col items-center gap-4 rounded-xl bg-white job-card w-[140px] lg:w-[234px]">
      <CardAvatar />
      <CardTitleSection title="Abishek Gupta" job="마케팅" expLength="2y+" />
      <CardBadgeSection />
    </div>
  );
};

export default Card;
