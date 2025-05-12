// components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        İletişim
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Başvuru Formu */}
        <form
          action="https://formspree.io/f/yourFormId" // formspree.io ID'nizi buraya ekleyin
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon Numaranız"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-2xl shadow hover:bg-secondary transition"
          >
            Gönder
          </button>
        </form>

        {/* İletişim Bilgileri */}
        <div className="space-y-6 text-gray-700">
          <p>
            <strong>Telefon:</strong>{" "}
            <a
              href="tel:+905530481400"
              className="text-primary hover:underline"
            >
              +90 553 048 1400
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/905530481400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              +90 553 048 1400
            </a>
          </p>
          <p>
            <strong>E-posta:</strong>{" "}
            <a
              href="mailto:info@cilingirzeytinburnu.com"
              className="text-primary hover:underline"
            >
              info@cilingirzeytinburnu.com
            </a>
          </p>
          <p>
            <strong>Adres:</strong> Zeytinburnu, İstanbul
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Sosyal ikonlar örneği */}
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              {/* Facebook SVG ikonu */}
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              {/* Instagram SVG ikonu */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
