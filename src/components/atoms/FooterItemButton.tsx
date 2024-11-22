import React from 'react';
import { Button } from '../ui/button';
import { ArrowRightSquare } from 'lucide-react';

const FooterItemButton = () => {
  return (
    <Button variant="ghost" className="p-0">
      <span>바로가기</span>
      <ArrowRightSquare />
    </Button>
  );
};

export default FooterItemButton;
