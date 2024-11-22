import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo-white.svg';

const LogoWhite = () => {
  return <Image src={logo} alt="logo" width={114} height={21} />;
};

export default LogoWhite;
