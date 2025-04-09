"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading and then redirect to the main content
    const timer = setTimeout(() => {
      setLoading(false)
      // After loading is complete, redirect to the main content page
      // You can change this to your desired route
      setTimeout(() => {
        router.push("/portfolio")
      }, 500)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-[#f5f7f7] flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute h-screen w-px bg-gray-300"></div>

        {/* Logo circle */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden">
          <div className="text-[#c4a48e] text-2xl font-bold">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
