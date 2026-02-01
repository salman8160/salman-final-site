// src/components/HeroSection.jsx
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 md:py-20">
      <Container>
        <div className="min-h-screen flex items-center">
          <div className="w-full">
            {/* MOVE WHOLE HERO LEFT (~1 inch) */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14 w-full md:-translate-x-16 -translate-y-12">
              {/* IMAGE */}
              <motion.div
                className="flex justify-center md:justify-start md:-ml-12"
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -50 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={shouldReduceMotion ? {} : { duration: 0.8 }}
              >
                <Image
                  src="/images/salman-transparent.png"
                  alt="Salman Tabrez"
                  width={520}
                  height={520}
                  className="w-[320px] sm:w-[380px] md:w-[460px] lg:w-[520px] h-auto object-contain"
                />
              </motion.div>

              {/* TEXT */}
              <div className="flex flex-col items-center text-center">
                <motion.h1
                  className="font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600
                             text-4xl sm:text-5xl lg:text-6xl md:whitespace-nowrap"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: -25 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={shouldReduceMotion ? {} : { duration: 0.8 }}
                >
                  Cloud Security & IAM Architect
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-4"
                  initial={shouldReduceMotion ? {} : { opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1 }}
                  transition={shouldReduceMotion ? {} : { delay: 0.1, duration: 0.8 }}
                >
                  IAM • PAM • AppSec automation • Cloud architecture
                </motion.p>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 max-w-xl mb-8"
                  initial={shouldReduceMotion ? {} : { opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1 }}
                  transition={shouldReduceMotion ? {} : { delay: 0.2, duration: 0.8 }}
                >
                  7+ years of experience securing systems across healthcare, fintech, and enterprise IT environments.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={shouldReduceMotion ? {} : { opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1 }}
                  transition={shouldReduceMotion ? {} : { delay: 0.5, duration: 0.8 }}
                >
                  <a
                    href="#book"
                    className="px-8 py-4 text-lg font-bold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition"
                  >
                    Book a 20-min intro call
                  </a>

                  <a
                    href="#writing"
                    className="px-8 py-4 text-lg font-bold text-purple-400 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition"
                  >
                    Read my writing
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
