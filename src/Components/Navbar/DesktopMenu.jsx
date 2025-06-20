import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { matchPath, useLocation } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  const location = useLocation();
  const isActive = location.pathname === menu.path;
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  const hasSubMenu = menu?.subMenu?.length;
  return (
    <motion.li
      className="group/link relative"
      onMouseEnter={() => toggleHover(true)}  // Changed to onMouseEnter
      onMouseLeave={() => toggleHover(false)}  // Changed to onMouseLeave
      key={menu.name}
    >
      <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        <Link
          to={menu.path}
          className={`hover:text-sky-400  transition ${isActive ? "text-sky-400 underline font-semibold" : "text-white"
            }`}
        >
          {menu.name}
        </Link>

        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>

      {hasSubMenu && (
        <motion.div
          className="sub-menu bg-black/70 absolute left-1/2 -translate-x-1/2  z-50  min-w-[300px] rounded-xl shadow-lg "  //bg-for the dropdown
          style={{ left: "100%", transform: "translateX(-50%)" }}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          transformOrigin="top center"
        >
          {menu.subMenuHeading ? (
            <div
              className={`grid gap-7 ${menu.gridCols === 3 ? "grid-cols-3" : menu.gridCols === 2 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {menu.subMenuHeading.map((heading) => {
                const filteredSubMenu = menu.subMenu.filter(
                  (item) => item.category === heading
                );
                return (
                  <div key={heading} className="max-h-100  pr-2">

                    <p className="text-lg font-semibold mb-4 text-sky-400 sticky top-0  z-10 py-1">{heading}</p>
                    <div className="overflow-y-auto max-h-100 pr-1">
                      {filteredSubMenu.map((submenu, i) => (
                        <div className="relative cursor-pointer mb-5" key={i}>
                          <HashLink to={submenu.path} className="flex-center gap-x-4 group/menubox">
                            <div className="flex-center gap-x-4 group/menubox">
                              <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-sky-400 group-hover/menubox:text-white duration-300 text-white ">
                                {submenu.icon && <submenu.icon />}
                              </div>
                              <div>
                                <h6 className="font-semibold text-md text-white group-hover/menubox:text-sky-400 transition-colors duration-300 ">{submenu.name}</h6>
                                <p className="text-sm menu-desc-nowrap text-gray-200 group-hover/menubox:text-gray-400 transition-colors duration-300">{submenu.desc}</p>
                              </div>
                            </div></HashLink>
                        </div>
                      ))}  </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className={`grid gap-7 ${menu.gridCols === 3 ? "grid-cols-3" : menu.gridCols === 2 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {menu.subMenu.map((submenu, i) => (
                <div className="relative cursor-pointer mb-5" key={i}>
                  <a
                    href="#"
                    className="flex-center gap-x-4 group/menubox"
                    onClick={e => {
                      if (menu.name === "Insights") {
                        let detail = null;
                        if (submenu.name === "Our Clients") detail = "clients-logo";
                        if (submenu.name === "Testimonials") detail = "testimonial";
                        if (submenu.name === "News") detail = "news";
                        // Blogs: navigate to /Insights/Articles
                        if (submenu.name === "Blogs") {
                          e.preventDefault();
                          window.location.href = "/Insights/Articles";
                          return;
                        }
                        if (window.location.pathname === "/insights" && detail) {
                          e.preventDefault();
                          window.dispatchEvent(new CustomEvent("insights-nav", { detail }));
                          return;
                        } else if (detail) {
                          e.preventDefault();
                          // Store the target section in sessionStorage
                          sessionStorage.setItem('insights-scroll-target', detail);
                          window.location.href = "/insights";
                        }
                      } else {
                        // fallback: normal navigation for other menus
                        window.location.href = submenu.path;
                      }
                    }}
                  >
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-sky-400 group-hover/menubox:text-white duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className=" font-semibold text-md text-white group-hover/menubox:text-sky-400 transition-colors duration-300  ">{submenu.name}</h6>
                      <p className="text-sm menu-desc-nowrap text-gray-200 group-hover/menubox:text-gray-400 transition-colors duration-300">{submenu.desc}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </motion.li>
  );
}
