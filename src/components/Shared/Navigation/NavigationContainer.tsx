import React, { useRef, useEffect, useState } from "react";
import { useScrollVisibility } from "../../../customHooks/useScrollVisibility";
import BrillantLogo from "../BrillantLogo";

const NavigationContainer = ({
  children,
  className,
  logoClassName,
}: {
  children: React.ReactNode;
  className?: string;
  logoClassName?: string;
}) => {
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
           w-full bg-white
          ${
            isStickyNav
              ? "fixed top-0 left-0 right-0 z-50 animate-slideDown"
              : ""
          }
          ${className}
        `}>
        <div className="flex items-center width-lg">
          <div className="md:pr-10 pr-4">
            <BrillantLogo className={`md:w-[8.5rem] w-[6rem] ${logoClassName}`} />
          </div>
          <div
            className={`flex flex-1 ${
              React.Children.count(children) === 1
                ? "justify-end"
                : "justify-between"
            } items-center`}>
            {children}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationContainer;
