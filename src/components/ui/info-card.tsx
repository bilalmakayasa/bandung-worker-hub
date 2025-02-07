import React from "react";

type InfoCardProps = {
  title: string;
  description: string;
  tag?: string;
  yearApplied?: string;
  link: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  // tag,
  link,
  yearApplied,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className="text-blue-600 text-xl font-bold hover:underline">
          {title}
        </p>
      </a>
      <p className="text-gray-900 mt-2">{description}</p>
      {yearApplied && (
        <div>
          <span className="text-gray-600 mt-2">Berlaku sejak: </span>
          <span className="text-black">{ yearApplied }</span>
        </div>
      )}
      {/* {tag && (
        <div className="flex items-center w-max border border-gray-300 rounded-lg bg-white overflow-hidden">
          <div className="w-1/3 bg-red-500 h-full"></div>
          <span className="px-2 py-1 text-red-700 font-medium">{tag}</span>
        </div>
      )} */}
    </div>
  );
};

export default InfoCard;
