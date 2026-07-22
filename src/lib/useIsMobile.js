"use client";
import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
      setIsMobile(mql.matches);
      
      const handler = (e) => setIsMobile(e.matches);
      // Older browsers might not support addEventListener on MediaQueryList
      if (mql.addEventListener) {
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
      } else if (mql.addListener) { // Fallback for older Safari
        mql.addListener(handler);
        return () => mql.removeListener(handler);
      }
    }
  }, [breakpoint]);
  
  return isMobile;
}
