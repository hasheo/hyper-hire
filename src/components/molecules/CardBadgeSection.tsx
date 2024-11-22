import React from 'react';
import Badge from '../atoms/Badge';

const CardBadgeSection = () => {
  return (
    <div className="flex grow-0 shrink-0 gap-1 justify-center flex-wrap">
      <Badge text="마케팅 콘텐츠 제작" />
      <Badge text="인스타그램 관리" />
      <Badge text="트위터 관리" />
      <Badge text="블로그 글 작성" />
    </div>
  );
};

export default CardBadgeSection;
