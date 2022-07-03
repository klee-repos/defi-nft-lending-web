// external
import { observer } from "mobx-react-lite";
import Drawer from "@mui/material/Drawer";
// internal
import "../../css/drawers.scss";
import {
  DepositNFTDrawerButton,
  DepositNFTCancelButton,
} from "./DashboardButtons";
import { SelectProjectDropdown, NFTTokenIDInput } from "./DashboardInputs";

const ObserveDepositNFTDrawer = observer(({ user }) => (
  <Drawer
    anchor="bottom"
    onClose={() => {
      user.setDepositNFTDrawer(false);
    }}
    open={user.depositNFTDrawer}
  >
    <div className="drawer-container">
      <div className="drawer-card-container">
        <div className="drawer-title-container margin-bottom">
          <span className="drawer-header">Deposit NFT</span>
        </div>
        <div className="drawer-content-row margin-bottom">
          <SelectProjectDropdown user={user} />
        </div>
        <div className="drawer-content-row margin-bottom">
          <NFTTokenIDInput user={user} />
        </div>
        <div className="drawer-content-button-row">
          <div className="drawer-button-container button-margin-right">
            <DepositNFTCancelButton user={user} />
          </div>
          <div className="drawer-button-container button-margin-right">
            <DepositNFTDrawerButton user={user} />
          </div>
        </div>
      </div>
    </div>
  </Drawer>
));

const DepositNFTDrawer = ({ user }) => {
  return <ObserveDepositNFTDrawer user={user} />;
};

export default DepositNFTDrawer;
