"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { fadeInUp, scaleOnHover } from "@/lib/motionVariants";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "Ev Sahibi",
    content: "15 dakikada geldi, harika işçilik!",
    rating: 5,
  },
  {
    name: "Selin Kara",
    role: "Ofis Yöneticisi",
    content: "Fiyat/performans mükemmel, teşekkürler!",
    rating: 4,
  },
  {
    name: "Mehmet Demir",
    role: "İşletme Sahibi",
    content: "Kasa işini garantiyle tamamladılar.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="py-20 px-4 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Müşteri Yorumları
      </h2>
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {testimonials.map(({ name, role, content, rating }) => (
          <motion.div
            key={name}
            variants={scaleOnHover}
            whileHover="hover"
            className="min-w-[280px] flex-shrink-0 transition-shadow"
          >
            <Card className="hover:shadow-lg">
              <CardHeader className="px-4 pt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{role}</p>
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-6">
                <p className="text-sm text-gray-600">{content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
