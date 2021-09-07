import Footer from "../../../common/panel/footer/Footer";
import Header from "../../../common/panel/header/Header";
import Sidebar from "../../../common/panel/sidebar/Sidebar";
import { useState } from "react";
import "./style.scss";
function PanelLayout({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const onToggleSideBar = (value = null) => {
    if (value === null) {
      setIsSideBarOpen(!isSideBarOpen);
    } else {
      setIsSideBarOpen(value);
    }
  };
  return (
    <div id="panelLayout" className="d-flex flex-row flex-nowrap">
      <Sidebar onToggleSideBar={onToggleSideBar} open={isSideBarOpen} />
      <div id="route-container" className="flex-grow-1">
        <Header onToggleSideBar={onToggleSideBar} />
        <div id="content" className="container py-3">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default PanelLayout;
