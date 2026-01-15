"use client";

import { useHeadingReveal } from "@/components/useHeadingReveal";

export default function ClientEffects({
  children,
}: {
  children: React.ReactNode;
}) {
  useHeadingReveal();
  return <>{children}</>;
}
