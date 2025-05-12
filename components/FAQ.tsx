"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleOnHover } from "@/lib/motionVariants";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Acil ne kadar sürede gelirsiniz?",
    answer: "Ortalama 15 dk içinde yerinizdeyiz.",
  },
  {
    question: "Fiyatlandırma nasıl?",
    answer:
      "Standart tarifeler + ek malzeme ücretleri. Arayarak net bilgi alabilirsiniz.",
  },
  {
    question: "Garanti veriyor musunuz?",
    answer: "6 aya kadar işçilik garantisi ve sigorta sunuyoruz.",
  },
];

export default function FAQ() {
  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="py-20 px-4 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Sıkça Sorulan Sorular
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map(({ question, answer }) => (
          <motion.details
            key={question}
            variants={scaleOnHover}
            whileHover="hover"
            className="group border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-lg font-medium text-gray-800">
                {question}
              </span>
              <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.details>
        ))}
      </div>
    </motion.section>
  );
}
