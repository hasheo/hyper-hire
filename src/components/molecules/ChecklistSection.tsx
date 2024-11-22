import React from 'react';
import ChecklistWithItem from '../atoms/ChecklistWithItem';

export const ChecklistSection = () => {
  return (
    <div className="grid grid-cols-2 gap-1 max-w-[280px] mt-6">
      <ChecklistWithItem text="한국어 능력" />
      <ChecklistWithItem text="업무 수행 능력" />
      <ChecklistWithItem text="겸업 여부" />
      <ChecklistWithItem text="평판 조회" />
    </div>
  );
};
