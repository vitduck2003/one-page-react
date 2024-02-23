import React from 'react';

export default function Membership() {
  return (
    <div>
      <section style={{ fontFamily: 'Montserrat' }} className="lg:px-[32px] bg-gray-300 lg:py-[64px] mx-auto sm:pb-6">
        <h2 style={{ fontFamily: 'Oswald' }} className="text-black text-center text-[60px] font-bold">Membership Options</h2>
        <p className="text-center sm:text-[20px] leading-[39px] mb-8">All Memberships include full access to our amenities, pools, fitness classes & much more id est laborum.</p>
        <div className="mx-auto pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center justify-center gap-8 lg:w-fit mx-8 lg:mx-auto">
          <div className=" bg-white md:w-full lg:p-[30px] lg:w-[340px]">
            <h3 className="text-[30px] font-bold my-4">Health</h3>
            <div className="my-8">
              <ul>
                <li className="m-2">Health's Features +</li>
                <li className="m-2">Laundry Service</li>
                <li className="m-2">Overnight Locker</li>
                <li className="m-2">Guest Passes</li>
                <li className="m-2">3 PT Sessions</li>
                <li className="mt-[64px]">
                  <button className="text-white bg-[#F1900E] hover:bg-[#ce964c] mb-8 lg:w-[230px] p-3 rounded-[50px] uppercase">inquire for rates</button>
                </li>
              </ul>
            </div>
          </div>
          <div className=" bg-white md:w-full lg:p-[30px] lg:w-[340px]">
            <h3 className="text-[30px] font-bold my-4">Health Plus</h3>
            <div className="my-8">
              <ul>
                <li className="m-2">Unlimited classes</li>
                <li className="m-2">Daily Locker</li>
                <li className="m-2">Fitness Evaluation</li>
                <li className="m-2">Guest Passes</li>
                <li className="m-2">1 PT Sessionure</li>
                <li className="mt-[64px]">
                  <button className="text-white bg-[#F1900E] hover:bg-[#ce964c] mb-8 lg:w-[230px] p-3 rounded-[50px] uppercase">inquire for rates</button>
                </li>
              </ul>
            </div>
          </div>
          <div className=" bg-white  lg:p-[30px] lg:w-[340px] ">
            <h3 className="text-[30px] font-bold my-4">Other</h3>
            <div className="my-8">
              <ul>
                <li className="m-2">Corporate</li>
                <li className="m-2">Neighborhood</li>
                <li className="m-2">Student</li>
                <li className="m-2">Guest Passes</li>
                <li className="m-2">Spousal</li>
                <li className="mt-[64px] mb-5">
                  <button className="text-white bg-[#F1900E] hover:bg-[#ce964c] lg:w-[230px] p-3 rounded-[50px] uppercase mb-8">learn more</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
