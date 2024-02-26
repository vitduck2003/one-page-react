import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './card';

export default function Discover() {
    useEffect(() => {
        AOS.init();
    }, []);
    const discovers = [
        {
            imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/h.jpg",
            title: "ersonal Training",
            desc: "This apartment features an electric kettle, sofa, and private entrance.",
        },
        {
            imgUrl:
                "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/jjjjj.jpg",
            title: "Fitness Classes",
            desc: "In the room, designed by Space Copenhagen, every detail is",
        },
        {
            imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/hhhh.jpg",
            title: "Combine activities",
            desc: "This apartment has a dining area, private entrance and kitchen.",
        },
        {
            imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/vvv.jpg",
            title: "Boxing Classes",
            desc: "This apartment has a dining area, private entrance and kitchen.",
        },
        {
            imgUrl:
                "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/hhhh-16.jpg",
            title: "Trx Training",
            desc: "This apartment has a dining area, private entrance and kitchen.",
        },
        {
            imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/ffff.jpg",
            title: "ePilates and Yoga",
            desc: "This apartment has a dining area, private entrance and kitchen.",
        },
        {
            imgUrl:
                "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/full-shot-people-barre-group-cla.jpg",
            title: "Barre",
            desc: "This apartment has a dining area, private entrance and kitchen.",
        },
        {
            imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/9067.jpg",
            title: "Cycling",
            desc: "This apartment has a dining area, private entrance and kitchen.",
        },
        {
            imgUrl: "https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/765.jpg",
            title: "Strength",
            desc: "This apartment has a dining area, private entrance and kitchen.",
        },
    ];
    return (
        <div>
            <section
                className="px-[32px] bg-gray-300 pt-[64px] mx-auto"
                style={{ fontFamily: 'italic' }}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="6000"
            >
                <h2 className="text-black text-center text-[60px] font-bold mb-[64px]">
                    Discover our live classes
                </h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-center w-fit md:w-full lg:w-fit m-auto"
                >
                    
                     {discovers.map((discover, index) => (
                    <Card
                        key={index}
                        imageUrl={discover.imgUrl}
                        title={discover.title}
                        description={discover.desc}
                    />
                    ))
                     }
                </div>
            </section>
        </div>
    );
}