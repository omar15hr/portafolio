import { ReactNode, RefObject } from "react";
import { AnimationControls, motion, Target, TargetAndTransition, VariantLabels, Variants } from "framer-motion";


interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls;
  whileInView?: TargetAndTransition | VariantLabels;
  whileHover?: TargetAndTransition | VariantLabels;
  viewport?: {
    root?: RefObject<Element>;
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  };
  transition?: object;
  /** Optional ID for the section */
  id?: string;
  /** Optional tag to render. Defaults to div */
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  variants,
  initial = "hidden",
  animate,
  whileInView = "show",
  whileHover,
  viewport = { once: true, amount: 0.25 },
  transition,
  id,
  ...props
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      whileInView={animate ? undefined : whileInView}
      whileHover={whileHover}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;