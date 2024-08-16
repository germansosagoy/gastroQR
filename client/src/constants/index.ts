import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
  IoIosLogOut,
} from "react-icons/io";
import {
  FaChartBar,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaUsersCog,
  FaListAlt,
  FaCashRegister,
  FaDollarSign,
  FaTags,
} from "react-icons/fa";

// import user01 from "../assets/user01.png";
// import user02 from "../assets/user02.png";
// import user03 from "../assets/user03.png";

export const links = [
  {
    href: "#",
    icon: FaCalendarAlt,
    text: "Calendario",
    badge: {
      // text: "Pro",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    href: "#",
    icon: FaChartBar,
    text: "Tareas",
  },
  {
    href: "#",
    icon: FaFacebookMessenger,
    text: "Notificaciones",
    badge: {
      text: "4",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    href: "#",
    icon: FaUsersCog,
    text: "Empleados",
  },
  {
    href: "#",
    icon: FaListAlt,
    text: "Mesas",
  },
  {
    href: "#",
    icon: FaCashRegister,
    text: "Órdenes",
  },
  {
    href: "#",
    icon: FaDollarSign,
    text: "Ventas",
  },
  {
    href: "#",
    icon: FaTags,
    text: "Productos",
  },
  {
    href: "#",
    icon: IoIosSettings,
    text: "Configuración",
  },
  {
    href: "#",
    icon: IoIosLogOut,
    text: "Cerrar Sesión",
  },
];

export const empolyeesData = [
  {
    title: "Total Employees",
    icon: IoIosPerson,
    count: 200,
    bgColor: "bg-gray-100",
  },
  {
    title: "On Leave",
    icon: IoIosEyeOff,
    count: 15,
    bgColor: "bg-blue-100",
  },
  {
    title: "New Joinee",
    icon: IoIosPersonAdd,
    count: 25,
    bgColor: "bg-yellow-100",
  },
];

export const shortcutLink = [
  {
    title: "Goals",
    icon: GoGoal,
  },
  {
    title: "Plan",
    icon: GrPlan,
  },
  {
    title: "Stats",
    icon: IoIosStats,
  },
  {
    title: "Setting",
    icon: IoIosSettings,
  },
];

export const users = [
  {
    name: "Robert Fox",
    country: "USA",
    role: "Python Developer",
    // image: user01,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Jane Doe",
    country: "UK",
    role: "Frontend Developer",
    // image: user02,
    bgColor: "bg-blue-100",
  },
  {
    name: "John Smith",
    country: "Canada",
    role: "Backend Developer",
    // image: user03,
    bgColor: "bg-gray-100",
  },
  {
    name: "Alice Johnson",
    country: "Australia",
    role: "Full Stack Developer",
    // image: user01,
    bgColor: "bg-slate-100",
  },
];

export const events = [
  {
    date: "01 Aug",
    title: "Upcoming Event",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    date: "15 Sept",
    title: "Annual Conference",
    description: "Join us for our annual conference.",
  },
  {
    date: "20 Sept",
    title: "Networking Meetup",
    description: "Connect with professionals in your field.",
  },
];
