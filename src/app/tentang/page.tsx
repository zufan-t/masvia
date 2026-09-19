import Image from "next/image";

export default function TentangPage() {
  return (
    <main className="flex-grow py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {/* HERO / VISUAL PRESENTATION (Exact match with Tentang.png) */}
          <div className="relative pt-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left Column: TENTANG at top, Front Pouch below it */}
              <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8">
                <h1 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-none text-center md:text-left">
                  TENTANG
                </h1>
                <div className="w-48 sm:w-60 md:w-72 lg:w-80 filter drop-shadow-[-16px_24px_30px_rgba(0,0,0,0.7)] rotate-[-3deg] transition-transform duration-300 hover:scale-105 hover:rotate-0">
                  <Image
                    src="/images/masvia-front.png"
                    alt="Kemasan Depan Masvia"
                    width={340}
                    height={480}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Back Pouch at top, MASVIA below it */}
              <div className="flex flex-col items-center md:items-end space-y-6 md:space-y-8">
                <div className="w-48 sm:w-60 md:w-72 lg:w-80 filter drop-shadow-[16px_24px_30px_rgba(0,0,0,0.7)] rotate-[3deg] transition-transform duration-300 hover:scale-105 hover:rotate-0">
                  <Image
                    src="/images/masvia-back.png"
                    alt="Kemasan Belakang Masvia"
                    width={340}
                    height={480}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-none text-center md:text-right">
                  MASVIA
                </h2>
              </div>
            </div>
          </div>

          {/* SECTION: Mengapa Masvia hadir? */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
              Mengapa Masvia hadir?
            </h2>

            {/* Cream Content Card */}
            <div className="bg-[#FBF5DD] text-[#1A1A1A] rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl space-y-6 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                Menurut International Diabetes Federation (IDF) tahun 2021,
                jumlah penyandang diabetes di Indonesia mencapai 19,5 juta orang,
                menempatkan Indonesia di peringkat kelima negara dengan jumlah
                penyandang diabetes dewasa terbanyak. Angka ini diproyeksikan
                terus meningkat hingga 28,6 juta orang pada 2045.
              </p>

              <p>
                Data Survei Kesehatan Indonesia (SKI) 2023 juga menunjukkan bahwa
                prevalensi diabetes berdasarkan pemeriksaan kadar gula darah pada
                penduduk usia ≥15 tahun mencapai 11,7%. Kondisi tersebut
                menunjukkan besarnya tantangan diabetes di Indonesia dan
                pentingnya perhatian terhadap pola hidup serta asupan
                sehari-hari.
              </p>

              <p>
                Masvia hadir sebagai salah satu alternatif minuman herbal rendah
                gula dengan memadukan buah Mahkota Dewa dan daun Stevia dalam
                bentuk jamu celup. Mahkota Dewa mengandung berbagai senyawa
                bioaktif seperti flavonoid, saponin, alkaloid, dan polifenol
                yang berpotensi membantu mengelola kadar gula darah. Potensi
                tersebut menjadi salah satu alasan Mahkota Dewa dipilih sebagai
                bahan utama dalam Jamu Celup Masvia. Daun Stevia digunakan
                sebagai pemanis alami, sementara bentuk celup membuat
                penyajiannya lebih praktis.
              </p>
            </div>
          </section>
        </div>
      </main>
  );
}
