import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import PageLayout from "./components/layout/PageLayout";
import { Toaster } from "react-hot-toast";

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default App;
