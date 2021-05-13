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

function LongSidebar() {
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
    <div className="sidebar-nav w-1/6 block h-full flex-shrink-0">
      <div className="sidebar-menu h-screen overflow-scroll pb-16">
        <div className="section-1">
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 bg-gray-200"
          >
            <AiFillHome size={22} color="red" />
            <a href="" className="text-base font-semibold">
              Home
            </a>
          </a>
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
          >
            <FaCompass size={22} className=" text-gray-600" />
            <a href="" className="text-base text-gray-700">
              Explore
            </a>
          </a>
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
          >
            <MdSubscriptions size={22} className=" text-gray-600" />
            <a href="" className="text-base text-gray-700">
              Subscription
            </a>
          </a>
        </div>
        <hr className="my-4" />
        <div className="section-2">
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
          >
            <MdVideoLibrary size={22} className=" text-gray-600" />
            <a href="" className="text-base text-gray-700">
              Library
            </a>
          </a>
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
          >
            <AiOutlineFieldTime size={22} className=" text-gray-600" />
            <a href="" className="text-base text-gray-700">
              History
            </a>
          </a>
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
          >
            <AiOutlinePlaySquare size={22} className=" text-gray-600" />
            <a href="" className="text-base text-gray-700">
              Your videos
            </a>
          </a>
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
          >
            <RiTimeFill size={22} className=" text-gray-600" />
            <a href="" className="text-base text-gray-700">
              Watch later
            </a>
          </a>
          <a
            href=""
            className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
          >
            <AiFillLike size={22} className=" text-gray-600" />
            <a href="" className="text-base text-gray-700">
              Liked videos
            </a>
          </a>
          <ul className={show ? "hidden" : ""}>
            {showMoreOptions.map((title) => {
              return (
                <li>
                  <a
                    href=""
                    className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
                  >
                    <RiMenuUnfoldFill size={22} className=" text-gray-600" />
                    <a href="" className="text-base text-gray-700">
                      {title}
                    </a>
                  </a>
                </li>
              );
            })}
          </ul>
          {!show ? (
            <a
              onClick={showHandler}
              href=""
              className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
            >
              <MdKeyboardArrowUp size={20} className=" text-gray-600" />
              <a href="" className="text-base text-gray-700">
                Show less
              </a>
            </a>
          ) : (
            <a
              onClick={showHandler}
              href=""
              className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
            >
              <BiChevronDown size={20} className=" text-gray-600" />
              <a href="" className="text-base text-gray-700">
                Show more
              </a>
            </a>
          )}
        </div>
        <hr className="my-4" />
        <div className="section-3">
          <a
            onClick={showHandler}
            className="flex items-center space-x-8 px-6 py-2"
          >
            <span className="text-sm text-gray-700 ml-1 font-semibold uppercase">
              Subscriptions
            </span>
          </a>
          <ul>
            {chanelOptions.map((chanel, index) => {
              let chTitle = chanel.title;
              let title = "";

              for (let i = 0; i < chTitle.length; i++) {
                if (i === 14) {
                  title = title + "...";
                  break;
                }
                title += chTitle[i];
              }

              if (index <= 6) {
                return (
                  <li className="">
                    <a
                      href=""
                      className="flex items-center pl-5 py-2 hover:bg-gray-100 w-full"
                    >
                      <img
                        src={chanel.imgsrc}
                        className="w-5 rounded-full"
                        alt=""
                      />
                      <a
                        href=""
                        className="text-sm font-semibold text-gray-700 w-21 ml-6"
                      >
                        {title}
                      </a>
                      <RiSignalTowerFill className="w-10 text-red-700 ml-auto" />
                    </a>
                  </li>
                );
              }
            })}
          </ul>
          <ul className={chanelShow ? "hidden" : ""}>
            {chanelOptions.map((chanel, index) => {
              let chTitle = chanel.title;
              let title = "";

              for (let i = 0; i < chTitle.length; i++) {
                if (i === 14) {
                  title = title + "...";
                  break;
                }
                title += chTitle[i];
              }

              if (index > 6) {
                return (
                  <li className="">
                    <a
                      href=""
                      className="flex items-center pl-5 py-2 hover:bg-gray-100 w-full"
                    >
                      <img
                        src={chanel.imgsrc}
                        className="w-5 rounded-full"
                        alt=""
                      />
                      <a
                        href=""
                        className="text-sm font-semibold text-gray-700 w-21 ml-6"
                      >
                        {title}
                      </a>
                      <RiSignalTowerFill className="w-10 text-red-700 ml-auto" />
                    </a>
                  </li>
                );
              }
            })}
          </ul>
          {!chanelShow ? (
            <a
              onClick={chanelShowHandler}
              href=""
              className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
            >
              <MdKeyboardArrowUp size={20} className=" text-gray-600" />
              <a href="" className="text-base text-gray-700">
                Show less
              </a>
            </a>
          ) : (
            <a
              onClick={chanelShowHandler}
              href=""
              className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
            >
              <BiChevronDown size={20} className=" text-gray-600" />
              <a href="" className="text-base text-gray-700">
                Show more
              </a>
            </a>
          )}
        </div>
        <hr className="my-4" />
        <div className="section-2">
          <a className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100">
            <a href="" className="text-sm font-semibold text-gray-700">
              MORE FROM YOUTUBE
            </a>
          </a>
          <ul>
            <li>
              <a
                href=""
                className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
              >
                <FaGamepad size={22} className=" text-gray-600" />
                <a href="" className="text-base text-gray-700">
                  Gaming
                </a>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
              >
                <MdLiveTv size={22} className=" text-gray-600" />
                <a href="" className="text-base text-gray-700">
                  Live
                </a>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
              >
                <AiFillTrophy size={22} className=" text-gray-600" />
                <a href="" className="text-base text-gray-700">
                  Sports
                </a>
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="section-2">
          <ul>
            <li>
              <a
                href=""
                className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
              >
                <AiFillSetting size={22} className=" text-gray-600" />
                <a href="" className="text-base text-gray-700">
                  Settings
                </a>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
              >
                <AiFillFlag size={22} className=" text-gray-600" />
                <a href="" className="text-base text-gray-700">
                  Report history
                </a>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
              >
                <MdHelp size={22} className=" text-gray-600" />
                <a href="" className="text-base text-gray-700">
                  Help
                </a>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100"
              >
                <RiMessage2Fill size={22} className=" text-gray-600" />
                <a href="" className="text-base text-gray-700">
                  Send feedback
                </a>
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="section-2">
          <ul>
            <li>
              <a className="flex items-center space-x-8 px-6 py-2 hover:bg-gray-100">
                <a href="" className="text-sm font-semibold text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <p>
                    Animi ratione exercitationem nemo quibusdam nulla? Dolore.
                  </p>
                </a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LongSidebar;
