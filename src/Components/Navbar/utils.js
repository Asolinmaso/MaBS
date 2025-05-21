import { path } from "framer-motion/client";
import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
  // -----What we Do
  {
    name: "What We Do",
    path: "/",
    subMenuHeading: ["Service", "Industries", "Product"],
    subMenu: [
      // Service
      {
        name: "RAAS",
        desc: "Requirement as a Service",
        icon: PanelsTopLeft,
        category: "Service",
        path: "/service/RAAS",
      },
      {
        name: "Sales",
        desc: "Sales",
        icon: Database,
        category: "Service",
        path: "/service/Sales",

      },
      {
        name: "MultiMedia Solution",
        desc: "Site control",
        icon: Bolt,
        category: "Service",
        path: "/service/multimedia",

      },

      {
        name: "Technology solution",
        desc: "Sales",
        icon: Database,
        category: "Service",
        path: "/service/TechSolution",

      },
      {
        name: "Digital Marketing",
        desc: "Link pages",
        icon: PanelTop,
        category: "Service",
        path: "/service/DigitalMarketing",

      },
      {
        name: "Bussiness",
        desc: "Site control",
        icon: Bolt,
        category: "Service",
        path: "/service/Business",

      },


      {
        name: "Opptiverse",
        desc: "Sales",
        icon: Database,
        category: "Product",
        path: "/service",

      },
      {
        name: "E-commerce",
        desc: "Sales",
        icon: Database,
        category: "Industries",
        path: "/service",

      },
      {
        name: "Healthcare",
        desc: "Sales",
        icon: Database,
        category: "Industries",
        path: "/service",

      },





    ],

    gridCols: 3,
  },
  // Who we are
  {
    name: "Who We Are",
    path: "/who",
    subMenu: [
      {
        name: "Vision",
        desc: "To deliver innovative and reliable technology services that empower industries across the globe.",
        icon: ShoppingBag,
        path: "/service",

      },
      {
        name: "Mission",
        desc: "To provide high-quality, customer-centric IT solutions that drive business growth and operational excellence.",
        icon: MapPin,
        path: "/service",

      },
      {
        name: "Goal",
        desc: "To become a trusted global leader in delivering reliable and innovative technology services.",
        icon: BellDot,
        path: "/service",

      },
      {
        name: "Value",
        desc: "Integrity, customer-centricity, innovation, collaboration, and excellence.",
        icon: Play,
        path: "/service",

      },

    ],
    gridCols: 1,
  },
  // Others
  {
    name: "Insights",
    path: "/insights",

  },

  {
    name: "Career",
    path: "/careers",

  },
  {
    name: "Product",
    path: "/product",

  },
  {
    name: "Contact",
    path: "/contact",

  },
];
