"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "@/components/Common/Icons";

const Sidebar = ({ sidebarOpen }) => {
  const pathname = usePathname();

  const pathNameIncludes = (path) => {
    return pathname.includes(path);
  };

  const getColorFromPath = (path) => {
    return pathname.includes(path) ? "#3b83f6" : "#3A3B3C";
  };

  return (
    <aside
      className={`left-0 top-0 z-50 flex flex-1 h-screen w-72.5 flex-col overflow-y-hidden bg-white border-r border-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5"></div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  href="/dashboard"
                  className={`group relative flex items-start gap-2.5 rounded-sm py-5 px-4 font-medium hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-meta-4 ${
                    pathNameIncludes("dashboard") && "bg-gray-100 text-blue-500"
                  }`}
                >
                  <Icons
                    name="home"
                    size={18}
                    color={getColorFromPath("dashboard")}
                  />
                  Dashboard
                </Link>
              </li>

              {/* <!-- Menu Item individual --> */}
              <li>
                <Link
                  href="/dashboard/individual-student"
                  className={`group relative flex items-start gap-2.5 rounded-sm py-5 px-4 font-medium hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-meta-4 ${
                    pathNameIncludes("individual-student") &&
                    "bg-gray-100 text-blue-500"
                  }`}
                >
                  <Icons
                    name="pearson"
                    size={18}
                    color={getColorFromPath("individual-student")}
                  />
                  Individual Student
                </Link>
              </li>
              {/* <!-- Menu Item group --> */}
              <li>
                <Link
                  href="/dashboard/group-dynamics"
                  className={`group relative flex items-start gap-2.5 rounded-sm py-5 px-4 font-medium hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-meta-4 ${
                    pathNameIncludes("group-dynamics") &&
                    "bg-gray-100 text-blue-500"
                  }`}
                >
                  <Icons
                    name="people"
                    size={18}
                    color={getColorFromPath("group-dynamics")}
                  />
                  Group Dynamics
                </Link>
              </li>
              {/* <!-- Menu Item group --> */}

              {/* <!-- Menu Item Emotional --> */}
              <li>
                <Link
                  href="/dashboard/emotional-intelligence"
                  className={`group relative flex items-start gap-2.5 rounded-sm py-5 px-4 font-medium hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-meta-4 ${
                    pathNameIncludes("emotional-intelligence") &&
                    "bg-gray-100 text-blue-500"
                  }`}
                >
                  <Icons
                    name="head-side"
                    size={18}
                    color={getColorFromPath("emotional-intelligence")}
                  />
                  Emotional Intelligence
                </Link>
              </li>
              {/* <!-- Menu Item Emotional --> */}

              {/* <!-- Menu Item action --> */}
              <li>
                <Link
                  href="/dashboard/action-items"
                  className={`group relative flex items-start gap-2.5 rounded-sm py-5 px-4 font-medium hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-meta-4 ${
                    pathNameIncludes("action-items") &&
                    "bg-gray-100 text-blue-500"
                  }`}
                >
                  <Icons
                    name="clipboard"
                    size={18}
                    color={getColorFromPath("action-items")}
                  />
                  Action Items
                </Link>
              </li>
              {/* <!-- Menu Item action --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
