// external
import { observer } from "mobx-react-lite";
import Drawer from "@mui/material/Drawer";
// internal
import "../../css/drawers.scss";
import {
  PayBackETHDrawerButton,
  PayBackETHCancelButton,
} from "./DashboardButtons";
import { PayLoanInput } from "./DashboardInputs";

const ObservePayLoanDrawer = observer(({ user }) => (
  <Drawer
    anchor="bottom"
    onClose={() => {
      user.setPayLoanDrawer(false);
    }}
    open={user.payLoanDrawer}
  >
    <div className="drawer-container">
      <div className="drawer-card-container">
        <div className="drawer-title-container margin-bottom">
          <span className="drawer-header">Loan repayment</span>
        </div>
        <div className="drawer-content-row margin-bottom">
          <PayLoanInput user={user} />
        </div>
        <div className="drawer-content-button-row">
          <div className="drawer-button-container button-margin-right">
            <PayBackETHCancelButton user={user} />
          </div>
          <div className="drawer-button-container">
            <PayBackETHDrawerButton user={user} />
          </div>
        </div>
      </div>
    </div>
  </Drawer>
));

const PayLoanDrawer = ({ user }) => {
  return <ObservePayLoanDrawer user={user} />;
};

export default PayLoanDrawer;
