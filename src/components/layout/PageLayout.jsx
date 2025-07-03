import Header from "../common/Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-30 dark:text-white dark:bg-black">{children}</main>
    </>
  );
};

export default PageLayout;
