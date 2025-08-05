import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
  type AnimationOptions,
} from "motion/react";
import { useRef } from "react";

type counterProps = {
  from: number;
  to: number;
  keyframeOptions?: AnimationOptions;
  classname?: string;
  locale?: string;
};

export default function Counter({
  from,
  to,
  keyframeOptions,
  classname,
  locale = "en-IN",
}: counterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const formatter = new Intl.NumberFormat(locale);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = formatter.format(to);
      return;
    }

    if (!inView) return;
    element.textContent = formatter.format(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeInOut",
      ...keyframeOptions,
      onUpdate(value: number) {
        element.textContent = formatter.format(Math.round(value));
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to, formatter, keyframeOptions]);

  return <span ref={ref} className={classname} />;
}