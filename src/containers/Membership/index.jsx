import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './card';
export default function Membership() {
  const membershipOptions = [
    {
      title: "Health",
      features: [
        "Unlimited classes",
        "Daily Locker",
        "Fitness Evaluation",
        "Guest Passes",
        "1 PT Sessionure",
      ],
      buttonText: " Inquire for rates"
    },
    {
      title: "Health Plus",
      features: [
        "Health's Features +",
        "Laundry Service",
        "Overnight Locker",
        "Guest Passes",
        "3 PT Sessionure",
      ],
      buttonText: " Inquire for rates"
    },
    {
      title: "Other",
      features: [
        "Corporate",
        "Neighborhood",
        "Student",
        "Guest Passes",
        "Spousal",
      ],
      buttonText: "learn more"
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section style={{ fontFamily: 'Montserrat' }} className="bg-gray-300 lg:py-[64px] mx-auto sm:pb-6 "
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="6000">
        <h2 style={{ fontFamily: 'Oswald' }} className="text-black text-center text-[60px] font-bold">Membership Options</h2>
        <p className="text-center sm:text-[20px] leading-[39px] mb-8">All Memberships include full access to our amenities, pools, fitness classes & much more id est laborum.</p>
        <div className="mx-auto pb-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-center gap-8 lg:w-fit mx-8 lg:mx-auto">
            {membershipOptions.map((membership, index) => (
              <Card
                title={membership.title}
                features={membership.features}
                buttonText={membership.buttonText}  
                key={index}
              />
            ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}