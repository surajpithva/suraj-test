import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import PageLayout from "./components/layout/PageLayout";

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <>
    <PageLayout>
      <AppRoutes />
      </PageLayout>
    </>
  );
}

export default App;
