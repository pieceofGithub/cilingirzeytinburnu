"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  gender: "male" | "female";
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmet Yılmaz",
    role: "Ev Sahibi",
    content:
      "Kapımda kilit problemi yaşadım; 10 dakikada geldi ve harika iş çıkardı.",
    gender: "male",
  },
  {
    name: "Selin Kara",
    role: "Ofis Yöneticisi",
    content: "Ofis kapısındaki anahtar sorunu anında çözüldü. Teşekkürler!",
    gender: "female",
  },
  {
    name: "Mehmet Demir",
    role: "İşletme Sahibi",
    content: "Kasa açma işlemi profesyoneldi, garanti süresi de iyi.",
    gender: "male",
  },
  {
    name: "Ayşe Öztürk",
    role: "Apartman Yöneticisi",
    content: "7/24 hizmet vaadi gerçek çıktı, gece yarısı yardım aldım.",
    gender: "female",
  },
  {
    name: "Can Demir",
    role: "Öğrenci",
    content:
      "Ders çalışırken anahtarımı kaybettim; hızlıca yeni anahtar yaptılar.",
    gender: "male",
  },
  {
    name: "Fatma Uslu",
    role: "Ev Hanımı",
    content: "Çocuk kilidi taktırdım, çok sağlam ve hızlı bir servis.",
    gender: "female",
  },
  {
    name: "Emre Kurt",
    role: "Müteahhit",
    content: "Şantiyede kasa anahtar kopyalama işi için mükemmel çözüm.",
    gender: "male",
  },
  {
    name: "Zeynep Acar",
    role: "Restoran Sahibi",
    content:
      "Mutfak kapısındaki mekanizmayı değiştirdiler; sorunsuz çalışıyor.",
    gender: "female",
  },
  {
    name: "Berkay Şahin",
    role: "Araba Sahibi",
    content:
      "Oto çilingirde fiyat/performans iyi, aracımı da çizmeden açtılar.",
    gender: "male",
  },
  {
    name: "Ebru Çelik",
    role: "Serbest Meslek",
    content: "Ofis anahtarını unuttuğumda yardım ettiler, çok ilgiliydiler.",
    gender: "female",
  },
  {
    name: "Murat Kaya",
    role: "Doktor",
    content: "Acil durumda 12 dakikada geldiler, ellerine sağlık.",
    gender: "male",
  },
  {
    name: "Nihan Topçu",
    role: "Avukat",
    content: "Salon kapısının kilidi değişti; eski kilidi de geri aldılar.",
    gender: "female",
  },
  {
    name: "Ozan Arslan",
    role: "Öğretmen",
    content: "Okulda acil kapı açma işi için ideal ekip, çok profesyoneller.",
    gender: "male",
  },
  {
    name: "Pelin Yıldız",
    role: "Grafiker",
    content: "Ev kilidim zorlanıyordu, sorunu kökünden çözdüler.",
    gender: "female",
  },
  {
    name: "Rıza Can",
    role: "Yazılımcı",
    content: "Kod yazarken kapım arızalandı, bir tıkla geldiler ve giderdiler.",
    gender: "male",
  },
  {
    name: "Seda Yılmaz",
    role: "Mimar",
    content:
      "Projede kullanılan kasa mekanizmasını değiştirdiler, memnun kaldım.",
    gender: "female",
  },
  {
    name: "Tolga Ergün",
    role: "Mühendis",
    content: "İşyeri güvenlik kilidini monte ettiler, çok sağlam oldu.",
    gender: "male",
  },
  {
    name: "Umut Şen",
    role: "Restoran İşletmecisi",
    content: "Mutfak için özel anahtar talebime anında çözüm.",
    gender: "male",
  },
  {
    name: "Vildan Demir",
    role: "Emlakçı",
    content:
      "Ev gösteriminde kilit problemine müdahale edip işimi kurtardılar.",
    gender: "female",
  },
  {
    name: "Yasin Aksoy",
    role: "Danışman",
    content: "Danışmanlık ofisime acil servis sağladılar, çok memnun kaldım.",
    gender: "male",
  },
];

const sliderItems = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Müşteri Yorumları
      </h2>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {sliderItems.map((t, idx) => {
            const origIdx = idx % testimonials.length;
            const avatarUrl = `https://randomuser.me/api/portraits/${
              testimonials[origIdx].gender === "male" ? "men" : "women"
            }/${origIdx + 10}.jpg`;

            return (
              <div
                key={idx}
                className="inline-block w-[280px] mx-2 flex-shrink-0"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className="px-4 pt-6">
                    <div className="flex items-center">
                      {/* Avatar bölümü: %30 */}
                      <div className="w-[30%] flex justify-center">
                        <img
                          src={avatarUrl}
                          alt={`${t.name} avatar`}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      {/* İsim, rol ve yıldızlar: %70, alt alta */}
                      <div className="w-[70%] flex flex-col justify-center pl-3 space-y-1">
                        <h3 className="text-lg font-semibold">{t.name}</h3>
                        <p className="text-sm text-gray-500">{t.role}</p>
                        <div className="flex space-x-1 text-yellow-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              fill="currentColor"
                              className="w-4 h-4"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 pb-6 flex-1 overflow-hidden">
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {t.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
