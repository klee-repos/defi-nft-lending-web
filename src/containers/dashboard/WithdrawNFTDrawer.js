// external
import { observer } from "mobx-react-lite";
import Drawer from "@mui/material/Drawer";
// internal
import "../../css/drawers.scss";
import {
  WithdrawNFTDrawerButton,
  WithdrawNFTCancelButton,
} from "./DashboardButtons";
import { SelectProjectDropdown, NFTTokenIDInput } from "./DashboardInputs";

const ObserveWithdrawNFTDrawer = observer(({ user }) => (
  <Drawer
    anchor="bottom"
    onClose={() => {
      user.setWithdrawNFTDrawer(false);
    }}
    open={user.withdrawNFTDrawer}
  >
    <div className="drawer-container">
      <div className="drawer-card-container">
        <div className="drawer-title-container margin-bottom">
          <span className="drawer-header">Withdraw NFT</span>
        </div>
        <div className="drawer-content-row margin-bottom">
          <SelectProjectDropdown user={user} />
        </div>
        <div className="drawer-content-row margin-bottom">
          <NFTTokenIDInput user={user} />
        </div>
        <div className="drawer-content-button-row">
          <div className="drawer-button-container button-margin-right">
            <WithdrawNFTCancelButton user={user} />
          </div>
          <div className="drawer-button-container button-margin-right">
            <WithdrawNFTDrawerButton user={user} />
          </div>
        </div>
      </div>
    </div>
  </Drawer>
));

const WithdrawNFTDrawer = ({ user }) => {
  return <ObserveWithdrawNFTDrawer user={user} />;
};

export default WithdrawNFTDrawer;
