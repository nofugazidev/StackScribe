import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Home from "../pages/home";
import EditBlog from "../pages/editBlog";
import CreateBlog from "../pages/createBlog";
import Settings from "../pages/settings";

import { BiHome, BiPencil, BiBookAdd, BiCog } from "react-icons/bi";

const DashboardLayout: React.FC = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "settings":
        return <Settings />;
      case "editBlog":
        return <EditBlog />;
      case "createBlog":
        return <CreateBlog />;
      default:
        return <Home />;
    }
  };
  const auth = useAuth();

  const user = auth?.user;
  const logout = auth?.logout;
  
  return (
    <>
      <main className="flex items-start">
        <div className="left flex-[.15] border-r-2 h-[100vh] px-10 py-5">
          <header className="logo">
            <h2 className="cursor-pointer md:text-4xl text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              StackScribe
            </h2>
          </header>

          <section className="dash-menu pt-10">
            <p
              onClick={() => setActivePage("home")}
              className={`flex items-center gap-2 text-[20px] capitalize cursor-pointer pt-7 ${
                activePage === "home" ? "font-medium" : "font-normal"
              } `}
            >
              <BiHome className="" />
              home
            </p>
            <p
              onClick={() => setActivePage("createBlog")}
              className={`flex items-center gap-2 text-[20px] capitalize cursor-pointer pt-7 ${
                activePage === "createBlog" ? "font-medium" : "font-normal"
              } `}
            >
              <BiBookAdd className="" />
              create Blog
            </p>
            <p
              onClick={() => setActivePage("editBlog")}
              className={`flex items-center gap-2 text-[20px] capitalize cursor-pointer pt-7 ${
                activePage === "editBlog" ? "font-medium" : "font-normal"
              } `}
            >
              <BiPencil className="" />
              edit Blog
            </p>
            <p
              onClick={() => setActivePage("settings")}
              className={`flex items-center gap-2 text-[20px] capitalize cursor-pointer pt-7 ${
                activePage === "settings" ? "font-medium" : "font-normal"
              } `}
            >
              <BiCog className="" />
              settings
            </p>
          </section>
        </div>
        <div className="right flex-[.85]">
          <div className="top border-b-2 px-4 py-5 flex flex-row items-center justify-between">
            <h3 className="font-medium text-2xl capitalize">welcome back 👋</h3>
            <div className="flex flex-row gap-4 items-center">
              <h1 className="lowercase font-semibold underline">{user?.email}</h1>
              <button onClick={logout} disabled={!logout} className="rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-5 capitalize text-white font-medium cursor-pointer">logout</button>
            </div>
          </div>
          <div className="main-area px-4 py-5">{renderPage()}</div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
