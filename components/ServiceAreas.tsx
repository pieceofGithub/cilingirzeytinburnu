// components/ServiceAreas.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/lib/motionVariants";

const areas = [
  "Zeytinburnu",
  "Bakırköy",
  "Esenler",
  "Bayrampaşa",
  "Şişli",
  "Fatih",
];

export default function ServiceAreas() {
  return (
    <motion.section
      id="service-areas"
      className="py-20 px-4 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Hizmet Bölgelerimiz
      </h2>

      {/* Bölge Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {areas.map((area) => (
          <Card key={area} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-primary text-center">
                {area}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 text-center">
                {area} bölgesine hızlı ve güvenilir hizmet.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Zeytinburnu Konumu"
          src="https://maps.google.com/maps?q=41.002120,28.896647&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.section>
  );
}
