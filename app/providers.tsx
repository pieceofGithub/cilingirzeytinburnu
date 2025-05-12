"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      {/* 
        key olarak rota veya sayfa bazlı benzersiz bir değer verin. 
        App Router’da route değişiminde bu wrapper yeniden mount olur. 
      */}
      <motion.div key="page" {...pageTransition}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
