"use client";

import { useEffect } from "react";

export default function HomeStartupScroll({ targetId }) {
  useEffect(() => {
    if (window.location.hash && window.location.hash !== `#${targetId}`) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const scrollToTarget = () => {
      const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top);
      window.scrollTo({ top, left: 0, behavior: "auto" });
    };

    scrollToTarget();
    window.requestAnimationFrame(scrollToTarget);
  }, [targetId]);

  return null;
}
