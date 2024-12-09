import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

const Layout = () => {
  return (
    <main className="font-[inter] w-full grid grid-cols-[250px_1fr] grid-rows-1">
      <Sidebar />

      <section className="bg-gray h-full">
        <Header />
        <div className="px-[50px] py-6">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
export default Layout;