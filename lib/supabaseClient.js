// "use client";

// import { useEffect, useState } from "react";
// import type { DataAduan } from "../../data/data";
// import supabase from "@/lib/db";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Home() {
//   const [aduan, setAduan] = useState<DataAduan[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchAduan = async () => {
//       try {
//         const { data, error } = await supabase.from("aduan").select("*");
//         if (error) console.error("Error fetch aduan:", error.message);
//         else if (data) setAduan(data as DataAduan[]);
//       } catch (err) {
//         console.error("Unexpected error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAduan();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col bg-white text-black px-4 py-6">
//       {/* Konten utama */}
//       <div className="flex-grow flex flex-col justify-start items-center mt-10">
//         <h1 className="text-3xl font-bold mb-2 text-center">
//           Halaman Home
//         </h1>
//         <p className="text-gray-600 text-center mb-10">
//           Selamat datang di belajar Next.js 🚀
//         </p>

//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           Daftar Keluh Kesah
//         </h2>

//         {loading ? (
//           <p className="text-gray-500 text-center">Loading...</p>
//         ) : aduan.length === 0 ? (
//           <p className="text-gray-500 text-center">Belum ada keluh kesah.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
//             {aduan.map((a) => (
//               <Card
//                 key={a.id}
//                 className="bg-white border shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <CardContent>
//                   <p className="font-bold">{a.nama}</p>
//                   <p className="text-gray-700 mt-2">{a.keluh_kesah}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
