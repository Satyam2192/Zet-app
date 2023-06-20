"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const BrandSlider = () => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ x: "-100%" });
      setTimeout(() => {
        controls.start({ x: "0%" });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <motion.div
        className="slide border-[1px] m-2 rounded-lg max-w-[200px]"
        style={{ width: "calc(100% / 7)" }}
        animate={controls}
      >
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75"
          alt="Brand 1"
          width={256}
          height={256}
        />
      </motion.div>
      <motion.div
        className="slide border-[1px] m-2 rounded-lg max-w-[200px]"
        style={{ width: "calc(100% / 7)" }}
        animate={controls}
      >
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75"
          alt="Brand 2"
          width={256}
          height={256}
        />
      </motion.div>
      <motion.div
        className="slide border-[1px] m-2 rounded-lg max-w-[200px]"
        style={{ width: "calc(100% / 7)" }}
        animate={controls}
      >
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75"
          alt="Brand 3"
          width={256}
          height={256}
        />
      </motion.div>
      <motion.div
        className="slide border-[1px] m-2 rounded-lg max-w-[200px]"
        style={{ width: "calc(100% / 7)" }}
        animate={controls}
      >
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=256&q=75"
          alt="Brand 4"
          width={256}
          height={256}
        />
      </motion.div>
      <motion.div
        className="slide border-[1px] m-2 rounded-lg max-w-[200px]"
        style={{ width: "calc(100% / 7)" }}
        animate={controls}
      >
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYesBank.44b87df7.png&w=256&q=75"
          alt="Brand 5"
          width={256}
          height={256}
        />
      </motion.div>
      <motion.div
        className="slide border-[1px] m-2 rounded-lg max-w-[200px]"
        style={{ width: "calc(100% / 7)" }}
        animate={controls}
      >
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStandardChartered.6a91f4a9.png&w=256&q=75"
          alt="Brand 6"
          width={256}
          height={256}
        />
      </motion.div>
      <motion.div
        className="slide border-[1px] m-2 rounded-lg max-w-[200px]"
        style={{ width: "calc(100% / 7)" }}
        animate={controls}
      >
        <Image
          src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75"
          alt="Brand 7"
          width={256}
          height={256}
        />
      </motion.div>
    </div>
  );
};

export default BrandSlider;

