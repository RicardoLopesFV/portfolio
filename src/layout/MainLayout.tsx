import type { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./MainLayout.scss";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  // Inicializa o Locomotive Scroll quando o Layout é montado
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        duration: 0.6, // Ajuste a duração (lentidão) do scroll aqui
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de easing premium
      },
    });

    // Limpeza (Cleanup) vital para a performance do React
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="layout">
      <div className="layout__noise"></div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
