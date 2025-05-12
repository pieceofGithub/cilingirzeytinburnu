"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { fadeInUp, scaleOnHover } from "@/lib/motionVariants";
import { Award, ShieldCheck, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    title: "20+ Yıllık Deneyim",
    description:
      "Sektörde 20 yılı aşkın tecrübe ile güvenilir ve profesyonel hizmet.",
    Icon: Award,
  },
  {
    title: "Resmi Yetki Belgeleri",
    description:
      "İstanbul Anahtarcılar Odası’na kayıtlı, yasal ve belgeli çilingir.",
    Icon: ShieldCheck,
  },
  {
    title: "Acil Müdahale Süresi: 15 dk",
    description:
      "Arıza bildiriminizin alınmasından sonraki ortalama 15 dakikada yerinizdeyiz.",
    Icon: Clock,
  },
  {
    title: "Garanti & Sigorta",
    description: "Tüm işler için 6 aya kadar işçilik garantisi ve sigorta.",
    Icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      id="why-choose-us"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="py-20 px-4 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Neden Bizi Seçmelisiniz?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ title, description, Icon }) => (
          <motion.div
            key={title}
            variants={scaleOnHover}
            whileHover="hover"
            className="transition"
          >
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pt-6">
                <Icon className="mx-auto w-8 h-8 text-primary mb-4" />
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-6">
                <p className="text-sm text-gray-600">{description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
