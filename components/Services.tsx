// components/Services.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Home, Truck, Lock, Key } from "lucide-react";

interface Service {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const services: Service[] = [
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
    <section id="services" className="py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Hizmetlerimiz
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, Icon }) => (
          <Card key={title} className="hover:shadow-xl transition">
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
        ))}
      </div>
    </section>
  );
}
