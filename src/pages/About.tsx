import { motion, useReducedMotion } from "motion/react";
import heroImg from "/hero_img.webp";
import ArrowDownAnimation from "@/components/ui/arrow-down-lottie";
import Counter from "@/components/ui/counter";
import aboutStats from "@/lib/aboutStats";
import { ArrowDown } from "lucide-react";
import AboutArticle from "@/components/AboutArticle";
import aboutArticles from "@/lib/aboutArticles";

export default function About() {
  const isReducedMotion = useReducedMotion();
  return (
    <>
      <section className="relative h-screen w-screen">
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
              About Us
            </h1>
          </motion.div>
          {isReducedMotion ? (
            <ArrowDown className="size-15 absolute bottom-4" />
          ) : (
            <ArrowDownAnimation />
          )}
        </div>
      </section>
      <section className="bg-rose-50 dark:bg-rose-950 px-12 py-16 text-center">
        <motion.div
          initial={isReducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="scroll-m-20 pb-2 text-3xl sm:text-5xl font-bold tracking-tight first:mt-0 font-serif">
            We Work Together
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            At Basti Ki Pathshala Foundation, collaboration is at the heart of
            everything we do. Under the banner of 'We Work Together,' we embrace
            the power of unity, recognizing that real change comes from
            collective action. Our dedicated team, passionate volunteers,
            generous donors, and supportive community members all play integral
            roles in our mission to break the barriers of education in
            underserved communities. Together, we strive towards a common goal:
            to empower every child with the opportunity to thrive. Through
            shared vision, shared values, and shared effort, we pave the way for
            a brighter, more inclusive future for all.
          </p>
        </motion.div>
        <div className="mt-16">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 justify-items-center items-center justify-center gap-x-4">
            {aboutStats.map(
              ({ id, icon, text, finalNumber, startingNumber }) => {
                return (
                  <li
                    key={id}
                    className="flex flex-col justify-center items-center gap-2 w-50"
                  >
                    {icon}
                    <div>
                      <Counter
                        from={startingNumber}
                        to={finalNumber}
                        classname="text-6xl font-semibold font-mono min-w-[6ch] text-center [font-feature-settings:'tnum']"
                      />
                      <p className="text-2xl mt-2 font-semibold">{text}</p>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </section>
      {aboutArticles.map((aboutArticle) => {
        return <AboutArticle key={aboutArticle.id} {...aboutArticle} />;
      })}
    </>
  );
}
