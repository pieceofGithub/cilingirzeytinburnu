// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Site Haritası */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Site Haritası
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="hover:text-primary transition">
                Hizmetler
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                className="hover:text-primary transition"
              >
                Neden Bizi Seçmelisiniz
              </a>
            </li>
            <li>
              <a
                href="#service-areas"
                className="hover:text-primary transition"
              >
                Hizmet Bölgeleri
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-primary transition">
                Müşteri Yorumları
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition">
                SSS
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
          <p>
            <strong>Telefon:</strong>{" "}
            <a
              href="tel:+905530481400"
              className="hover:text-primary transition"
            >
              +90 553 048 1400
            </a>
          </p>
          <p className="mt-2">
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:info@cilingirzeytinburnu.com"
              className="hover:text-primary transition"
            >
              info@cilingirzeytinburnu.com
            </a>
          </p>
          <p className="mt-2">
            <strong>Adres:</strong> Zeytinburnu, İstanbul
          </p>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Takip Edin</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition"
            >
              <svg width="24" height="24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3V12h2.3l-.4 3h-1.9v7A10.05 10.05 0 0022 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary transition"
            >
              <svg width="24" height="24" fill="currentColor">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-3.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} ÇilingirZeytinburnu.com. Tüm hakları
        saklıdır.
      </div>
    </footer>
  );
}
