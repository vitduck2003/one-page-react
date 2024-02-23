import React from 'react';

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-white pb-4 w-fit  lg:max-w-[340px]">
            <img className="lg:h-[270px] md:h-[263px] lg:w-[340px] md:w-full" src={imageUrl} alt="" />
            <h4 style={{ fontFamily: 'Oswald, sans-serif' }} className="text-[26px] font-bold leading-[31px] text-black mt-4 mb-2">{title}</h4>
            <p className="text-[20px] font-light leading-[36px] text-black mt-2 mb-4"><i>{description}</i></p>
            <div className="mb-8">
                <a style={{ textDecorationColor: '#F1900E' }} className="text-[#111111] py-4 underline hover:text-[#F1900E] uppercase decoration-2 font-bold" href="">learn more</a>
            </div>
        </div>
        
    );
};

export default Card;