"use client";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { League_Spartan, Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./globals.css";
import {
  EducatorSidebarItems,
  StudentSidebarItems,
} from "@/utils/sidebarItems";

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const popins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const pathNameIncludes = useCallback((path) => {
    return pathname.includes(path);
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [headerTitle, setHeaderTitle] = useState("Educator Dashboard");
  const [menuItems, setMenuItems] = useState(StudentSidebarItems);

  useEffect(() => {
    if (pathNameIncludes("educator")) {
      setHeaderTitle("Teacher Portal");
      setMenuItems(EducatorSidebarItems);
    }
  }, [pathNameIncludes, pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // enable only on mobile and tablet
      const mql = window.matchMedia("(max-width: 1024px)");
      const listener = (e) => {
        if (e.matches) {
          setSidebarOpen(false);
        } else {
          setSidebarOpen(true);
        }
      };
      mql.addEventListener("change", listener);

      return () => mql.removeEventListener("change", listener);
    }
  });

  return (
    <html lang="en">
      <body className={popins.className} suppressHydrationWarning={true}>
        {pathNameIncludes("sign-in") ? (
          <main>
            <div className="w-full h-screen flex items-center justify-center">
              {children}
            </div>
          </main>
        ) : (
          <>
            <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                title={headerTitle}
              />
              <div className="flex overflow-hidden absolute top-24">
                <Sidebar sidebarOpen={sidebarOpen} menuItems={menuItems} />
              </div>
              <main className="bg-[#EFEEEE]">
                <div className="ml-0 lg:ml-[270px] p-4 md:p-6 2xl:p-10 flex-1 h-screen overflow-y-auto">
                  {children}
                </div>
              </main>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
