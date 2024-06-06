import React, { useState, useEffect } from "react";
import Circle from "../icons/Circle";
import Menu from "../icons/Menu";
import Close from "../icons/Close";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";
import { motion as m, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container lg:h-[155px]">
      <div className="nav-desktop benguiat h-[87px] lg:flex-1 lg:justify-center lg:text-[48px] text-[33px]">
        <span>PILLARS</span>
        <div className="nav-buttons">
          <div className="relative cursor-pointer">
            <Circle />
            <div className="cart-number fixedCenterXnY endless">0</div>
          </div>

          {!isOpen ? (
            <div
              onClick={() => setIsOpen(true)}
              className="menu-icon lg:hidden block"
            >
              <Menu />
            </div>
          ) : (
            <div onClick={() => setIsOpen(false)} className="menu-icon">
              <Close />
            </div>
          )}
        </div>
      </div>

      <div className="desktop-tab-container endless lg:grid hidden">
        <div className="nav-desktop-tab">SHOP</div>
        <div className="nav-desktop-tab">BEERS</div>
        <div className="nav-desktop-tab">VENUES</div>
        <div className="nav-desktop-tab">COMMUNITY</div>
        <div className="nav-desktop-tab">TRADE</div>
        <div style={{ border: "none" }} className="nav-desktop-tab">
          ACCOUNT
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              delay: 0,
            }}
            className="menu-container endless sm:overflow-hidden overflow-y-auto "
          >
            <div className="mobile-tab-container">
              <div className="nav-mobile-tab">SHOP</div>
              <div className="nav-mobile-tab">BEERS</div>
              <div className="nav-mobile-tab">VENUES</div>
              <div className="nav-mobile-tab">COMMUNITY</div>
              <div className="nav-mobile-tab">TRADE</div>
              <div className="nav-mobile-tab">ACCOUNT</div>
            </div>

            <div className="pattern-bottom-cream"></div>

            <div className="links-container">
              <div className="text-[16px]">JOIN THE COMMUNITY</div>
              <div className="flex gap-2">
                <div className="social">
                  <Facebook />
                </div>
                <div className="social">
                  <Twitter />
                </div>
                <div className="social">
                  <Instagram />
                </div>
              </div>
              <div className="text-[25px] benguiat leading-none">
                @PILLARSBREWERY
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
