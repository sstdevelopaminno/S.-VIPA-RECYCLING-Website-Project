"use client";

export function BackToTop({ label }: { label: string }) {
  return <button className="back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{label}</button>;
}
