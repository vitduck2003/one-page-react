import React from 'react';

const Card = ({ title, features, buttonText }) => {
  return (
    <div className="bg-white md:w-full lg:p-[30px] lg:w-[340px]">
      <h3 className="text-[30px] font-bold my-4">{title}</h3>
      <div className="my-8">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="m-2">{feature}</li>
          ))}
          <li className="mt-[64px]">
            <button className="text-white bg-[#F1900E] hover:bg-[#ce964c] mb-8 lg:w-[230px] p-3 rounded-[50px] uppercase">{buttonText}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;