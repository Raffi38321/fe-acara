import {
  CiBookmark,
  CiGrid41,
  CiSettings,
  CiShoppingTag,
  CiViewList,
  CiWallet,
} from "react-icons/ci";

const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member",
    icon: <CiGrid41 />,
  },
  {
    key: "setting",
    label: "Settting",
    href: "/member/setting",
    icon: <CiSettings />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/member/transaction",
    icon: <CiWallet />,
  },
];

const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin",
    icon: <CiGrid41 />,
  },
  {
    key: "Category",
    label: "Category",
    href: "/admin/category",
    icon: <CiShoppingTag />,
  },
  {
    key: "event",
    label: "Event",
    href: "/admin/event",
    icon: <CiViewList />,
  },
  {
    key: "banner",
    label: "Banner",
    href: "/admin/banner",
    icon: <CiBookmark />,
  },
  {
    key: "transaction",
    label: "Transaction",
    href: "/admin/transaction",
    icon: <CiWallet />,
  },
];

export { SIDEBAR_MEMBER, SIDEBAR_ADMIN };
