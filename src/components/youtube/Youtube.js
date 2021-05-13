import React, { useState } from "react";
import { contents } from "../utils/mainContent";
import LongSidebar from "./LongSidebar";
import ShortSidebar from "./ShortSidebar";
import { AiFillYoutube, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { BsGrid3X3Gap, BsFillBellFill } from "react-icons/bs";

function Youtube() {
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
  let [isSidebar, setIsSidebar] = useState(true);

  const sideBarhandler = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <div className="full-page">
      <div className="main-top-nav flex items-center justify-between mt-3 px-10 border border-gray-200 border-t-0 border-l-0 border-r-0 pb-4">
        <div className="flex items-center space-x-2 w-1/5">
          <button type="button" onClick={sideBarhandler}>
            <AiOutlineMenu size="20" />
          </button>
          <a href="" className="flex items-center ">
            <AiFillYoutube size={30} color="red" />
            <span className="text-lg font-semibold font-sans">Youtube</span>
            <span className="xs ml-1 self-start">BD</span>
          </a>
        </div>
        <div className="flex items-center justify-center w-3/5">
          <input
            type="text"
            placeholder="Search"
            className="search-input border border-gray-300 bg-white focus:bg-transparent outline-none px-4 h-8 w-4/6 border-r-0 placeholder-gray-400 text-lg font-medium"
          />
          <button className="search-button border border-gray-300 px-6 h-8 bg-gray-100 rounded-none hover:bg-gray-200">
            <AiOutlineSearch size={20} className="text-gray-500" />
          </button>
          <a href="">
            <FaMicrophone size={20} className="text-gray-700 ml-4" />
          </a>
        </div>
        <div className="flex items-center space-x-8 justify-end w-1/5">
          <a href="">
            <RiVideoAddFill size={20} className="text-gray-600" />
          </a>
          <a href="">
            <BsGrid3X3Gap size={20} className="text-gray-600" />
          </a>
          <a href="">
            <BsFillBellFill size={20} className="text-gray-600" />
          </a>
          <a href="">
            <img
              src="https://yt3.ggpht.com/yti/ANoDKi7ymtSF5Zrl3qgvwv8OpCuaMngCTSlKYPT898q41w=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
              className=" w-8 rounded-full"
            />
          </a>
        </div>
      </div>
      {/* nav-bar end */}
      <div className="main-content flex items-start">
        {isSidebar ? <LongSidebar /> : <ShortSidebar />}
        {/* sidebar end */}
        <div className="flex-col items-center container mx-auto flex-1">
          <div className="iron-bar flex items-center pl-4 pt-3 overflow-x-scroll border border-t-0 border-r-0 border-l-0 border-gray-200">
            {ironSelectorOptions.map((option) => {
              return (
                <a
                  href=""
                  className="text-base my-1 flex-shrink-0 text-gray-600 border border-gray-300 bg-gray-200 px-3 py-1 rounded-full mr-4 font-medium hover:bg-gray-300"
                >
                  {option}
                </a>
              );
            })}
          </div>
          <div className="content-body flex flex-wrap content-start overflow-scroll h-screen pb-20 p-4 pt-4 pl-4 pr-2 w-96 bg-gray-50">
            {contents.map((content) => {
              return (
                <a href="" className="card relative mr-4 mb-16">
                  <img
                    src="https://i.ytimg.com/vi/-Wlt8NRtOpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCabFRDfVHMNkXzoLLKPbzVAmJfTA"
                    alt=""
                    className="h-36"
                  />
                  <div className="flex items-start space-x-4 mt-4 ">
                    <img
                      src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj"
                      alt=""
                      className="w-10 rounded-full mt-1"
                    />
                    <p className="time inline-block absolute right-1 px-1 rounded-sm bg-black text-white text-sm font-normal">
                      14:30
                    </p>
                    <div className="">
                      <p className="text-base font-medium text-gray-800 mb-2">
                        CSS Flexbox Course
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        freeCodeCamp.org
                      </p>
                      <p className="flex items-center space-x-2 text-sm w-40">
                        <p className="text-sm font-medium text-gray-600">
                          183k views
                        </p>
                        <p className="w-1 h-1 bg-gray-600 rounded-full"></p>
                        <p className="text-sm font-medium text-gray-600">
                          3 years ago
                        </p>
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
