import { AiOutlineMenu, AiOutlineDoubleRight } from "react-icons/ai";
import { BsListTask, BsCheckAll } from "react-icons/bs";
import { useContext } from "react";
import TasksStore from "../context/store";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { tasks, upcoming, today } = useContext(TasksStore);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="pt-3 pl-3">
          <label htmlFor="my-drawer" className=" drawer-button lg:hidden">
            <AiOutlineMenu />
          </label>
        </div>
        {/* ALL PAGES GOES HERE */}
        <div className="py-4 px-4 lg:px-12">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-6 w-80 bg-base-200 text-base-content">
          <li className="text-xl font-bold uppercase my-2">Menu</li>
          <input
            type="text"
            className=" rounded-xl px-3 py-2 mb-4 focus:outline-none border border-gray-500/30 bg-transparent"
            placeholder="🔍 Search"
          />
          <li className="text-sm font-bold uppercase my-2">tasks</li>
          <li>
            <Link to="/">
              <BsCheckAll /> All
              <span className="px-2 text-sm rounded-lg bg-success text-white font-semibold">
                {tasks?.length}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/today">
              <BsListTask /> Today
              <span className="px-2 text-sm rounded-lg bg-red-500 text-white font-semibold">
                {today?.length}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/upcomming">
              <AiOutlineDoubleRight /> Upcoming
              <span className="px-2 text-sm rounded-lg bg-cyan-500 text-white font-semibold">
                {upcoming?.length}
              </span>
            </Link>
          </li>
          <li className="text-sm font-bold uppercase my-2">lists</li>
          <li>
            <a>
              <span className="w-3 h-3 bg-red-500 rounded"></span> Personal
            </a>
          </li>
          <li>
            <a>
              <span className="w-3 h-3 bg-cyan-500 rounded"></span> Project
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
