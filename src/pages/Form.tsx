import VolunteerForm from "@/components/VolunteerForm";
import formImg from "/form_img.webp";
import { motion, useReducedMotion } from "motion/react";
import ArrowDownAnimation from "@/components/ui/arrow-down-lottie";
import { ArrowDown } from "lucide-react";

export default function Form() {
  const isReducedMotion = useReducedMotion();
  return (
    <>
      <section className="relative h-screen w-screen overflow-hidden">
        {/* Background image as <img> */}
        <img
          src={formImg}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover object-center z-0"
          loading="eager"
        />
        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/60 backdrop-grayscale-25 text-white text-center px-4 flex flex-col items-center justify-center z-10">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={isReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h1 className="scroll-m-20 text-center text-5xl sm:text-7xl font-extrabold tracking-tight text-balance capitalize">
              Be part of Basti Ki Pathshala
            </h1>
          </motion.div>
          {isReducedMotion ? (
            <ArrowDown className="size-15 absolute bottom-4" />
          ) : (
            <ArrowDownAnimation />
          )}
        </div>
      </section>
      <section className="px-12 py-16 w-screen">
        <div className="flex justify-center items-center">
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
