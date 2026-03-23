import Footer from "./Footer";
import NavbarMain from "./NavbarMain";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <NavbarMain />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
