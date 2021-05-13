import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineFieldTime,
  AiOutlinePlaySquare,
  AiFillLike,
  AiFillTrophy,
  AiFillSetting,
  AiFillFlag,
} from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import {
  RiMenuUnfoldFill,
  RiMessage2Fill,
  RiTimeFill,
  RiVideoAddFill,
} from "react-icons/ri";
import { MdKeyboardArrowUp, MdLiveTv, MdHelp } from "react-icons/md";
import { RiSignalTowerFill } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";

function ShortSidebar() {
  const showMoreOptions = [
    "Tech",
    "Tech Support",
    "Songs",
    "CSS",
    "Programming",
    "Cooking",
    "English",
  ];
  const ironSelectorOptions = [
    "All",
    "Conversation",
    "Debates",
    "Cricket",
    "Javascript",
    "street food",
    "Cooking Show",
    "Comedies",
    "History",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
    "The Dodo",
  ];
  const chanelOptions = [
    {
      title: "Animal Planet",
      imgsrc:
        "https://yt3.ggpht.com/ytc/AAUvwnjft_cyUC_j0VvNbTELs8ZAwXiP0JT5_UsVNkJYPw=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Jamuna",
      imgsrc:
        "https://yt3.ggpht.com/ytc/AAUvwnj3fFdlaxsoc4rvY12trMXDfWQUE4WQshWX-dHmMA=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Al-Jazeera English",
      imgsrc:
        "https://yt3.ggpht.com/ytc/AAUvwniP7Ug7eOzblX1jnamGJoSBQ9hYYEiK80gePuVB6bQ=s88-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "NDTV",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwnhclmN210Jd1wv0w4GHswx6BlPjQldSb-_yu1_RxQY=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "Web Dev Simplified",
      imgsrc:
        "https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Traversy Media",
      imgsrc:
        "https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "freeCodeCamp.org",
      imgsrc:
        "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "BT Sports",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwniNv1oOUlrVxCAQQdKIIPf8HC4sG4dAk2ipTVTjFQ=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "CNN",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwniw9PWq2uvJuM7u_x_0fXIVV_ZhBT0WY6cLCqupJA=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "BBC",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwnhSiMEt6hvnT5QbstuehkxgzNl5C3jTanyrFOn-H6g=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "Marques Brownlee",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "Independent TV",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwnjJGQIYrLXIr_D26JVCZh0O_ZDvlSQ4dpZijMTgpg=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "CGTN",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwnhATpINtuSaVgWCfB3nnNvz3hKWsCa_R9largrq1-M=s176-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      title: "Smile 2 Jannah",
      imgsrc:
        "//yt3.ggpht.com/ytc/AAUvwnhluZkGqPrX9lSiSmMhp4TMiyyXXgMMiU65CinvWw=s176-c-k-c0x00ffffff-no-rj-mo",
    },
  ];
  let [show, setShow] = useState(true);
  let [chanelShow, setChanelShow] = useState(true);

  const showHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const chanelShowHandler = (e) => {
    e.preventDefault();
    setChanelShow(!chanelShow);
  };
  return (
    <div className="short-sidebar-nav w-1/6 block h-full flex-shrink-0">
      <div className="sidebar-menu h-screen">
        <div className="section-1 text-center mt-10">
          <a href="" className="text-center block mb-4 py-4 hover:bg-gray-100">
            <AiFillHome size={22} color="red" className="mx-auto" />
            <a href="" className="text-xs font-normal">
              Home
            </a>
          </a>
          <a href="" className="block mb-4 py-4 hover:bg-gray-100">
            <FaCompass size={22} className=" text-gray-600 mx-auto" />
            <a href="" className="text-xs text-gray-700">
              Explore
            </a>
          </a>
          <a href="" className="block mb-4 py-4 hover:bg-gray-100">
            <MdSubscriptions size={22} className=" text-gray-600 mx-auto" />
            <a href="" className="text-xs text-gray-700">
              Subscription
            </a>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShortSidebar;
