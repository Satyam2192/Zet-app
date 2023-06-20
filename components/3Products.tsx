"use client";
import React from "react";
import Tilt from "react-tilt";

const Products = () => {
  return (
    <div
      className="bg-gray-100 bg-no-repeat pt-5"
      style={{
        backgroundImage: `url("https://zetapp.in/_next/static/media/decImg.ead9275f.svg")`,
        
      }}
    >
      <div className="container mx-auto pt-12 pb-[61px] max-w-6xl">
        <div className="text-center">
          <p className="font-sans text-[24px] font-bold ">Products on ZET</p>
          <p className="font-sans mt-2 text-[18px] font-light">
            We are trusted by the best brands in the country
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[27px] mt-8">
          <div className="hover:bg-white rounded-2xl overflow-hidden bg-[#edffec] transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-12 flex grayscale ... hover:grayscale-0">
              <img
                className="w-[25%] h-auto mr-5"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
                alt="Credit Cards"
              />
              <div>
                <p className="font-sans text-lg font-bold mt-4">CREDIT CARDS</p>
                <p className="font-sans mt-2">
                  100% Contactless Application Process with Instant Approval
                  From Top Banks.
                </p>
              </div>
            </div>
          </div>

          <div className="hover:bg-white rounded-2xl overflow-hidden bg-[#fff1ca] transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-12 flex grayscale ... hover:grayscale-0">
              <img
                className="w-[25%] h-auto mr-5 QWSW"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=828&q=75"
                alt="Loans"
              />
              <div>
                <p className="font-sans text-lg font-bold mt-4">LOANS</p>
                <p className="font-sans mt-2">
                  100% online process. Instant offers. Affordable Rate of
                  Interest on loans.
                </p>
              </div>
            </div>
          </div>

          <div className="hover:bg-white rounded-2xl overflow-hidden bg-[#ffeee7] transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-12 flex grayscale ... hover:grayscale-0">
              <img
                className="w-[25%] h-auto mr-5 QWSW"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=828&q=75"
                alt="Buy Now Pay Later"
              />
              <div>
                <p className="font-sans text-lg font-bold mt-4">BUY NOW PAY LATER</p>
                <p className="font-sans mt-2">
                  Short-term financing that allows consumers to make purchases
                  and pay for them over time.
                </p>
              </div>
            </div>
          </div>

          <div className="hover:bg-white rounded-2xl overflow-hidden bg-[#fff5e7] transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-12 flex grayscale ... hover:grayscale-0">
              <img
                className="w-[25%] h-auto mr-5 QWSW"
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=828&q=75"
                alt="Saving Accounts"
              />
              <div>
                <p className="font-sans text-lg font-bold mt-4">SAVING ACCOUNTS</p>
                <p className="font-sans mt-2">
                  ZET offers a range of savings accounts that suit your personal
                  needs for banking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className="absolute right-0 top-0 mt-24 -mr-24 hidden md:block"
        src="/images/decorative-stripes-1.svg"
        alt="Decorative Stripes 1"
      /> */}
      {/* <img
        className="absolute left-0 bottom-0 -ml-24 mb-24 hidden md:block"
        src="/images/decorative-stripes-2.svg"
        alt="Decorative Stripes 2"
      /> */}
    </div>
  );
};

export default Products;
