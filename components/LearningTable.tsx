"use client"

import { useState } from "react"
import Pagination from "../components/Pagination" // sesuaikan path nya

type Topic = {
  id: number
  materi: string
  kategori: string
  estimasi: string
  selesai: boolean
}

export default function LearningTable() {
  const [topics, setTopics] = useState<Topic[]>([
    // 🔰 DASAR FRONTEND
    { id: 1, materi: "Setup Project & Struktur Folder", kategori: "Dasar", estimasi: "2 hari", selesai: false },
    { id: 2, materi: "Routing (Link, useRouter, Nested Routes)", kategori: "Dasar", estimasi: "3 hari", selesai: false },
    { id: 3, materi: "Layouts & Komponen Reusable", kategori: "Dasar", estimasi: "3 hari", selesai: false },
    { id: 4, materi: "Styling (TailwindCSS, CSS Modules, SCSS)", kategori: "Dasar", estimasi: "4 hari", selesai: false },
    { id: 5, materi: "Form Handling (controlled & uncontrolled)", kategori: "Dasar", estimasi: "3 hari", selesai: false },
    { id: 6, materi: "State Management (useState, useEffect)", kategori: "Data & State", estimasi: "4 hari", selesai: false },
    { id: 7, materi: "Context API / Zustand / Redux Toolkit", kategori: "Data & State", estimasi: "1 minggu", selesai: false },
    { id: 8, materi: "Data Fetching (SSR, SSG, ISR, CSR)", kategori: "Data & State", estimasi: "1 minggu", selesai: false },
    { id: 9, materi: "API Routes (REST API di Next.js)", kategori: "Backend", estimasi: "5 hari", selesai: false },
    { id: 10, materi: "GraphQL API (Apollo / Yoga)", kategori: "Backend", estimasi: "1 minggu", selesai: false },
    { id: 11, materi: "Prisma ORM + PostgreSQL/MySQL", kategori: "Database", estimasi: "1 minggu", selesai: false },
    { id: 12, materi: "Relasi Database (One-to-Many, Many-to-Many)", kategori: "Database", estimasi: "5 hari", selesai: false },
    { id: 13, materi: "CRUD Fullstack (Todo App + DB)", kategori: "Database", estimasi: "1 minggu", selesai: false },
    { id: 14, materi: "NextAuth.js (login/register, OAuth)", kategori: "Auth", estimasi: "1 minggu", selesai: false },
    { id: 15, materi: "Middleware & Proteksi Route", kategori: "Auth", estimasi: "3 hari", selesai: false },
    { id: 16, materi: "Role-based Access Control (RBAC)", kategori: "Auth", estimasi: "5 hari", selesai: false },
    { id: 17, materi: "File Upload (Cloudinary / Supabase)", kategori: "Advanced", estimasi: "4 hari", selesai: false },
    { id: 18, materi: "Optimasi (next/image, next/font, caching)", kategori: "Advanced", estimasi: "1 minggu", selesai: false },
    { id: 19, materi: "Internationalization (i18n)", kategori: "Advanced", estimasi: "3 hari", selesai: false },
    { id: 20, materi: "Testing (Jest, React Testing Library)", kategori: "Advanced", estimasi: "1 minggu", selesai: false },
    { id: 21, materi: "Deployment ke Vercel", kategori: "Deployment", estimasi: "2 hari", selesai: false },
    { id: 22, materi: "Deployment ke VPS / Docker", kategori: "Deployment", estimasi: "5 hari", selesai: false },
    { id: 23, materi: "CI/CD Workflow (GitHub Actions)", kategori: "Deployment", estimasi: "1 minggu", selesai: false },
    { id: 24, materi: "Caching & Performance (Redis, Edge Functions)", kategori: "Expert", estimasi: "1 minggu", selesai: false },
    { id: 25, materi: "Microservices & API Gateway", kategori: "Expert", estimasi: "1-2 minggu", selesai: false },
    { id: 26, materi: "Real-time Apps (WebSocket, Pusher, Socket.IO)", kategori: "Expert", estimasi: "1 minggu", selesai: false },
    { id: 27, materi: "Security Best Practices (Helmet, Rate Limit)", kategori: "Expert", estimasi: "4 hari", selesai: false },
    { id: 28, materi: "Capstone Project (Fullstack SaaS / E-Commerce)", kategori: "Project", estimasi: "4-6 minggu", selesai: false },
  ])

  const [halamanSekarang, setHalamanSekarang] = useState(1)
  const jumlahPerHalaman = 5

  const indexAwal = (halamanSekarang - 1) * jumlahPerHalaman
  const indexAkhir = indexAwal + jumlahPerHalaman
  const topicsDitampilkan = topics.slice(indexAwal, indexAkhir)

  const TotalHalaman = Math.ceil(topics.length / jumlahPerHalaman)

  const toggleSelesai = (id: number) => {
    setTopics(
      topics.map((t) =>
        t.id === id ? { ...t, selesai: !t.selesai } : t
      )
    )
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl shadow-green-500/20 p-6">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-green-400 drop-shadow-lg">
          🚀 Roadmap Fullstack Next.js (Expert Path)
        </h1>

        <div className="overflow-hidden rounded-xl border border-gray-700">
          <table className="w-full text-white border-collapse">
            <thead className="bg-gray-800/80">
              <tr>
                <th className="p-4 text-center">Selesai</th>
                <th className="p-4 text-left">Materi</th>
                <th className="p-4 text-left">Kategori</th>
                <th className="p-4 text-left">Estimasi</th>
              </tr>
            </thead>
            <tbody>
              {topicsDitampilkan.map((t) => (
                <tr
                  key={t.id}
                  className={`transition-all duration-300 
                    ${t.selesai ? "bg-green-900/30 hover:bg-green-900/50" : "hover:bg-gray-800/60"} 
                    border-b border-gray-700`}
                >
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={t.selesai}
                      onChange={() => toggleSelesai(t.id)}
                      className="w-5 h-5 accent-green-500 cursor-pointer"
                    />
                  </td>
                  <td className={`p-4 ${t.selesai ? "line-through text-gray-400" : ""}`}>
                    {t.materi}
                  </td>
                  <td className="p-4">{t.kategori}</td>
                  <td className="p-4">{t.estimasi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          halamanSekarang={halamanSekarang}
          TotalHalaman={TotalHalaman}
          OnChangeHalaman={(halaman) => setHalamanSekarang(halaman)}
        />
      </div>
    </div>
  )
}
