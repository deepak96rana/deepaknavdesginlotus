import React, { useEffect, useState } from "react";
import lotustrans from "../../image/Lotus_Trans.png";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import saillogo from "../../image/sail_db.png";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import sbcsir from "../../image/sbc.png";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import silcal from "../../image/SilCal.png";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [color, setcolor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setcolor((prevColor) => (prevColor === "red" ? "green" : "red"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
    navigate("/login");
  };

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
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "55px",
        backgroundColor: "rgb(28, 29, 43)",
      }}
    >
      <div>
        <img
          style={{
            height: "25px",
            width: "140px",
            marginLeft: "10px",
            marginTop: "18px",
          }}
          src={lotustrans}
          alt="lotustrans"
        />
      </div>
      <div>
        <img
          style={{ height: "65px", width: "140px", marginTop: "-4px" }}
          src={silcal}
          alt="silcal"
        />
      </div>
      <div
        style={{
          marginTop: "27px",
          marginLeft: "-20px",
          border: "1px solid blue",
          backgroundColor: "black",
          height: "18px",
        }}
      >
        <p style={{ color: "blue", fontSize: "13px" }}>
          Warm Metal Silicon Prediction{" "}
        </p>
      </div>

      <div className="alarmtext">
        {/* <AnimatePresence> */}
        {/* <p>Ankit alarms is coming</p> */}
        <Link to="/message">
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" style={{ color: "white" }} />
          </Badge>
        </Link>
        &nbsp; &nbsp;
        <input
          style={{ width: "300px", height: "25px", borderRadius: "7px" }}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={inputAnimation}
          type="text"
          placeholder=" Do Somthing"
        />
        {/* </AnimatePresence> */}
      </div>

      <div style={{ position: "absolute", right: "38%", marginTop: "17px" }}>
        <Link to="/message">
          <NotificationsNoneIcon style={{ color }} />
        </Link>
      </div>

      <div className="search">
        <div className="search_icon" style={{ color: "white" }}>
          <BiSearch />
        </div>
        <AnimatePresence>
          <motion.input
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={inputAnimation}
            type="text"
            placeholder="Search"
          />
        </AnimatePresence>
        {/* <div style={{ color: "white" }}>
          <p>S.B. Chaudhury</p>
        </div> */}
        <div>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                alt="Remy Sharp"
                src={sbcsir}
                style={{ width: "30px", height: "30px" }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> S.B. Chaudhury
            </MenuItem>
            {/* <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem> */}
            <Divider />
            {/* <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem> */}
            {/* <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem> */}
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div style={{ position: "absolute", right: "10px", top: "0px" }}>
        <img
          style={{ width: "30px", height: "30px", marginTop: "15px" }}
          src={saillogo}
          alt="saillogo"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
