'use client'

import React, { useEffect } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useSmoothScroll, useFadeIn } from '@/lib/hooks'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll()
  useFadeIn()

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

