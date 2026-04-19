import type { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import "./MainLayout.scss";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__noise"></div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
