import Link from "next/link"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header/Navbar */}
        <header className="p-4 bg-blue-600 text-white flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </header>

        {/* Konten halaman */}
        <main className="p-6 min-h-screen bg-gray-50">
          {children}
        </main>

        {/* Footer */}
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2025 Belajar Next.js
        </footer>
      </body>
    </html>
  )
}
