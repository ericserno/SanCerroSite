"use client";

import { useEffect, useState } from "react";

export function MotionRoot({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return <div className={ready ? "motion-ready" : "motion-pending"}>{children}</div>;
}
