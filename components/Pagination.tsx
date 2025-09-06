"use client"

type PaginationProps = {
  halamanSekarang: number
  TotalHalaman: number
  OnChangeHalaman: (halaman: number) => void
}

export default function Pagination({
  halamanSekarang,
  TotalHalaman,
  OnChangeHalaman,
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {/* Tombol Prev */}
      <button
        onClick={() => OnChangeHalaman(halamanSekarang - 1)}
        className="px-3 py-1 border rounded bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-40"
        disabled={halamanSekarang === 1}
      >
        Prev
      </button>

      {/* Nomor Halaman */}
      <span className="px-4 py-1 bg-gray-900 rounded text-white">
        Halaman {halamanSekarang} dari {TotalHalaman}
      </span>

      {/* Tombol Next */}
      <button
        onClick={() => OnChangeHalaman(halamanSekarang + 1)}
        className="px-3 py-1 border rounded bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-40"
        disabled={halamanSekarang === TotalHalaman}
      >
        Next
      </button>
    </div>
  )
}
