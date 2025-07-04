import Header from "../common/Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
