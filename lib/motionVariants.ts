import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleOnHover: Variants = {
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};
