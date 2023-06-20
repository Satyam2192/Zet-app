"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Carousel.module.css';

const Effect = () => {
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
    <div className=" py-10 gurtfd">
      <div className="max-w-screen-xl mx-auto p-8 ">
        <div className="relative kLrQtv ">
          <img
            src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeeps1.2a271552.png&w=750&q=75 "
            alt="people Image"
            width={695}
            height={463}
          />
          <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2  ">
            <p className="text-4xl font-bold text-white mb-4 flex justify-center">THE ZET EFFECT</p>

            <div>
            <div className={styles.carouselContainer}>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={5000}

        
      >
        <div className={styles.slide}>
          <p className="text-lg text-white">
            14 Lakh+ Financial Advisor across India are using ZET to increase
            their income.
          </p>
        </div>
        <div className={styles.slide}>
          <p className="text-lg text-white">
            We helped customers in more than 50 cities to get their first
            financial product
          </p>
        </div>
        <div className={styles.slide}>
          <p className="text-lg text-white">
            More than ₹20 Cr earned by our Agents by selling Credit Cards and
            Loans
          </p>
        </div>
      </Carousel>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effect;
