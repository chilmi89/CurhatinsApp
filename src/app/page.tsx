"use client";

import { useState, useEffect, useTransition } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// 🔹 HeaderBrand hanya di-render di client untuk menghindari hydration error
const HeaderBrand = dynamic(() => import("../../components/HeaderBrand"), {
  ssr: false,
});

export default function Home() {
  const [nama, setNama] = useState("");
  const [keluhKesah, setKeluhKesah] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);
  const [isPending, startTransition] = useTransition();

  // 🔹 Reset error otomatis
  useEffect(() => {
    if (errorMsg) {
      const timer = setTimeout(() => setErrorMsg(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMsg]);

  // 🔹 Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama.trim() || !keluhKesah.trim()) {
      setErrorMsg("Nama dan keluh kesah harus diisi!");
      return;
    }

    setErrorMsg("");

    startTransition(async () => {
      try {
        const res = await fetch("/api/aduan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nama, keluh_kesah: keluhKesah }),
        });
        const result = await res.json();

        if (result.error) {
          setErrorMsg(result.error || "Gagal mengirim keluh kesah");
        } else {
          setNama("");
          setKeluhKesah("");
          setSuccessPopup(true);
        }
      } catch (err) {
        console.error(err);
        setErrorMsg("Terjadi kesalahan saat mengirim data.");
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 pt-20 bg-gray-900">
      {/* 🔹 Container responsive */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
          Kirim Keluh Kesah
        </h1>

        <HeaderBrand />

        {/* 🔹 Form */}
        <Card className="bg-gray-800 border border-gray-700 shadow-lg mt-6">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {errorMsg && <p className="text-red-400">{errorMsg}</p>}

              <input
                type="text"
                placeholder="Nama"
                className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <textarea
                placeholder="Keluh Kesah"
                className="px-4 py-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                rows={5}
                value={keluhKesah}
                onChange={(e) => setKeluhKesah(e.target.value)}
              />

              <button
                type="submit"
                disabled={isPending}
                className={`${
                  isPending
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                } text-white font-semibold py-3 rounded transition text-sm md:text-base`}
              >
                {isPending ? "Mengirim..." : "Kirim"}
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* 🔹 Popup sukses */}
      <Dialog open={successPopup} onOpenChange={setSuccessPopup}>
        <DialogContent className="sm:max-w-md bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-green-400 text-lg">
              🎉 Terima Kasih!
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Keluh kesahmu berhasil dikirim. 🙏
              <br />
              Kami sangat menghargai masukannya 💜
            </DialogDescription>
          </DialogHeader>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white mt-4 w-full"
            onClick={() => setSuccessPopup(false)}
          >
            Tutup
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
