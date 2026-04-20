import { MainLayout } from "./layout/MainLayout";
import { Terminal } from "./components/Terminal/Terminal";
import { About } from "./components/About/About";

export const App = () => {
  return (
    <MainLayout>
      <Terminal />
      <About />
    </MainLayout>
  );
};
