"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "@/components/Common/Icons";

const Sidebar = ({ sidebarOpen, menuItems }) => {
  const pathname = usePathname();

  const pathNameIncludes = (path) => {
    return pathname.endsWith(path);
  };

  const getColorFromPath = (path) => {
    return pathNameIncludes(path) ? "#3b83f6" : "#3A3B3C";
  };

  return (
    <aside
      className={`left-0 top-0 z-50 flex flex-1 h-[825px] w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 mt-8 ml-0 md:ml-0 lg:ml-8 rounded-3xl ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-8 px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-5">
              {/* <!-- Menu Item Dashboard --> */}
              {menuItems.map((item, index) => {
                if (item.type === "item") {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className={`group relative flex items-start gap-2.5 rounded-sm py-5 px-4 font-medium hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-meta-4 ${
                          pathNameIncludes(item.link) &&
                          "bg-gray-100 text-blue-500"
                        }`}
                      >
                        <Icons
                          name={item.icon}
                          size={18}
                          color={getColorFromPath(item.link)}
                        />
                        {item.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
            <div className="absolute bottom-0">
              <ul className="mb-6 flex flex-col gap-5">
                {/* <!-- Menu Item Settings --> */}
                {menuItems.map((item, index) => {
                  if (item.type === "setting") {
                    return (
                      <li key={index}>
                        <Link
                          href={item.link}
                          className={`group relative flex items-start gap-2.5 rounded-sm py-5 px-4 font-medium hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-meta-4 ${
                            pathNameIncludes(item.link) &&
                            "bg-gray-100 text-blue-500"
                          }`}
                        >
                          <Icons
                            name={item.icon}
                            size={18}
                            color={getColorFromPath(item.link)}
                          />
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
