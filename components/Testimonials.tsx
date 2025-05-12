// components/Testimonials.tsx
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role?: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmet Yılmaz",
    role: "Ev Sahibi",
    content:
      "Zeytinburnu’nda kilidim arızalandığında 15 dakikada geldi ve sorunu çözdü. Çok memnun kaldım!",
    rating: 5,
  },
  {
    name: "Selin Kara",
    role: "Ofis Yöneticisi",
    content:
      "Oto çilingir hizmetini denedim; aracımı hızlıca açtılar ve fiyat da makuldü. Teşekkürler!",
    rating: 4,
  },
  {
    name: "Mehmet Demir",
    role: "İşletme Sahibi",
    content:
      "Kasa açma işlemi profesyonelce yapıldı. Garanti ve sigorta bilgisi güven verdi.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Müşteri Yorumları
      </h2>
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {testimonials.map(({ name, role, content, rating }) => (
          <Card
            key={name}
            className="min-w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow"
          >
            <CardHeader className="px-4 pt-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                {role && <p className="text-sm text-gray-500 mt-1">{role}</p>}
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
        ))}
      </div>
    </section>
  );
}
