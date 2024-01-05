import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaUser,
  // TbDeviceAnalytics,
} from "react-icons/fa";
// import { TbDeviceAnalytics } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
// import logodark from "../image/Lotus_Trans.png";
import lotustrans from "../../image/Lotus_Trans.png";
import lotuslogo from "../../image/logo_Lotus.png";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import analytic from "../../image/icon/Analytics.gif";
import dash from "../../image/icon/dash.gif";
import report from "../../image/icon/report.gif";
import know from "../../image/icon/know.gif";
import conf from "../../image/icon/config.gif";
import TimelineIcon from "@mui/icons-material/Timeline";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import SpeedIcon from "@mui/icons-material/Speed";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
import NetworkPingOutlinedIcon from "@mui/icons-material/NetworkPingOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import RoomPreferencesOutlinedIcon from "@mui/icons-material/RoomPreferencesOutlined";
import OnlinePredictionOutlinedIcon from "@mui/icons-material/OnlinePredictionOutlined";
import ModelTrainingOutlinedIcon from "@mui/icons-material/ModelTrainingOutlined";
import OnDeviceTrainingOutlinedIcon from "@mui/icons-material/OnDeviceTrainingOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import SsidChartOutlinedIcon from "@mui/icons-material/SsidChartOutlined";
const routes = [
  {
    path: "/",
    name: "Analytics",
    // icon: <AnalyticsOutlinedIcon style={{ color: "orange" }} />,
    icon: <img src={analytic} style={{ width: "20px", background: "black" }} />,

    subRoutes: [
      {
        path: "/analytics/reral",
        name: "Real Time ",
        icon: <TimelineIcon style={{ width: "18px", color: "orange" }} />,
      },
      {
        path: "/analytics/freq",
        name: "Freq Distribution",
        icon: (
          <AlignVerticalBottomIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
      {
        path: "/analytics/comp",
        name: "Comparison",
        icon: <MultilineChartIcon style={{ width: "18px", color: "orange" }} />,
      },
    ],
  },
  {
    path: "/dashbord",
    name: "DashBoard",
    // icon: <FaUser />,
    icon: <img src={dash} style={{ width: "20px", background: "black" }} />,

    subRoutes: [
      {
        path: "/dashbord/visu",
        name: "Data Visualization ",
        icon: (
          <StackedBarChartIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
      {
        path: "/dashbord/corre",
        name: "Correlation",
        icon: (
          <SsidChartOutlinedIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
      {
        path: "/dashbord/meater",
        name: "Meter & Status",
        icon: <SpeedIcon style={{ width: "18px", color: "orange" }} />,
      },
      {
        path: "/dashbord/other",
        name: "Others",
        icon: (
          <AltRouteOutlinedIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
    ],
  },
  {
    path: "/reports",
    name: "Reports",
    // icon: <MdMessage />,
    icon: <img src={report} style={{ width: "20px", background: "black" }} />,

    subRoutes: [
      {
        path: "/reports/summery",
        name: "Exe Summery ",
        icon: (
          <SummarizeOutlinedIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
      {
        path: "/reports/shift",
        name: "Shift/Daily",
        icon: (
          <AssessmentOutlinedIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
      {
        path: "/reports/hist",
        name: "Historian",
        icon: (
          <HistoryToggleOffOutlinedIcon
            style={{ width: "18px", color: "orange" }}
          />
        ),
      },
      {
        path: "/reports/kpi",
        name: "KPI",
        icon: (
          <NetworkPingOutlinedIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
    ],
  },
  {
    path: "/sysconfig",
    name: "Sys. Config",
    // icon: <BiAnalyse />,
    icon: <img src={conf} style={{ width: "20px", background: "black" }} />,

    subRoutes: [
      {
        path: "/sysconfig/sys",
        name: "SysConfig ",
        icon: (
          <SettingsBrightnessOutlinedIcon
            style={{ width: "18px", color: "orange" }}
          />
        ),
      },
      {
        path: "/sysconfig/tag",
        name: "TagConfig",
        icon: (
          <BookmarksOutlinedIcon style={{ width: "18px", color: "orange" }} />
        ),
      },
      {
        path: "/sysconfig/user",
        name: "UserMgt",
        icon: (
          <ManageAccountsOutlinedIcon
            style={{ width: "18px", color: "orange" }}
          />
        ),
      },
      {
        path: "/sysconfig/gemeg",
        name: "GeMegConfig",
        icon: (
          <RoomPreferencesOutlinedIcon
            style={{ width: "18px", color: "orange" }}
          />
        ),
      },
    ],
  },
  {
    path: "/knowexp",
    name: "KnowExp",
    // icon: <AiTwotoneFileExclamation />,
    icon: <img src={know} style={{ width: "20px", background: "black" }} />,

    subRoutes: [
      {
        path: "/knowexp/traning",
        name: "Training",
        icon: (
          <ModelTrainingOutlinedIcon
            style={{ width: "18px", color: "orange" }}
          />
        ),
      },
      {
        path: "/knowexp/Ai",
        name: "AI DashBord",
        icon: (
          <DashboardCustomizeOutlinedIcon
            style={{ width: "18px", color: "orange" }}
          />
        ),
      },
      {
        path: "/knowexp/Sim",
        name: "SimRun",
        // icon: (
        //   <OnDeviceTrainingOutlinedIcon
        //     style={{ width: "18px", color: "orange" }}
        //   />
        // ),
        icon: <StreamOutlinedIcon style={{ width: "18px", color: "orange" }} />,
      },
      {
        path: "/knowexp/online",
        name: "Online",
        icon: (
          <OnlinePredictionOutlinedIcon
            style={{ width: "18px", color: "orange" }}
          />
        ),
      },
    ],
  },
  // {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    // subRoutes: [
    //   {
    //     path: "/settings/profile",
    //     name: "Profile ",
    //     icon: <FaUser />,
    //   },
    //   {
    //     path: "/settings/2fa",
    //     name: "2FA",
    //     icon: <FaLock />,
    //   },
    //   {
    //     path: "/settings/billing",
    //     name: "Billing",
    //     icon: <FaMoneyBill />,
    //   },
    // ],
  },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* DoSomeCoding */}
                  {/* <img
                    style={{ height: "25px", width: "140px" }}
                    src={lotustrans}
                    alt="lotustrans"
                  /> */}
                  <p
                    style={{
                      fontSize: "20px",
                      color: "orange",
                      fontWeight: "700",
                      // marginTop: "70px",
                    }}
                  >
                    SilCal Cokpit
                  </p>
                  {/* <img
                    style={{
                      height: "20px",
                      width: "20px",
                      marginTop: "50px",
                      marginLeft: "40px",
                    }}
                    src={lotuslogo}
                    alt="lotuslogo"
                  /> */}
                </motion.h1>
              )}
            </AnimatePresence>

            <div style={{}} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            {/* <p style={{ fontSize: "20px", color: "orange", fontWeight: "700" }}>
              SilCal Cokpit
            </p> */}
          {/* <div className="search_icon">
              <BiSearch />
            </div> */}
          {/* <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence> */}
          {/* </div>  */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
