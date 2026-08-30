import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mq.matches && !reduce.matches);
    update();
    mq.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  return (
    <div className="relative min-h-screen">
      {enabled ? (
        <div
          className="glow-cursor hidden md:block"
          style={{ left: pos.x, top: pos.y }}
          aria-hidden="true"
        />
      ) : null}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
