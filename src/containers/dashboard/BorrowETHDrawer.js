// external
import { observer } from "mobx-react-lite";
import Drawer from "@mui/material/Drawer";
// internal
import "../../css/drawers.scss";
import {
  BorrowETHDrawerButton,
  BorrowETHCancelButton,
} from "./DashboardButtons";
import { BorrowETHInput } from "./DashboardInputs";

const ObserveBorrowETHDrawer = observer(({ user }) => (
  <Drawer
    anchor="bottom"
    onClose={() => {
      user.setBorrowETHDrawer(false);
    }}
    open={user.borrowETHDrawer}
  >
    <div className="drawer-container">
      <div className="drawer-card-container">
        <div className="drawer-title-container margin-bottom">
          <span className="drawer-header">Borrow ETH</span>
        </div>
        <div className="drawer-content-row margin-bottom">
          <BorrowETHInput user={user} />
        </div>
        <div className="drawer-content-button-row">
          <div className="drawer-button-container button-margin-right">
            <BorrowETHCancelButton user={user} />
          </div>
          <div className="drawer-button-container">
            <BorrowETHDrawerButton user={user} />
          </div>
        </div>
      </div>
    </div>
  </Drawer>
));

const BorrowETHDrawer = ({ user }) => {
  return <ObserveBorrowETHDrawer user={user} />;
};

export default BorrowETHDrawer;
