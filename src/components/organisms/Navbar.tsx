'use client';

import React from 'react';
import LogoWhite from '../atoms/LogoWhite';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <div className="container p-4 lg:max-w-screen-lg lg:mx-auto lg:flex lg:justify-between">
      <LogoWhite />
      <div className="hidden lg:block font-black">
        <span>채용</span>
        <span className="ml-[60px]">해외 개발자 활용 서비스</span>
      </div>
      <Button variant={'default'} className="bg-white text-[#4A77FF] font-black hidden lg:block">
        문의하기
      </Button>
    </div>
  );
};

export default Navbar;
