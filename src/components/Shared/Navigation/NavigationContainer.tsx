import React, { useRef, useEffect, useState } from "react";
import BrillantLogo from "../../../assets/icons/BrillantLogo";
import { useScrollVisibility } from "../../../customHooks/useScrollVisibility";

const NavigationContainer = ({ children }: { children: React.ReactNode }) => {
  const isStickyNav = useScrollVisibility();
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      {isStickyNav && <div style={{ height: `${headerHeight}px` }} />}
      <header
        ref={headerRef}
        className={`
          flex items-center width-lg md:py-8 py-4 bg-white
          ${
            isStickyNav
              ? "fixed top-0 left-0 right-0 z-50 animate-slideDown"
              : ""
          }
        `}>
        <div className="md:pr-10 pr-4">
          <BrillantLogo className="md:w-[8.5rem] w-[6rem]" />
        </div>
        <div
          className={`flex flex-1 ${
            React.Children.count(children) === 1
              ? "justify-end"
              : "justify-between"
          } items-center`}>
          {children}
        </div>
      </header>
    </>
  );
};

export default NavigationContainer;
