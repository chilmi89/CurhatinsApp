import "./globals.css"
import Navbar from "../../components/Navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Konten halaman */}
        <main className="flex-1 bg-gray-900">
          {children}
        </main>

        {/* Footer */}
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2025 Curhatins App💜
        </footer>
      </body>
    </html>
  )
}
