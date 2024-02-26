import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Form() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = {};
    for (let [key, value] of formData.entries()) {
      jsonData[key] = value;
    }
    fetch('https://hook.eu2.make.com/4u0ejvj2xoc8p31oc8xbcut4wrsdyxbk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Gửi thành công');
        } else {
          throw new Error('Lỗi rồi: ' + response.status);
        }
      })
      .catch((error) => {
        console.log('Lỗi r mày:', error);
      });
  };
  return (
    <div className='mx-auto'>
      <section className="lg:px-[32px] lg:pt-[64px] mx-auto" style={{ fontFamily: 'Montserrat' }}>
        <h2
          style={{ fontFamily: 'Oswald' }}
          className="text-black text-center text-[60px] font-bold mb-[32px] w-full"
        >
          Have something to say?
        </h2>
        <div className="mx-auto md:mx-6">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 bg-gray-300 mx-6 lg:mx-[180px] items-center py-5">
            <div className="mx-auto sm:m-7 "
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className="lg:py-5 ">
                <p className="text-center lg:text-start text-[18px] leading-[36px] text-[#808080] mb-[32px]">
                  Let us know questions, suggestions, and by filling out the contact form below.
                </p>
                <div className="flex gap-8 justify-center">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-google-plus-g"></i>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full px-[64px] lg:px-0"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <div className="sm:justify-center sm:p-4">
                <form className="mx-auto" onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label> <br />
                  <input className="h-[35px] w-full p-3" type="text" id="name" name="name" placeholder="Enter your Name" />
                  <div className="lg:gap-4 my-4 grid grid-cols-1 lg:grid-cols-2">
                    <div className="">
                      <label htmlFor="phone">Phone</label> <br />
                      <input className="h-[35px] w-full p-3" type="text" id="phone" name="phone" placeholder="Enter your phone" />
                    </div>
                    <div className=''>
                      <label className="sm:w-fit" htmlFor="email">Email</label> <br />
                      <input className="h-[35px] w-full p-3 sm:mb-3" type="text" id="email" name="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-[#F1900E] hover:bg-[#ce964c] p-3 rounded-[50px] uppercase">
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}