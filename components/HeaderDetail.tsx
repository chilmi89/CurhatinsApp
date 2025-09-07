"use client"
import React, { useEffect, useRef } from "react"
import Typed from "typed.js"

const HeaderDetail = () => {
  const el = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: ["✍️ List Keluh Kesah", "💬 Cerita & Aspirasi"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="text-center py-5 bg-gray-900">
      <span ref={el} className="text-2xl md:text-4xl font-bold text-white" />
    </div>
  )
}

export default HeaderDetail
