import React from 'react'

export default function Banner() {
  return (
    <div>
       <div className="bg-img  lg:py-[180px]">
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          {/* <div className="relative top-2/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white"> */}
          <div className="lg:relative text-white lg:left-[250px] p-4 sm:w-max">
            <div className=''>
              <h2 className="lg:text-[60px] lg:leading-tight font-bold lg:mb-8">
                Each program is a <br /> masterclass created by <br /> experts to elevate your <br /> emotional well-being
              </h2>
              <p className="lg:text-[20px] lg:leading-normal mb-8">
                Workout whenever, wherever and however you like – <br />
                indoors, outdoors and online. Enjoy the most flexible <br />
                sports and wellness offer in Europe!
              </p>
            </div>
            <div className="sm:mx-auto">
              <button className="sm:text-center text-white bg-[#F1900E] hover:bg-[#ce964c] lg:w-[230px] sm:mb-4 p-3 rounded-[50px]">Discover Locations</button>
            </div>
          </div>
        </div>
    </div>
  )
}
