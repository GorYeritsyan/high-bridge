import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

const Layout = () => {
  return (
    <main className="font-[inter] flex h-screen">
      <Sidebar />

      <section className="bg-gray flex-1 h-full">
        <Header />
        <Outlet />
      </section>
    </main>
  );
};
export default Layout;
