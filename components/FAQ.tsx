// components/FAQ.tsx
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Acil bir durumda ne kadar sürede hizmet sağlıyorsunuz?",
    answer:
      "Arıza bildiriminizin alınmasından itibaren ortalama 15 dakika içinde bulunduğunuz konuma ulaşarak müdahale ediyoruz.",
  },
  {
    question: "Fiyatlandırma nasıl hesaplanıyor?",
    answer:
      "Standart anahtar çoğaltma, kapı açma ve kilit değiştirme işlemleri sabit tarifelerle sunulur. Ekstra malzeme veya kasa-kilit tipine göre ücretlendirme yapılmaktadır. Net fiyat bilgisi için lütfen bizi arayın.",
  },
  {
    question: "Yaptığınız işlere garanti veriyor musunuz?",
    answer:
      "Tüm işçilik için 6 aya kadar garanti ve sigorta desteği sağlıyoruz. İşlem sonrası memnun kalmadığınız bir nokta olursa tekrar ücretsiz müdahale ediyoruz.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Sıkça Sorulan Sorular
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map(({ question, answer }) => (
          <details
            key={question}
            className="group border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-lg font-medium text-gray-800">
                {question}
              </span>
              <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-2 text-gray-600">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
