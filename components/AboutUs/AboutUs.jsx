import Image from "next/image";
import Featured from "./Featured";
import Investors from "./Investors";
import Founders from "./Founders";

const AboutUs = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage:
            'url("https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMission.13d85461.png&w=3840&q=100")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-xl md:text-[44px] font-bold font-sans text-white text-center mb-8">
          OUR MISSION
        </h1>
        <p className="md:text-xl text-white text-center mb-8 font-sans w-1/3 font-light">
          Enabling financial inclusion for the next billion Indians & making
          their Zindagi Set. Building a platform that enables you to sell
          financial products & earn up to Rs. 1 lakh every month.
        </p>
        <p className="text-xl md:text-[16px] font-bold text-white text-center font-sans tracking-widest">
          EARN BETTER. LIVE BETTER.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[40px] font-sans py-16 font-bold text-[#2f3440]">
          How we evolved over the years
        </h1>

        <img
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrowth.abe5b7d8.png&w=1920&q=100"
          alt="bg-image"
          className="max-w-[1200px] pb-8"
        />
      </div>

      <Featured />
      <Investors />
      <Founders />
    </>
  );
};

export default AboutUs;
