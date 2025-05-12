// components/ServiceAreas.tsx
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

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
    <section id="service-areas" className="py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Hizmet Bölgelerimiz
      </h2>
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
                Bölgesinde hızlı ve güvenilir çilingir hizmeti.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
        {/* Aşağıdaki iframe src'sini kendi Google Maps Embed API anahtarınızla güncelleyin */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123456789012!2d28.927123456789!3d41.023456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1234567890b%3A0xcafebabe12345678!2sZeytinburnu%2C%20Istanbul!5e0!3m2!1str!2str!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
