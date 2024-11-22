'use client';

import React from 'react';
import FooterTitle from '../molecules/FooterTitle';
import FooterAddress from '../molecules/FooterAddress';
import FooterItem from '../molecules/FooterItem';

import html from '@/assets/html.svg';
import user from '@/assets/user.svg';
import kor from '@/assets/KOR.svg';
import gear from '@/assets/gear.svg';
import FooterDetailItem from '../atoms/FooterDetailItem';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="bg-[#FBFBFB] ">
      <div className="py-16 px-4 flex flex-col lg:max-w-2xl lg:ml-[295px] lg:flex-row">
        <div className="flex-col">
          <FooterTitle />
          <FooterAddress />
        </div>

        <div className="grid grid-cols-2 gap-2 lg:flex">
          <FooterItem title="해외 개발자 원격 채용" image={html} />
          <FooterItem title="외국인 원격 채용 (비개발)" image={user} />
          <FooterItem title="한국어 가능 외국인 채용" image={kor} />
          <FooterItem title="해외 개발자 활용 서비스" image={gear} />
        </div>
        {isMobile ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <FooterDetailItem title="상호명" subTitle="하이퍼하이어" content="Hyperhire India Private Limited" />
              <FooterDetailItem title="대표 CEO" subTitle="김주현" content="Juhyun Kim" />
              <FooterDetailItem title="사업자등록번호 CIN" subTitle="427-86-01187" content="U74110DL2016PTC290812" />
            </div>
            <div className="flex flex-col mt-9">
              <p className="font-black text-xs mb-[10px] text-[#343741]">주소 ADDRESS</p>
              <p className="font-black text-[13px] mb-[5px] text-[#5E626F]">서울특별시 강남대로 479, 지하 1층 238호 </p>
              <p className="font-black text-[13px] text-[#5E626F]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
            <p className="mt-9 font-black text-[13px] text-[#5E626F]">ⓒ 2023 Hyperhire</p>
          </>
        ) : null}
      </div>
      {isMobile ? null : (
        <div className="bg-[#FBFBFB] px-4 ml-[295px]">
          <div className="flex gap-8">
            <FooterDetailItem title="상호명" subTitle="하이퍼하이어" content="Hyperhire India Private Limited" />
            <FooterDetailItem title="대표 CEO" subTitle="김주현" content="Juhyun Kim" />
            <FooterDetailItem title="사업자등록번호 CIN" subTitle="427-86-01187" content="U74110DL2016PTC290812" />
            <div className="flex flex-col">
              <p className="font-black text-xs mb-[10px] text-[#343741]">주소 ADDRESS</p>
              <p className="font-black text-[13px] mb-[5px] text-[#5E626F]">서울특별시 강남대로 479, 지하 1층 238호 </p>
              <p className="font-black text-[13px] text-[#5E626F]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
          <div className="pt-12 pb-[80px]">
            <p className="mt-9 font-black text-[13px] text-[#5E626F]">ⓒ 2023 Hyperhire</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
