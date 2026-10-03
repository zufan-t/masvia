"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  CheckCircle,
  Storefront,
  ArrowSquareOut,
  DownloadSimple,
  Info,
} from "@phosphor-icons/react";

const PRICE_PER_PACK = 15000; // Rp 15.000 per pouch (10 gram, 5 kantong celup)

export default function ProdukPage() {
  const [nama, setNama] = useState("");
  const [opsiPengambilan, setOpsiPengambilan] = useState("Dikirim kurir");
  const [alamat, setAlamat] = useState("");
  const [jumlah, setJumlah] = useState<number | string>(1);
  const [metodeBayar, setMetodeBayar] = useState<"QRIS" | "Cash">("QRIS");
  const [addedNotice, setAddedNotice] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    nama: string;
    opsiPengambilan: string;
    alamat: string;
    qty: number;
    metode: string;
    totalFormatted: string;
  } | null>(null);

  // Computed Values from form inputs
  const qty = typeof jumlah === "number" ? Math.max(1, jumlah) : parseInt(jumlah) || 1;
  const totalPembelian = qty * PRICE_PER_PACK;

  const currentMetode = metodeBayar;

  const formattedTotal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(totalPembelian);

  // Text data from form is '-' if before submit
  const displayNama = submittedData ? submittedData.nama : "-";
  const displayAlamat = submittedData ? submittedData.alamat : "-";
  const displayJumlah = submittedData ? `${submittedData.qty} pouch` : "-";
  const displayMetode = submittedData ? submittedData.metode : "-";
  const displayTotal = submittedData ? submittedData.totalFormatted : "-";

  // Generate Telegram Message according to template in design.md
  const handleTelegramCheckout = () => {
    let orderToUse = submittedData;

    if (!orderToUse) {
      if (!nama.trim()) {
        setErrorMessage("Silakan lengkapi formulir dan klik 'Masukkan keranjang' terlebih dahulu.");
        document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (opsiPengambilan === "Dikirim kurir" && !alamat.trim()) {
        setErrorMessage("Silakan masukkan alamat pengiriman Anda.");
        document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const finalAlamat =
        opsiPengambilan === "Ambil sendiri"
          ? "Ambil sendiri di tempat (Semarang/Demak)"
          : alamat.trim();

      const newOrder = {
        nama: nama.trim(),
        opsiPengambilan,
        alamat: finalAlamat,
        qty,
        metode: currentMetode,
        totalFormatted: formattedTotal,
      };

      setSubmittedData(newOrder);
      orderToUse = newOrder;
    }

    const paymentProofInstruction =
      orderToUse.metode === "QRIS"
        ? "\nBukti pembayaran: (Lampirkan foto/screenshot bukti pembayaran di sini)"
        : "\nBukti pembayaran: Bayar di tempat (COD) / (Lampirkan bukti transfer jika bayar via QRIS)";

    const message = `Halo Kak!
Aku mau pesan jamu Masvia dengan keterangan berikut
Nama: ${orderToUse.nama}
Opsi pengambilan: ${orderToUse.opsiPengambilan}
Alamat: ${orderToUse.alamat}
Metode pembayaran: ${orderToUse.metode}
Jumlah barang: ${orderToUse.qty} pouch
Total pembelian: ${orderToUse.totalFormatted}
${paymentProofInstruction}
Terimakasih!`;

    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://t.me/+6289504573745?text=${encodedMessage}`;
    window.open(telegramUrl, "_blank");
  };

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!nama.trim()) {
      setErrorMessage("Silakan isi nama Anda terlebih dahulu.");
      return;
    }

    if (opsiPengambilan === "Dikirim kurir" && !alamat.trim()) {
      setErrorMessage("Silakan isi alamat pengiriman Anda.");
      return;
    }

    const finalAlamat =
      opsiPengambilan === "Ambil sendiri"
        ? "Ambil sendiri di tempat (Semarang/Demak)"
        : alamat.trim();

    setSubmittedData({
      nama: nama.trim(),
      opsiPengambilan,
      alamat: finalAlamat,
      qty,
      metode: currentMetode,
      totalFormatted: formattedTotal,
    });

    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);

    // Smooth scroll to order summary and QRIS code
    document.getElementById("order-summary")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex-grow py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: Product Mockup & Order Form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Product Visual Mockup (No white/grey background card) */}
              <div className="flex items-center justify-center py-4">
                <div className="filter drop-shadow-[-16px_22px_28px_rgba(0,0,0,0.65)] transition-transform hover:scale-[1.02] duration-300">
                  <Image
                    src="/images/masvia-double.png"
                    alt="Tampak Depan dan Belakang Kemasan Jamu Masvia"
                    width={700}
                    height={460}
                    className="w-full h-auto max-h-[420px] object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Order Form Card (Cream Container) */}
              <div className="bg-[#FBF5DD] text-[#1A1A1A] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl selection:bg-[#306D29] selection:text-white">
                <form id="order-form" onSubmit={handleAddToCart} className="space-y-6">
                  {/* Field: Nama */}
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2 text-[#1A1A1A]">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan nama anda"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-[#E0DBC5] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#306D29] transition-all text-sm sm:text-base selection:bg-[#306D29] selection:text-white"
                    />
                  </div>

                  {/* Field: Opsi Pengambilan */}
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-3 text-[#1A1A1A]">
                      Opsi pengambilan
                    </label>

                    <div className="space-y-3">
                      {/* Option 1: Dikirim Kurir */}
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="opsiPengambilan"
                          value="Dikirim kurir"
                          checked={opsiPengambilan === "Dikirim kurir"}
                          onChange={(e) => setOpsiPengambilan(e.target.value)}
                          className="w-4 h-4 text-[#306D29] focus:ring-[#306D29] accent-[#306D29]"
                        />
                        <span className="font-semibold text-sm sm:text-base">
                          Dikirim kurir (Gratis ongkir area UNNES: Sekaran, Patemon, Kalisegoro, Ngijo)
                        </span>
                      </label>

                      {/* Alamat Input (shown when Dikirim kurir is selected) */}
                      {opsiPengambilan === "Dikirim kurir" && (
                        <div className="pl-7 pt-1">
                          <input
                            type="text"
                            placeholder="Masukkan alamat anda"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)}
                            className="w-full px-5 py-3 rounded-2xl bg-white border border-[#E0DBC5] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#306D29] text-sm sm:text-base transition-all selection:bg-[#306D29] selection:text-white"
                          />
                        </div>
                      )}

                      {/* Option 2: Ambil Sendiri */}
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="opsiPengambilan"
                          value="Ambil sendiri"
                          checked={opsiPengambilan === "Ambil sendiri"}
                          onChange={(e) => setOpsiPengambilan(e.target.value)}
                          className="w-4 h-4 text-[#306D29] focus:ring-[#306D29] accent-[#306D29]"
                        />
                        <span className="font-semibold text-sm sm:text-base">
                          Ambil sendiri
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Field: Jumlah Barang */}
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2 text-[#1A1A1A]">
                      Jumlah barang
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min="1"
                        placeholder="Masukan jumlah barang yang akan dibeli"
                        value={jumlah}
                        onChange={(e) => {
                          const val = e.target.value;
                          setJumlah(val === "" ? "" : Math.max(1, parseInt(val) || 1));
                        }}
                        className="w-full px-5 py-3.5 rounded-2xl bg-white border border-[#E0DBC5] text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#306D29] transition-all text-sm sm:text-base selection:bg-[#306D29] selection:text-white"
                      />
                      <span className="text-sm font-semibold text-[#1A1A1A]/80 whitespace-nowrap">
                        pouch
                      </span>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/70 mt-1.5">
                      Harga satuan: Rp 15.000 / pouch (isi 5 kantong herbal celup)
                    </p>
                  </div>

                  {/* Field: Metode Pembayaran */}
                  <div>
                    <label className="block text-base sm:text-lg font-bold mb-2 text-[#1A1A1A]">
                      Metode pembayaran
                    </label>
                    <div className="space-y-3">
                      {/* Option 1: QRIS */}
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="metodeBayar"
                          value="QRIS"
                          checked={metodeBayar === "QRIS"}
                          onChange={() => setMetodeBayar("QRIS")}
                          className="w-4 h-4 text-[#306D29] focus:ring-[#306D29] accent-[#306D29]"
                        />
                        <span className="font-semibold text-sm sm:text-base">
                          QRIS
                        </span>
                      </label>

                      {/* Option 2: Cash */}
                      <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="metodeBayar"
                          value="Cash"
                          checked={metodeBayar === "Cash"}
                          onChange={() => setMetodeBayar("Cash")}
                          className="w-4 h-4 text-[#306D29] focus:ring-[#306D29] accent-[#306D29]"
                        />
                        <span className="font-semibold text-sm sm:text-base">
                          Cash (COD / Bayar di Tempat)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit / Masukkan Keranjang Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-black hover:bg-neutral-800 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingCart size={20} weight="bold" />
                      <span>Masukkan keranjang</span>
                    </button>

                    {addedNotice && (
                      <div className="mt-3 p-3 rounded-xl bg-green-100 border border-green-300 text-[#306D29] text-sm font-semibold flex items-center justify-center gap-2 animate-fade-in">
                        <CheckCircle size={18} weight="fill" />
                        <span>Pesanan berhasil dimasukkan ke ringkasan! Silakan cek kode QRIS &amp; total pembayaran di sebelah kanan.</span>
                      </div>
                    )}

                    {errorMessage && (
                      <div className="mt-3 p-3 rounded-xl bg-red-100 border border-red-300 text-red-700 text-sm font-semibold flex items-center justify-center gap-2 animate-fade-in">
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Order Summary & Checkout Preview */}
            <div id="order-summary" className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="bg-[#306D29] border-2 border-white/20 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm space-y-6">
                <div className="border-b border-white/20 pb-4">
                  <h3 className="font-anton text-2xl text-white tracking-wide">
                    Ringkasan Pesanan
                  </h3>
                </div>

                {/* Field: Nama */}
                <div>
                  <span className="text-xs font-bold text-[#FBF5DD]/80 uppercase tracking-wider block mb-1">
                    Nama
                  </span>
                  <p className="font-anton text-2xl sm:text-3xl tracking-wide text-white break-words">
                    {displayNama}
                  </p>
                </div>

                {/* Field: Alamat */}
                <div>
                  <span className="text-xs font-bold text-[#FBF5DD]/80 uppercase tracking-wider block mb-1">
                    Alamat
                  </span>
                  <p className="font-anton text-xl sm:text-2xl tracking-wide text-white leading-snug break-words">
                    {displayAlamat}
                  </p>
                </div>

                {/* Field: Jumlah Barang */}
                <div>
                  <span className="text-xs font-bold text-[#FBF5DD]/80 uppercase tracking-wider block mb-1">
                    Jumlah barang
                  </span>
                  <p className="font-anton text-2xl sm:text-3xl tracking-wide text-white">
                    {displayJumlah}
                  </p>
                </div>

                {/* Field: Metode Pembayaran */}
                <div>
                  <span className="text-xs font-bold text-[#FBF5DD]/80 uppercase tracking-wider block mb-1">
                    Metode pembayaran
                  </span>
                  <p className="font-anton text-2xl sm:text-3xl tracking-wide text-white">
                    {displayMetode}
                  </p>
                </div>

                {/* Field: Total Pembelian */}
                <div className="pt-2 border-t border-white/20">
                  <span className="text-xs font-bold text-[#FBF5DD]/80 uppercase tracking-wider block mb-1">
                    Total pembelian
                  </span>
                  <p className="font-anton text-3xl sm:text-4xl text-[#FBF5DD] tracking-wide">
                    {displayTotal}
                  </p>
                </div>

                {/* QRIS / PAYMENT SECTION WHEN FORM IS FILLED */}
                {submittedData ? (
                  submittedData.metode === "QRIS" ? (
                    <div className="bg-white text-[#1A1A1A] rounded-2xl p-5 shadow-lg border border-[#E0DBC5] space-y-4 animate-slide-down">
                      <div className="pb-2 border-b border-gray-100">
                        <h4 className="font-bold text-base text-[#1A1A1A]">Scan QRIS Pembayaran</h4>
                      </div>

                      <div className="relative mx-auto max-w-[260px] bg-white p-2 rounded-xl border border-gray-200 shadow-sm text-center">
                        <Image
                          src="/images/qris.png"
                          alt="QRIS Jamu Masvia"
                          width={1200}
                          height={1700}
                          className="w-full h-auto rounded-lg object-contain mx-auto"
                          priority
                        />
                        <div className="mt-3 flex items-center justify-center gap-2">
                          <a
                            href="/images/qris.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-neutral-800 text-white text-xs font-semibold transition-colors shadow-sm"
                          >
                            <ArrowSquareOut size={14} weight="bold" />
                            <span>Buka QR</span>
                          </a>
                          <a
                            href="/images/qris.png"
                            download="QRIS-Jamu-Masvia.png"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#306D29] hover:bg-[#22511C] text-white text-xs font-semibold transition-colors shadow-sm"
                          >
                            <DownloadSimple size={14} weight="bold" />
                            <span>Unduh QR</span>
                          </a>
                        </div>
                      </div>

                      {/* Payment instruction box with white background, no border, and black text */}
                      <div className="bg-white rounded-xl p-3.5 space-y-2 text-[#1A1A1A]">
                        <div className="flex justify-between items-center text-xs font-bold text-[#1A1A1A]">
                          <span>Nominal Transfer:</span>
                          <span className="font-anton text-base tracking-wide text-[#306D29]">
                            {submittedData.totalFormatted}
                          </span>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="space-y-1.5 text-xs text-[#1A1A1A]">
                          <p className="font-bold text-[#1A1A1A]">
                            Petunjuk Pembayaran:
                          </p>
                          <ol className="list-decimal list-inside space-y-1 leading-relaxed text-[11px] sm:text-xs text-[#1A1A1A]">
                            <li>Scan barcode QRIS di atas melalui m-Banking atau E-Wallet (BCA, Mandiri, BRI, BNI, GoPay, OVO, DANA, ShopeePay, dll).</li>
                            <li>Pastikan nominal transfer pas senilai <strong className="font-bold">{submittedData.totalFormatted}</strong>.</li>
                            <li>Simpan <strong>screenshot / foto struk bukti pembayaran</strong>.</li>
                            <li>Klik tombol <strong>Konfirmasi pesanan</strong> di bawah, lalu <strong>lampirkan gambar bukti transfer</strong> pada pesan Telegram Admin.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#22511C] border-2 border-yellow-400 rounded-2xl p-4 text-white text-xs space-y-2 animate-slide-down">
                      <div className="flex items-center gap-2 font-bold text-sm text-yellow-300">
                        <Storefront size={18} weight="bold" />
                        <span>Metode Pembayaran: Cash (COD)</span>
                      </div>
                      <p className="text-white leading-relaxed text-xs">
                        Pembayaran dilakukan secara tunai langsung di tempat saat pesanan diterima. Anda tidak perlu mentransfer sekarang.
                      </p>
                      <p className="text-white/80 text-[11px]">
                        *Jika ingin membayar non-tunai via QRIS, silakan ganti metode ke QRIS pada formulir.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="bg-[#22511C] rounded-2xl p-4 text-white text-xs border-2 border-yellow-400 space-y-1.5 text-center">
                    <p className="font-semibold text-yellow-300 text-sm">
                      Formulir Belum Dimasukkan
                    </p>
                    <p className="text-white leading-relaxed text-xs">
                      Silakan isi formulir pesanan di sebelah kiri dan klik <strong>&quot;Masukkan keranjang&quot;</strong> untuk memunculkan kode QRIS pembayaran dan ringkasan pesanan.
                    </p>
                  </div>
                )}

                {/* Button Konfirmasi Pesanan -> Refer to Telegram */}
                <div className="pt-2 space-y-3">
                  {submittedData && submittedData.metode === "QRIS" && (
                    <div className="p-3.5 rounded-xl bg-yellow-400 border-2 border-yellow-400 text-[#1A1A1A] text-xs flex items-center gap-2.5 shadow-md">
                      <Info size={18} weight="fill" className="text-[#1A1A1A] shrink-0" />
                      <span className="text-[#1A1A1A] font-medium leading-relaxed">
                        Harap <strong>lampirkan foto/screenshot bukti transfer</strong> di chat Telegram setelah mengklik tombol di bawah.
                      </span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleTelegramCheckout}
                    className="w-full py-4 px-6 rounded-full bg-[#FBF5DD] hover:bg-white text-[#1A1A1A] font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer selection:bg-[#306D29] selection:text-white"
                  >
                    <span>Konfirmasi pesanan</span>
                  </button>
                  <p className="text-center text-xs text-[#FBF5DD]/80 mt-1 font-medium">
                    Pesanan Anda akan langsung diteruskan ke Telegram Admin Masvia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
