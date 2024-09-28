import { FaHome } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbLivePhotoFilled } from "react-icons/tb";
import { MdOutlineSportsEsports } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { RiProgress7Line } from "react-icons/ri";
import { FaFutbol } from "react-icons/fa";
import { GiGamepadCross } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { IoContract } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { GiNodular } from "react-icons/gi";

export const MobileMenuData = {
  tops: [
    {
      id: 1,
      name: "Main Page",
      path: "/",
      Icon: <FaHome className="text-[14px]" />,
    },
    {
      id: 2,
      name: "Sports",
      path: "/",
      Icon: <FaBarsStaggered className="text-[14px]" />,
    },
    {
      id: 2,
      name: "Live",
      path: "/",
      Icon: <TbLivePhotoFilled className="text-[14px]" />,
    },
    {
      id: 2,
      name: "ESports",
      path: "/",
      Icon: <MdOutlineSportsEsports className="text-[14px]" />,
    },
    {
      id: 2,
      name: "Favorites",
      path: "/",
      Icon: <FaStar className="text-[14px]" />,
      sub: [
        {
          id: 1,
          name: "Category",
          path: "/",
        },
        {
          id: 2,
          name: "Category",
          path: "/",
        },
        {
          id: 3,
          name: "Favorites",
          path: "/",
        },
      ],
    },

    {
      id: 2,
      name: "Result",
      path: "/",
      Icon: <RiProgress7Line className="text-[14px]" />,
    },
  ],
  games: [
    {
      id: 1,
      name: "Casino",
      path: "/",
      Icon: <FaFutbol className="text-[14px]" />,
      sub: [
        {
          id: 1,
          name: "Category",
          path: "/",
        },
        {
          id: 2,
          name: "Slots",
          path: "/",
        },
        {
          id: 3,
          name: "live Casino",
          path: "/",
        },
      ],
    },
    {
      id: 2,
      name: "Games",
      path: "/",
      Icon: <GiGamepadCross className="text-[14px]" />,
    },
    {
      id: 2,
      name: "Promotions and offers",
      path: "/",
      Icon: <FaGift className="text-[14px]" />,
      sub: [
        {
          id: 1,
          name: "Tournaments",
          path: "/",
        },
        {
          id: 2,
          name: "Special Offer and Bonuses",
          path: "/",
        },
        {
          id: 3,
          name: " Bonus",
          path: "/",
        },
        {
          id: 3,
          name: "Promo Code store",
          path: "/",
        },
      ],
    },
  ],

  extra: [
    {
      id: 1,
      name: "More",
      path: "/",
      Icon: <IoContract className="text-[14px]" />,
      sub: [
        {
          id: 1,
          name: "Toto",
          path: "/",
        },
      ],
    },
    {
      id: 2,
      name: "Information",
      path: "/",
      Icon: <GiNodular className="text-[14px]" />,
      sub: [
        {
          id: 1,
          name: "About us",
          path: "/",
        },
        {
          id: 2,
          name: "Terms and Conditions ",
          path: "/",
        },
        {
          id: 3,
          name: " Privacy Policy",
          path: "/",
        },
        {
          id: 3,
          name: " Cookies",
          path: "/",
        },
        {
          id: 3,
          name: " Mobile EPOS",
          path: "/",
        },
        {
          id: 3,
          name: " Contacts",
          path: "/",
        },
        {
          id: 3,
          name: " Payment methods",
          path: "/",
        },
      ],
    },
    {
      id: 2,
      name: "Consultant",
      path: "/",
      Icon: <FaUser className="text-[14px]" />,
    },
    {
      id: 2,
      name: "Mobile Application",
      path: "/",
      Icon: <CiMobile2 className="text-[14px]" />,
    },
  ],
};
