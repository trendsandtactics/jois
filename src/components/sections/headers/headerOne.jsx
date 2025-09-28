import React, { useState } from 'react'
import DesktopMenu from './desktopMenu'
import MobileMenu from './mobileMenu'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
import TopHeader from './topHeader'
import StickyHeader from '@/components/ui/stickyHeader'

// ✅ Jois logo

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

                {/* === Jois Logo === */}
                <Link to="/" className="flex items-center">
                  <img
                    src="/jois.png"
                    alt="Jois Logo"
                    className="h-15 w-auto"
                  />
                </Link>

                {/* === Menu + CTA + Mobile Toggle === */}
                <div className="flex items-center gap-6">
                  <DesktopMenu />

                  {/* CTA button using logo colors */}
                  <Button
                    asChild
                    className="sm:flex hidden 
                               bg-[#f93975] text-white 
                               hover:bg-[#fa3a76] 
                               focus:ring-2 focus:ring-[#f93975]"
                  >
                    <Link to="/contact-us">
                      Apply Online<FaArrowRight className="ml-2" />
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
