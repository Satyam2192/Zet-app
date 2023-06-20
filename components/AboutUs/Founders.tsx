import Image from "next/image";

const Founders = () => {
  return (
    <>
      <div className=" bg-[#E9F4FF] h-[100vh]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <h1 className="text-[38px] font-sans pt-[80px] font-bold text-[#2f3440] ">
              Meet our Founders
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-[22px] font-sans font-light pb-[95px] text-[#2f3440] ">
              Few words from founders desk
            </h1>
          </div>

          <div className="flex flex-row items-center justify-center gap-[90px]">
            <div>
              <img
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=640&q=75"
                alt="brand logo"
                className="w-[300px] pb-8"
              />
              <div className="flex justify-between">
                <div>
                  <p className="text-[24px] text-[#2f3440] font-sans font-light">
                    Manish Shara
                  </p>
                  <p className="text-[24px] text-[#2f3440] font-sans font-light">
                    Co- Founder & CEO
                  </p>
                </div>
                <img
                  className="w-[40px] h-[40px]"
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75"
                />
              </div>
            </div>
            <div>
              <img
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYash.126e24ca.png&w=640&q=75"
                alt="brand logo"
                className="w-[300px] pb-8"
              />
              <div className="flex justify-between">
                <div>
                  <p className="text-[24px] text-[#2f3440] font-sans font-light">
                    Yash Desai
                  </p>
                  <p className="text-[24px] text-[#2f3440] font-sans font-light">
                    Co- Founder
                  </p>
                </div>
                <img
                  className="w-[40px] h-[40px]"
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75"
                />
              </div>
            </div>
            <div>
              <img
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLokesh.ead063e7.png&w=640&q=75"
                alt="brand logo"
                className="w-[300px] pb-8"
              />
              <div className="flex justify-between">
                <div>
                  <p className="text-[24px] text-[#2f3440] font-sans font-light">
                    Lokesh Agarwal
                  </p>
                  <p className="text-[24px] text-[#2f3440] font-sans font-light">
                    CTO
                  </p>
                </div>
                <img
                  className="w-[40px] h-[40px]"
                  src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkedIn.6d99003c.png&w=96&q=75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E9F4FF] pt-[60px]">

        <img src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAboutUsFooter.d2311d39.png&w=3840&q=100"/>
      </div>
    </>
  );
};

export default Founders;
