import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex-grow">
        {/* HERO SECTION */}
        <HeroSection />

        {/* SECTION: KENAPA MASVIA? (Exact match with design: 3 contiguous flush columns) */}
        <section className="py-16 md:py-24 border-t border-[#447B3E]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Section Title on the Left */}
              <div className="lg:col-span-4">
                <h2 className="font-anton text-5xl sm:text-6xl md:text-6xl lg:text-7xl leading-[1.05] tracking-wide text-white uppercase">
                  KENAPA
                  <br />
                  MASVIA?
                </h2>
              </div>

              {/* 3 Contiguous Columns matching design mockup */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl overflow-hidden rounded-2xl md:rounded-none">
                  {/* Column 1: PRAKTIS (Cream) */}
                  <div className="bg-[#FBF5DD] text-[#1A1A1A] p-6 sm:p-7 md:p-6 lg:p-8 xl:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-between transition-colors">
                    <h3 className="font-anton text-3xl sm:text-4xl tracking-wide uppercase text-[#1A1A1A]">
                      PRAKTIS
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#1A1A1A] font-medium mt-6 sm:mt-8">
                      Gaya hidup modern membuat banyak orang membutuhkan pilihan minuman kesehatan yang praktis.
                    </p>
                  </div>

                  {/* Column 2: NYAMAN DIMINUM (Green background matching page) */}
                  <div className="bg-[#306D29] text-white p-6 sm:p-7 md:p-6 lg:p-8 xl:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-between border-y md:border-y-0 md:border-x border-[#447B3E]/40 transition-colors">
                    <h3 className="font-anton text-3xl sm:text-4xl tracking-wide uppercase text-white leading-tight">
                      NYAMAN
                      <br />
                      DIMINUM
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-white font-medium mt-6 sm:mt-8">
                      Rasa manis dari daun Stevia membuat jamu dapat dikonsumsi tanpa tambahan gula pasir.
                    </p>
                  </div>

                  {/* Column 3: HERBAL (Cream) */}
                  <div className="bg-[#FBF5DD] text-[#1A1A1A] p-6 sm:p-7 md:p-6 lg:p-8 xl:p-10 min-h-[280px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-between transition-colors">
                    <h3 className="font-anton text-3xl sm:text-4xl tracking-wide uppercase text-[#1A1A1A]">
                      HERBAL
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#1A1A1A] font-medium mt-6 sm:mt-8">
                      Dibuat dari kombinasi buah Mahkota Dewa dan daun Stevia sebagai bahan herbal alami yang dipilih untuk menemani gaya hidup sehat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: APA ITU MASVIA? */}
        <section className="py-16 md:py-24 border-t border-[#447B3E]/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl text-center mb-16 tracking-wide text-white uppercase">
              APA ITU MASVIA?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
              {/* Left Column: Product Pouch & Short Description */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center gap-6">
                <div className="w-56 sm:w-64 md:w-72 filter drop-shadow-[-12px_18px_24px_rgba(0,0,0,0.55)] flex-shrink-0 transition-transform hover:scale-105 duration-300">
                  <Image
                    src="/images/masvia-front.png"
                    alt="Masvia Jamu Celup Pouch"
                    width={320}
                    height={440}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-base sm:text-lg leading-relaxed text-white/90 font-medium text-center sm:text-left lg:text-left">
                  Masvia adalah jamu celup berbahan dasar buah Mahkota Dewa dan
                  daun Stevia. Produk ini dibuat sebagai minuman herbal yang
                  praktis diseduh dan dapat dikonsumsi tanpa tambahan gula
                  pasir.
                </p>
              </div>

              {/* Right Column: Ingredients Showcase */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {/* Mahkota Dewa Card */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/mahkota-dewa.png"
                      alt="Buah Mahkota Dewa"
                      width={320}
                      height={220}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <div className="sm:col-span-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Buah Mahkota Dewa
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-white/90">
                      Mahkota Dewa mengandung berbagai senyawa bioaktif seperti
                      flavonoid, saponin, alkaloid, dan polifenol yang
                      berpotensi membantu mengelola kadar gula darah. Potensi
                      tersebut menjadi salah satu alasan Mahkota Dewa dipilih
                      sebagai bahan utama dalam Jamu Celup Masvia.
                    </p>
                  </div>
                </div>

                {/* Daun Stevia Card */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/images/daun-stevia.png"
                      alt="Daun Stevia"
                      width={320}
                      height={220}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <div className="sm:col-span-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Daun Stevia
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-white/90">
                      Daun Stevia digunakan sebagai pemanis alami dalam formulasi
                      Masvia untuk membantu menyeimbangkan rasa Mahkota Dewa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CARA KONSUMSI (Text CARA KONSUMSI is placed ABOVE the points) */}
        <section className="py-16 md:py-24 border-t border-[#447B3E]/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading ABOVE the step points */}
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white uppercase">
                CARA KONSUMSI
              </h2>
            </div>

            {/* 4 Step Boxes */}
            <div className="space-y-4 sm:space-y-5">
              {/* Step 1 */}
              <div className="bg-[#447B3E] border-2 border-white/20 rounded-2xl p-4 sm:p-5 flex items-center gap-5 shadow-md hover:translate-x-1 transition-transform">
                <span className="font-anton text-4xl sm:text-5xl text-white w-10 sm:w-12 text-center flex-shrink-0">
                  1
                </span>
                <p className="text-base sm:text-lg font-medium text-white">
                  Ambil satu kantong Jamu Celup Masvia.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#FBF5DD] text-[#1A1A1A] rounded-2xl p-4 sm:p-5 flex items-center gap-5 shadow-md hover:translate-x-1 transition-transform">
                <span className="font-anton text-4xl sm:text-5xl text-[#1A1A1A] w-10 sm:w-12 text-center flex-shrink-0">
                  2
                </span>
                <p className="text-base sm:text-lg font-semibold text-[#1A1A1A]">
                  Masukkan ke dalam cangkir berisi air panas 200ml.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#447B3E] border-2 border-white/20 rounded-2xl p-4 sm:p-5 flex items-center gap-5 shadow-md hover:translate-x-1 transition-transform">
                <span className="font-anton text-4xl sm:text-5xl text-white w-10 sm:w-12 text-center flex-shrink-0">
                  3
                </span>
                <p className="text-base sm:text-lg font-medium text-white">
                  Biarkan sari bahan herbal larut ke dalam air.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-[#FBF5DD] text-[#1A1A1A] rounded-2xl p-4 sm:p-5 flex items-center gap-5 shadow-md hover:translate-x-1 transition-transform">
                <span className="font-anton text-4xl sm:text-5xl text-[#1A1A1A] w-10 sm:w-12 text-center flex-shrink-0">
                  4
                </span>
                <p className="text-base sm:text-lg font-semibold text-[#1A1A1A]">
                  Buang kantong teh dan jamu herbal siap dinikmati.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: YUK COBAIN! (CTA BANNER) */}
        <section className="py-16 md:py-24 border-t border-[#447B3E]/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Pouch Image with enhanced drop shadow */}
              <div className="flex justify-center">
                <div className="w-56 sm:w-72 filter drop-shadow-[-16px_22px_28px_rgba(0,0,0,0.65)] transition-transform hover:scale-105 duration-300">
                  <Image
                    src="/images/masvia-front.png"
                    alt="Coba Jamu Masvia"
                    width={320}
                    height={440}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text & Button */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white uppercase">
                  YUK COBAIN!
                </h2>
                <Link
                  href="/produk"
                  className="bg-[#FBF5DD] hover:bg-white text-[#1A1A1A] font-semibold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Beli sekarang
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
