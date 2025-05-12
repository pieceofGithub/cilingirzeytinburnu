// components/WhyChooseUs.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Award, ShieldCheck, Clock, CheckCircle } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
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
      "Arıza bildiriminden sonraki ortalama 15 dakikada yerinizdeyiz.",
    Icon: Clock,
  },
  {
    title: "Garanti & Sigorta",
    description:
      "Yaptığımız tüm işler için 6 aya kadar işçilik garantisi ve sigorta.",
    Icon: CheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Neden Bizi Seçmelisiniz?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ title, description, Icon }) => (
          <Card
            key={title}
            className="text-center hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pt-6">
              <Icon className="mx-auto w-8 h-8 text-primary mb-4" />
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-6">
              <p className="text-sm text-gray-600">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
