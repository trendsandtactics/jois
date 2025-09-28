import React, { useState } from 'react'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
import TopHeader from './topHeader'
import StickyHeader from '@/components/ui/stickyHeader'

// ✅ New Jois logo
import joisLogo from "@/assets/images/jois.png"

const HeaderOne = () => {
  const [isMobleMenuActive, setIsMobleMenuActive] = useState(false)

  return (
    <StickyHeader>
      <header id="header" className="sticky top-0 transition-[top] duration-300 z-40">
        <div id="header-container">
          <TopHeader />

          <div className="[.header-pinned_&]:shadow-md bg-background transition-all duration-300">
            <div className="container py-5">
              <div className="flex justify-between items-center">

                {/* === Jois Logo only === */}
                <Link to="/" className="flex items-center">
                  <img
                    src={joisLogo}
                    alt="Jois Logo"
                    className="h-12 w-auto"   // adjust size if needed
                  />
                </Link>

                {/* === Right side: Menu + CTA + Mobile Toggle === */}
                <div className="flex items-center gap-6">
                  <DesktopMenu />

                  <Button asChild variant="ghost" className="sm:flex hidden">
                    <Link to="/contact-us">
                      Get A Quote <FaArrowRight className="ml-2" />
                    </Link>
                  </Button>

                  {/* Mobile menu toggle */}
                  <div
                    className="flex xl:hidden flex-col items-end cursor-pointer transition-all duration-500"
                    onClick={() => setIsMobleMenuActive(true)}
                  >
                    <span className="block h-[3px] w-5 bg-muted"></span>
                    <span className="block h-[3px] w-7.5 bg-muted mt-2"></span>
                    <span className="block h-[3px] w-5 bg-muted mt-2"></span>
                  </div>

                  <MobileMenu
                    isMobleMenuActive={isMobleMenuActive}
                    setIsMobleMenuActive={setIsMobleMenuActive}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  )
}

export default HeaderOne
