import React from 'react';
import CardTitle from '../atoms/CardTitle';
import CardSubTitle from '../atoms/CardSubTitle';

const CardTitleSection = ({ title, job, expLength }: { title: string; job: string; expLength: string }) => {
  return (
    <div className="flex flex-col items-center">
      <CardTitle title={title} />
      <CardSubTitle job={job} expLength={expLength} />
    </div>
  );
};

export default CardTitleSection;
