import { motion, useReducedMotion } from "framer-motion";

interface AboutArticleProps {
  background?: string;
  heading: string;
  text: string;
  image: string;
  reverse?: boolean;
}

const AboutArticle = ({
  background = "bg-black-50 dark:bg-black-950",
  heading,
  text,
  image,
  reverse = false,
}: AboutArticleProps) => {
  const sectionClasses = `${background} px-6 md:px-12 py-16 overflow-x-hidden`;
  const layoutClasses = reverse
    ? "flex flex-col flex-col-reverse md:flex-row-reverse items-center gap-6 md:gap-12"
    : "flex flex-col md:flex-row items-center gap-6 md:gap-12";

  const shouldReduceMotion = useReducedMotion();

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className={sectionClasses}>
      <article className={layoutClasses}>
        <motion.div
          className="md:w-1/2"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? {} : "visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={reverse ? fadeInFromRight : fadeInFromLeft}
        >
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-serif">
            {heading}
          </h2>
          <p
            className="leading-7 mt-4"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </motion.div>

        <motion.div
          className="relative md:w-1/2 group overflow-hidden rounded-lg"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? {} : "visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={reverse ? fadeInFromLeft : fadeInFromRight}
        >
          <img
            src={image}
            alt="Mission section"
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
        </motion.div>
      </article>
    </section>
  );
};

export default AboutArticle;
