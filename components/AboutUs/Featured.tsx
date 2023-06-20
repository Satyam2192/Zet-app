import Image from "next/image";

const Featured = () => {
  return (
    <div className=" bg-[#fafbfe] pb-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[40px] font-sans py-[50px] font-bold text-[#2f3440]">
          Got Featured
        </h1>
        <div className="flex flex-row items-center justify-center gap-3 ">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEconomicTimes.5724030e.png&w=640&q=75"
            alt="brand logo"
            className="w-[220px] pb-8"
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInc42.7697aec8.png&w=640&q=75"
            alt="brand logo"
            className="w-[220px] pb-8"
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmint.410f3a1a.png&w=640&q=75"
            alt="brand logo"
            className="w-[220px] pb-8"
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYourStory.1efabc81.png&w=640&q=75"
            alt="brand logo"
            className="w-[220px] pb-8"
          />
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBusinessStandard.047c592d.png&w=640&q=75"
            alt="brand logo"
            className="w-[220px] pb-8"
          />
        </div>
      </div>

      {/* -------------------------------*/}
    </div>
  );
};

export default Featured;
