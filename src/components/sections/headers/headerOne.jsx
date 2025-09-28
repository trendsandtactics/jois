import React from 'react'
import TopHeader from './topHeader'
import StickyHeader from '@/components/ui/stickyHeader'

// ✅ import the new logo
import joisLogo from "@/assets/images/jois.png"

const HeaderOne = () => {
  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 transition-[top] duration-300 z-40"
      >
        <div id="header-container">
          {/* Keep the top info bar */}
          <TopHeader />

          {/* Header main area with only the logo */}
          <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">
            <div className="container py-5">
              <div className="flex justify-center items-center">
                <img
                  src={joisLogo}
                  alt="Jois Logo"
                  className="h-12 w-auto" // adjust height as needed
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  )
}

export default HeaderOne
