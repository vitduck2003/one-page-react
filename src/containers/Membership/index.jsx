import React from 'react';
import Card from './card';

export default function Membership() {
  return (
    <div>
      <section style={{ fontFamily: 'Montserrat' }} className="bg-gray-300 lg:py-[64px] mx-auto sm:pb-6">
        <h2 style={{ fontFamily: 'Oswald' }} className="text-black text-center text-[60px] font-bold">Membership Options</h2>
        <p className="text-center sm:text-[20px] leading-[39px] mb-8">All Memberships include full access to our amenities, pools, fitness classes & much more id est laborum.</p>
        <div className="mx-auto pb-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-center gap-8 lg:w-fit mx-8 lg:mx-auto">
            <Card
              title="Health"
              features={[
                "Health's Features +",
                "Laundry Service",
                "Overnight Locker",
                "Guest Passes",
                "3 PT Sessions"
              ]}
              buttonText="inquire for rates"
            />
            <Card
              title="Health Plus"
              features={[
                "Unlimited classes",
                "Daily Locker",
                "Fitness Evaluation",
                "Guest Passes",
                "1 PT Sessionure"
              ]}
              buttonText="inquire for rates"
            />
            <Card
              title="Other"
              features={[
                "Corporate",
                "Neighborhood",
                "Student",
                "Guest Passes",
                "Spousal"
              ]}
              buttonText="learn more"
            />
          </div>
        </div>
      </section>
    </div>
  );
}