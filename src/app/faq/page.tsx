"use client";

import { useState } from "react";
import Link from "next/link";
import { CaretDown, WhatsappLogo } from "@phosphor-icons/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Apa itu Jamu Celup Masvia?",
    answer:
      "Masvia adalah inovasi minuman herbal dalam bentuk jamu celup praktis yang memadukan khasiat buah Mahkota Dewa dan manis alami daun Stevia. Dikemas higienis dalam kantong teh celup sehingga mudah diseduh kapan saja tanpa ampas dan tanpa perlu repot merebus.",
  },
  {
    question: "Apakah Jamu Masvia aman untuk penderita diabetes?",
    answer:
      "Sangat aman. Masvia diformulasikan khusus tanpa gula pasir tambahan. Rasa manis alaminya berasal dari daun Stevia (pemanis alami 0 kalori yang tidak memicu lonjakan gula darah). Selain itu, buah Mahkota Dewa kaya akan senyawa bioaktif (flavonoid, polifenol, saponin, dan alkaloid) yang secara empiris dan ilmiah berpotensi membantu mengontrol kadar gula darah.",
  },
  {
    question: "Berapa isi kemasan dan berapa harganya?",
    answer:
      "Satu standing pouch Jamu Celup Masvia berisi 5 kantong celup rempah herbal alami (berat bersih 10 gram) dengan harga terjangkau Rp 15.000 per pouch.",
  },
  {
    question: "Bagaimana cara menyeduh Jamu Celup Masvia yang benar?",
    answer:
      "1. Ambil 1 kantong Jamu Celup Masvia dan masukkan ke dalam cangkir.\n2. Tuangkan 150–200 ml air panas mendidih.\n3. Diamkan selama 3–5 menit hingga sari herbal larut dan aroma harum herbal keluar.\n4. Buang kantong teh dan jamu herbal siap diminum selagi hangat.",
  },
  {
    question: "Di mana saja area pengiriman Masvia?",
    answer:
      "Saat ini Masvia melayani pemesanan dengan opsi pengiriman kurir lokal maupun ambil sendiri di tempat khusus untuk wilayah Kota Semarang dan Kabupaten Demak. Pengiriman gratis ongkir khusus untuk area UNNES (Sekaran, Patemon, Kalisegoro, Ngijo).",
  },
  {
    question: "Apa saja metode pembayaran yang diterima?",
    answer:
      "Kami menerima pembayaran Tunai/Cash (COD / bayar saat barang diterima atau saat ambil di tempat) serta Cashless (QRIS semua bank/e-wallet, GoPay, OVO, DANA, dan ShopeePay).",
  },
  {
    question: "Bagaimana alur pemesanan produk?",
    answer:
      "Anda cukup mengisi data singkat di halaman Produk (Nama, Alamat/Opsi Ambil, Jumlah, dan Metode Pembayaran), lalu klik tombol 'Beli sekarang'. Sistem akan langsung mengarahkan Anda ke chat WhatsApp resmi admin Masvia dengan format rincian pesanan yang sudah otomatis tersusun.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main className="flex-grow py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 pt-4">
            <h1 className="font-anton text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-medium">
              Temukan jawaban atas pertanyaan umum seputar khasiat, pemesanan, dan penyajian Jamu Celup Masvia.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FBF5DD] text-[#1A1A1A] rounded-2xl overflow-hidden shadow-md transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg hover:bg-[#F2ECD0] transition-colors"
                  >
                    <span>{item.question}</span>
                    <CaretDown
                      size={20}
                      weight="bold"
                      className={`text-[#306D29] transform transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#1A1A1A]/85 leading-relaxed font-medium border-t border-[#E8E2CB] whitespace-pre-line animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions? Banner */}
          <div className="bg-[#3A7B32] border-2 border-white/20 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
            <h2 className="font-anton text-3xl sm:text-4xl text-white uppercase">
              MASIH ADA PERTANYAAN LAIN?
            </h2>
            <p className="text-sm sm:text-base text-white/90 max-w-lg mx-auto">
              Tim Masvia siap membantu Anda. Silakan hubungi kami langsung via WhatsApp untuk konsultasi produk atau pertanyaan khusus.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/628214569052?text=Halo%20Admin%20Masvia,%20saya%20ingin%20bertanya%20seputar%20produk%20Jamu%20Celup%20Masvia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FBF5DD] hover:bg-white text-[#1A1A1A] font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <WhatsappLogo size={22} weight="fill" className="text-[#306D29]" />
                <span>Chat Admin WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>
  );
}
