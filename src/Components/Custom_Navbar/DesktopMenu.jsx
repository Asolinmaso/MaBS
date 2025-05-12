import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function DesktopMenu({ menu }) {
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
        <Link to={menu.path} className="hover:text-white transition">
          {menu.name}</Link>
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
                  <div key={heading} className="max-h-96  pr-2">

                    <p className="text-md font-semibold mb-4 text-sky-400 sticky top-0  z-10 py-1">{heading}</p>
                    <div className="overflow-y-auto max-h-80 pr-1">    
                    {filteredSubMenu.map((submenu, i) => (
                      <div className="relative cursor-pointer mb-5" key={i}>
                        <Link to={submenu.path} className="flex-center gap-x-4 group/menubox">

                          <div className="flex-center gap-x-4 group/menubox">

                            <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300 text-white ">
                              {submenu.icon && <submenu.icon />}
                            </div>
                            <div>
                              <h6 className="font-semibold text-white group-hover/menubox:text-sky-400 transition-colors duration-300 ">{submenu.name}</h6>
                              <p className="text-sm text-gray-200 group-hover/menubox:text-gray-400 transition-colors duration-300">{submenu.desc}</p>
                            </div>
                          </div></Link>
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
                  <div className="flex-center gap-x-4 group/menubox">
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className=" font-semibold text-white group-hover/menubox:text-sky-400 transition-colors duration-300  ">{submenu.name}</h6>
                      <p className="text-sm text-gray-200 group-hover/menubox:text-gray-400 transition-colors duration-300">{submenu.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </motion.li>
  );
}
