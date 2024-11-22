import React from 'react';
import OpportunityItem from '../atoms/OpportunityItem';

import marketingIcon from '@/assets/icon-marketing.svg';
import imageIcon from '@/assets/icon-image.svg';
import boxIcon from '@/assets/icon-box.svg';
import targetIcon from '@/assets/icon-target.svg';
import callIcon from '@/assets/icon-call.svg';

const OpportunitySection = () => {
  return (
    <div className="flex gap-[10px]">
      <OpportunityItem
        title="해외 마케팅"
        image={marketingIcon}
        className="motion motion-preset-slide-left motion-delay-[1000ms] motion-ease-spring-bouncier"
      />
      <OpportunityItem
        title="퍼블리셔"
        image={imageIcon}
        className="motion motion-preset-slide-left motion-delay-[1500ms] motion-ease-spring-bouncier"
      />
      <OpportunityItem
        title="캐드원(제도사)"
        image={boxIcon}
        className="motion motion-preset-slide-left motion-delay-[2000ms] motion-ease-spring-bouncier"
      />
      <OpportunityItem
        title="해외 세일즈"
        image={targetIcon}
        className="motion motion-preset-slide-left motion-delay-[2500ms] motion-ease-spring-bouncier"
      />
      <OpportunityItem
        title="해외 CS"
        image={callIcon}
        className="motion motion-preset-slide-left motion-delay-[3000ms] motion-ease-spring-bouncier"
      />
    </div>
  );
};

export default OpportunitySection;
