import {
  ShieldPlus, TrendingUp, MonitorPlay, Cpu, Megaphone, ShoppingCart
  , HeartPulse, Archive, Layers, Eye, ArrowUpRight, Award, Info, Target
} from "lucide-react";
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
        icon: ShieldPlus,
        category: "Service",
        path: "/service/RAAS",
      },
      {
        name: "Sales",
        desc: "Sales",
        icon: TrendingUp,
        category: "Service",
        path: "/service/Sales",

      },
      {
        name: "MultiMedia Solution",
        desc: "Site control",
        icon: MonitorPlay,
        category: "Service",
        path: "/service/multimedia",

      },

      {
        name: "Technology solution",
        desc: "Sales",
        icon: Cpu,
        category: "Service",
        path: "/service/TechSolution",

      },
      {
        name: "Digital Marketing",
        desc: "Link pages",
        icon: Megaphone,
        category: "Service",
        path: "/service/DigitalMarketing",

      },
      {
        name: "Bussiness",
        desc: "Site control",
        icon: Layers,
        category: "Service",
        path: "/service/Business",

      },


      {
        name: "Opptiverse",
        desc: "Sales",
        icon: Archive,
        category: "Product",
        path: "/service",

      },
      {
        name: "E-commerce",
        desc: "Sales",
        icon: ShoppingCart,
        category: "Industries",
        path: "/service",

      },
      {
        name: "Healthcare",
        desc: "Sales",
        icon: HeartPulse,
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
        name: "About us",
        desc: "To deliver innovative and reliable technology services that empower industries across the globe.",
        icon: Info,
        path: "/who",

      },
      {
        name: "Vision",
        desc: "To deliver innovative and reliable technology services that empower industries across the globe.",
        icon: Eye,
        path: "/service",

      },
      {
        name: "Mission",
        desc: "To provide high-quality, customer-centric IT solutions that drive business growth and operational excellence.",
        icon: ArrowUpRight,
        path: "/service",

      },
      {
        name: "Goal",
        desc: "To become a trusted global leader in delivering reliable and innovative technology services.",
        icon: Target,
        path: "/service",

      },
      {
        name: "Value",
        desc: "Integrity, customer-centricity, innovation, collaboration, and excellence.",
        icon: Award,
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
