import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface LayoutShellProps {
  children: ReactNode;
}

export const LayoutShell = ({ children }: LayoutShellProps) => {
  return (
    <div className="layout-shell">
      <SiteHeader />
      <main className="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
};

