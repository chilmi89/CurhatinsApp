"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";

interface Aduan {
  id: number;
  nama: string;
  keluh_kesah: string;
  created_at?: string;
}

const KeluhCard = () => {
  const [aduanList, setAduanList] = useState<Aduan[]>([]);
  const [loading, setLoading] = useState(true);

  // 🎨 Variasi warna card
  const cardColors = [
    "from-purple-700 via-purple-900 to-black",
    "from-blue-600 via-blue-900 to-black",
    "from-pink-600 via-pink-900 to-black",
    "from-green-600 via-green-900 to-black",
    "from-yellow-600 via-yellow-800 to-black",
  ];

  useEffect(() => {
    const fetchAduan = async () => {
      try {
        const res = await fetch("/api/aduan", { cache: "no-store" });
        const result = await res.json();
        if (result.data) {
          setAduanList(result.data);
        }
      } catch (err) {
        console.error("❌ Error fetching aduan:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAduan();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-400 mt-20 text-center animate-pulse">
        Loading data...
      </p>
    );
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full max-w-7xl mx-auto">
        {aduanList.length > 0 ? (
          aduanList.map((aduan, index) => {
            const gradient = cardColors[index % cardColors.length]; // pilih warna berdasarkan index

            return (
              <motion.div
                key={aduan.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
              >
                <Card
                  className={`bg-gradient-to-br ${gradient} border border-gray-700 shadow-2xl rounded-3xl hover:shadow-xl hover:shadow-purple-400/40 hover:rotate-1 hover:scale-[1.07] transition-all duration-500 h-full p-8`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 25, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <User className="text-white w-9 h-9 drop-shadow-lg" />
                      </motion.div>
                      <CardTitle className="text-white font-bold text-xl tracking-wide drop-shadow">
                        {aduan.nama}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-gray-100 flex items-start gap-3 text-base leading-relaxed">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: -15 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <MessageCircle className="w-6 h-6 text-white mt-1 drop-shadow-lg" />
                    </motion.div>
                    <p>{aduan.keluh_kesah}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        ) : (
          <p className="text-gray-400 text-center col-span-4">
            Belum ada aduan.
          </p>
        )}
      </div>
    </div>
  );
};

export default KeluhCard;
