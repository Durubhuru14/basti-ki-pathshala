import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import heroImg from "/hero_img.webp";

export default function Home() {
  const isReducedMotion = useReducedMotion();
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background image as <img> */}
      <img
        src={heroImg}
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
            Basti Ki Pathshala Fondation
          </h1>
          <h4 className="scroll-m-20 text-base sm:text-xl font-semibold tracking-tight">
            Join our mission to break educational barriers in underserved
            communities. With your support, we can bring quality education to
            children in slum areas, empowering them to build brighter futures.
          </h4>

          {/* CTAs */}
          <div className="mt-2 flex gap-4">
            <Link to={"/form"}>
              <Button variant={"CTA"} size={"lg"} className="cursor-pointer">
                Be A Part Of Change!
              </Button>
            </Link>
            <Link to={"/about"}>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="cursor-pointer"
              >
                Learn More
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
