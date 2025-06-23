import {
  ShieldPlus, TrendingUp, MonitorPlay, Cpu, Megaphone, ShoppingCart
  , HeartPulse, Archive, Layers, Eye, ArrowUpRight, Award, Info, Target, Users, MessageCircle, NotebookPen, Newspaper,
  icons,
} from "lucide-react";
export const Menus = [
  // -----What we Do
  {
    name: "What We Do",
    path: "/",
    subMenuHeading: ["Service", "Industries"],
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

      // Industry items
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
      {
        name: "Startups & Entrepreneurs",
        category: "Industries",
      },
      {
        name: "Software Industry",
        category: "Industries",
      },
      {
        name: "Health Care",
        category: "Industries",
      },
      {
        name: "FinTech",
        category: "Industries",
      },
      {
        name: "Fashion",
        category: "Industries",
      },
      {
        name: "Real estate",
        category: "Industries",
      },
      {
        name: "Food Industry",
        category: "Industries",
      },
      {
        name: "Manfacturing",
        category: "Industries",
      },
      {
        name: "Sustainablity",
        category: "Industries",
      },
      {
        name: "Media",
        category: "Industries",
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
    subMenu: [
      {
        name: "Our Clients",
        icon: Users,
        path: "/insights/clientslogo", // Unique path for smooth scroll logic
      },
      {
        name: "Testimonials",
        icon: MessageCircle,
        path: "/insights/testimonials",
      },
      {
        name: "Blogs",
        icon: NotebookPen,
        path: "/insights/blogs",
      },
      {
        name: "News",
        icon: Newspaper,
        path: "/insights/news",
      },
    ],

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
