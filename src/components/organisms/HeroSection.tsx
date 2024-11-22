'use client';

import React from 'react';
import Card from './Card';
import HeroTitleSection from '../molecules/HeroTitleSection';
import TalkBubble from '../atoms/TalkBubble';
import TalkBubbleMiddle from '../atoms/TalkBubbleMiddle';
import { ChecklistSection } from '../molecules/ChecklistSection';
import InfoText from '../atoms/InfoText';
import HeroCarousel from './HeroCarousel';
import { useMediaQuery } from 'react-responsive';
import FeatureSection from '../molecules/FeatureSection';
import OpportunitySection from '../molecules/OpportunitySection';

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex flex-col p-4 overflow-hidden lg:h-screen">
      <div className="flex flex-col mt-8 lg:max-w-screen-xl lg:mx-auto lg:flex-row lg:justify-between lg:gap-4">
        <div className="max-w-[581px]">
          <TalkBubble />
          <HeroTitleSection />
          <div className="md:hidden">
            <ChecklistSection />
            <InfoText />
          </div>
          <div className="hidden md:block">
            <InfoText className="text-white" />
            <FeatureSection />
          </div>
        </div>

        <div className="flex flex-col items-center mt-9 min-w-0">
          <TalkBubbleMiddle />
          <HeroCarousel />
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-row max-w-screen-xl lg:ml-[295px] lg:mt-[60px] lg:mb-[120px]">
        <OpportunitySection />
      </div>
    </div>
  );
};

export default HeroSection;
