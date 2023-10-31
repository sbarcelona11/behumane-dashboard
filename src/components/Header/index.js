"use client";

import Link from "next/link";
import Image from "next/image";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none h-24 border-b border-black">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex flex-col justify-center items-center lg:hidden"
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      sidebarOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                sidebarOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out
                                h-0.5 w-6 rounded-sm ${
                                  sidebarOpen
                                    ? "-rotate-45 -translate-y-1"
                                    : "translate-y-0.5"
                                }`}
            ></span>
          </button>
          <Link className="block flex-shrink-0" href="/">
            <Image
              width={47}
              height={40}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
          <h1 className="text-lg text-black">Educator Dashboard</h1>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          {/*  notificaion */}
          <div className="relative">
            <Link
                onClick={() => console.log("clicked")}
                href="#"
                className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary"
            >
              <span
                  className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-500 inline`}
              >
                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              </span>

              <svg
                  className="fill-current duration-300 ease-in-out"
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z"
                    fill=""
                />
              </svg>
            </Link>
          </div>
          {/* profile */}
          <div className="relative">
            <Link
              onClick={() => console.log("clicked")}
              className="flex items-center gap-4"
              href="#"
            >
              <span className="h-12 w-12 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/profile.png"}
                  alt="User"
                  className="rounded-full"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
