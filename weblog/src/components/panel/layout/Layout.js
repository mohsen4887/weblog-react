import Footer from "../../../common/panel/footer/Footer";
import Header from "../../../common/panel/header/Header";
import Sidebar from "../../../common/panel/sidebar/Sidebar";
import "./style.scss";
function PanelLayout({ children }) {
  return (
    <div id="panelLayout" className="d-flex flex-row flex-nowrap">
      <Sidebar />
      <div id="route-container" className="flex-grow-1">
        <Header />
        <div id="content" className="container py-3">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default PanelLayout;
