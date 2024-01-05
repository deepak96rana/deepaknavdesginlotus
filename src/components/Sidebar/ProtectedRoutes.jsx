import React from "react";
import Users from "../../pages/Users";
import Messages from "../../pages/Messages";
import Analytics from "../../pages/Analytics";
import Realtime from "../../pages/Analytics/Realtime";
import FreqDistribution from "../../pages/Analytics/FreqDistribution";
import Comparison from "../../pages/Analytics/Comparison";
import Dashboard from "../../pages/Dashboard";
import DataVisualization from "../../pages/Dashboard/DataVisualization";
import Correlation from "../../pages/Dashboard/Correlation";
import MeterStatus from "../../pages/Dashboard/MeterStatus";
import Others from "../../pages/Dashboard/Others";
import ExeSummery from "../../pages/Reports/ExeSummery";
import ShiftDaly from "../../pages/Reports/ShiftDaly";
import Historian from "../../pages/Reports/Historian";
import Kpi from "../../pages/Reports/Kpi";
import SysConfig from "../../pages/Config/SysConfig";
import TagConfig from "../../pages/Config/TagConfig";
import UserMgt from "../../pages/Config/UserMgt";
import GrMegConfig from "../../pages/Config/GrMegConfig";
import Trrining from "../../pages/KnowExp/Trrining";
import AIDashBoard from "../../pages/KnowExp/AIDashBoard";
import RunSim from "../../pages/KnowExp/RunSim";
import Online from "../../pages/KnowExp/Online";
import Mesg from "../../pages/message/Mesg";
import FileManager from "../../pages/FileManager";
import Order from "../../pages/Order";
import Saved from "../../pages/Saved";
import Setting from "../../pages/Setting";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import TopNavbar from "./TopNavbar";

const ProtectedRoutes = () => {
  return (
    <div>
      <Route path="/users" element={<Users />} />
      <Route path="/messages" element={<Messages />} />

      <Route path="/analytics" element={<Analytics />} />
      <Route path="/analytics/reral" element={<Realtime />} />
      <Route path="/analytics/freq" element={<FreqDistribution />} />
      <Route path="/analytics/comp" element={<Comparison />} />

      <Route path="/" element={<Dashboard />} />
      <Route path="/dashbord/visu" element={<DataVisualization />} />
      <Route path="/dashbord/corre" element={<Correlation />} />
      <Route path="/dashbord/meater" element={<MeterStatus />} />
      <Route path="/dashbord/other" element={<Others />} />

      <Route path="/reports/summery" element={<ExeSummery />} />
      <Route path="/reports/shift" element={<ShiftDaly />} />
      <Route path="/reports/hist" element={<Historian />} />
      <Route path="/reports/kpi" element={<Kpi />} />

      <Route path="/sysconfig/sys" element={<SysConfig />} />
      <Route path="/sysconfig/tag" element={<TagConfig />} />
      <Route path="/sysconfig/user" element={<UserMgt />} />
      <Route path="/sysconfig/gemeg" element={<GrMegConfig />} />

      <Route path="/knowexp/traning" element={<Trrining />} />
      <Route path="/knowexp/Ai" element={<AIDashBoard />} />
      <Route path="/knowexp/Sim" element={<RunSim />} />
      <Route path="/knowexp/online" element={<Online />} />

      <Route path="/message" element={<Mesg />} />

      <Route path="/file-manager" element={<FileManager />} />
      <Route path="/order" element={<Order />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/settings" element={<Setting />} />

      <Route path="*" element={<> not found</>} />
      {/* </SideBar> */}
    </div>
  );
};

export default ProtectedRoutes;
