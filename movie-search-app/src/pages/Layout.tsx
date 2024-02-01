import { Outlet } from "react-router-dom";
import "./../styles/main.scss";

export const Layout = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
