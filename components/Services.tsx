"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { fadeInUp, scaleOnHover } from "@/lib/motionVariants";
import { Home, Truck, Lock, Key } from "lucide-react";

const services = [
  {
    title: "Ev Çilingir Hizmeti",
    description:
      "Kapı açma, kilit değiştirme ve acil ev çilingir ihtiyaçlarınızda 7/24 yanınızdayız.",
    Icon: Home,
  },
  {
    title: "Oto Çilingir Hizmeti",
    description:
      "Araç anahtarı kaybı, kontak tamiri ve araç kilit sorunlarında hızlı çözümler.",
    Icon: Truck,
  },
  {
    title: "Kasa & Para Kasası",
    description:
      "Kasa açma, kombinasyon sıfırlama ve güvenlik kasası servisleri.",
    Icon: Lock,
  },
  {
    title: "Anahtar Çoğaltma",
    description:
      "Standart ve özel anahtar çoğaltma işlemleri, yüksek hassasiyetle.",
    Icon: Key,
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="py-20 px-4 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Hizmetlerimiz
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, Icon }) => (
          <motion.div
            key={title}
            variants={scaleOnHover}
            whileHover="hover"
            className="transition"
          >
            <Card className="hover:shadow-xl">
              <CardHeader className="flex items-center space-x-3 p-4">
                <Icon className="w-6 h-6 text-primary" />
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <CardDescription className="text-sm text-gray-600">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
