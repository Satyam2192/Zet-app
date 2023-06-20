"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Steps = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
  };

  return (
    <div className="flex flex-col items-center dIlUvj">
      <div className="max-w-2xl text-center mt-8">
        <p className="font-sans text-[24px] mb-2 font-bold text-white">
          Start Earning in 3 Easy Steps
        </p>
        <p className="font-sans font-light text-lg text-[18px] text-white">
          We have created the app to make your earning easy
        </p>
      </div>

      <div className="">
        <div className="mt-8">
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
          >
            <div className="flex justify-center py-10 gap-24">
              <div className=" rounded-xl shadow-md p-8 mx-4 my-auto">
                <p className="lkbVXO">STEP 1</p>
                <p className="font-sans text-[24px] text-[#538bff]">
                  Download the App and Sign up as a ZET agent
                </p>
                <div className="kMolaF">
                </div>
                <div className=" w-32">
                  <img
                    alt="google-play-logo"
                    className=""
                    src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                  />
                </div>
              </div>
              <div className="mt-4">
                <video
                  autoPlay
                  muted
                  loop
                  src="https://zetapp.in/static/images/Step3.mp4"
                  type="video/mp4"
                  className="rounded-lg md:w-[250px]"
                ></video>
              </div>
            </div>
            <div className="flex justify-center py-10 gap-24">
              <div className=" rounded-xl shadow-md p-8 mx-4 my-auto">
                <p className="lkbVXO">STEP 2</p>
                <p className="font-sans text-[24px] text-[#538bff]">
                  Register your customers and recommend financial products
                </p>
                <div className="kMolaF">
                </div>
                <div className=" w-32">
                  <img
                    alt="google-play-logo"
                    className=""
                    src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                  />
                </div>
              </div>
              <div className="mt-4">
                <video
                  autoPlay
                  muted
                  loop
                  src="https://zetapp.in/static/images/Step3.mp4"
                  type="video/mp4"
                  className="rounded-lg md:w-[250px]"
                ></video>
              </div>
            </div>
            <div className="flex justify-center py-10 gap-24">
              <div className=" rounded-xl shadow-md p-8 mx-4 my-auto">
                <p className=" lkbVXO">STEP 3</p>
                <p className="font-sans text-[24px] text-[#538bff]">
                  Start earning up to ₹1 Lakh every month
                </p>
                <div className="kMolaF">
                </div>
                <div className=" w-32">
                  <img
                    alt="google-play-logo"
                    className=""
                    src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                  />
                </div>
              </div>
              <div className="mt-4">
                <video
                  autoPlay
                  muted
                  loop
                  src="https://zetapp.in/static/images/Step3.mp4"
                  type="video/mp4"
                  className="rounded-lg md:w-[250px]"
                ></video>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Steps;
