import React from "react";
import BrandSlider from "./BrandSlider";
import Products from "./3Products";
import Effect from "./4Effect";
import WhyTo from "./5WhyTo";
import Steps from "./Steps";

const Hero: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto my-16">
        <div className="pt-8 ">
          <div className=" bg-blue-50 relative">
            <div className="flex flex-col justify-center p-9 md:p-[60px]">
              <h1 className="text-4xl font-sans font-bold text-black">
                Become a Financial Advisor and
              </h1>
              <div className="text-[#264eff] text-4xl font-sans font-bold mt-4">
                Earn Rs.1 Lakh/Month
              </div>
              <p className="mt-4 font-sans font-light text-xl">
                No investment required
              </p>
              <div className="mt-8">
                <img
                  className="w-40 h-auto"
                  src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg"
                  alt="google-play-logo"
                />
              </div>
            </div>
            <div className="rounded-lg">
              <img
                className="w-[400px] h-auto max-w-md absolute top-[-55px] right-[40px]"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75"
                alt="A Happy man with good earning"
              />
            </div>
          </div>
        </div>
      </div>
      <BrandSlider />
      <Products />
      <Effect />
      <WhyTo />
      <Steps />
    </>
  );
};

export default Hero;
