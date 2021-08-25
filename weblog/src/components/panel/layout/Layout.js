import Footer from "../../../common/panel/Footer";
import Header from "../../../common/panel/header/Header";
import Sidebar from "../../../common/panel/sidebar/Sidebar";
import "./style.scss";
function PanelLayout({ children }) {
  return (
    <div className="d-flex flex-row flex-nowrap">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
export default PanelLayout;
