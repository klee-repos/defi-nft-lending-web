// external
import { observer } from "mobx-react-lite";
import CircularProgress from "@mui/material/CircularProgress";
// internal
import "../../css/dashboard.scss";
import { primary } from "../../css/muiThemes";
import Navbar from "../Navbar";
import MenuDrawer from "../MenuDrawer";
import DepositNFTDrawer from "./DepositNFTDrawer";
import WithdrawNFTDrawer from "./WithdrawNFTDrawer";
import BorrowETHDrawer from "./BorrowETHDrawer";
import { connectWeb3Wallet } from "../../utils/InitHelper";
import {
  ObserveErrorSnackbar,
  ObserveDepositNFTSuccessSnackbar,
  ObserveWithdrawNFTSuccessSnackbar,
  ObserveBorrowETHSuccessSnackbar,
} from "../Snackbars";
import {
  DepositNFTButton,
  WithdrawNFTButton,
  BorrowETHButton,
} from "./DashboardButtons";

function initialLoad(user, cookies, db) {
  if (user.initialLoad === false) {
    let hasConnected = cookies.get("connected");
    if (hasConnected === "false" || !hasConnected) {
      user.setInitialLoad(true);
    } else {
      connectWeb3Wallet(user, cookies);
    }
  }
  if (user.initialLoad) {
    return (
      <>
        <Navbar user={user} cookies={cookies} />
        <div className="content-container">
          {user.walletAddress.length > 0 ? (
            <div className="card-container">
              <div className="card margin-bottom">
                <div className="card-row">
                  <div className="card-column">
                    <span>
                      {" "}
                      🌡 Health: <span className="bold">{user.healthScore}</span>
                    </span>
                  </div>
                  <div className="card-column">
                    <span>
                      {" "}
                      🏛 Collateral:{" "}
                      <span className="bold">${user.collateral}</span>
                    </span>
                  </div>
                  <div className="card-column">
                    <span>
                      💵 Borrowing:{" "}
                      <span className="bold">${user.borrowed}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-row">
                  <div className="button-container margin-right">
                    <DepositNFTButton user={user} />
                  </div>
                  <div className="button-container margin-right">
                    <WithdrawNFTButton user={user} />
                  </div>
                  <div className="button-container">
                    <BorrowETHButton user={user} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-container">
              <div className="card">Welcome. Login to continue.</div>
            </div>
          )}
        </div>
        <MenuDrawer user={user} cookies={cookies} />
        <DepositNFTDrawer user={user} />
        <WithdrawNFTDrawer user={user} />
        <BorrowETHDrawer user={user} />
        <ObserveErrorSnackbar user={user} />
        <ObserveDepositNFTSuccessSnackbar user={user} />
        <ObserveWithdrawNFTSuccessSnackbar user={user} />
        <ObserveBorrowETHSuccessSnackbar user={user} />
      </>
    );
  } else {
    return (
      <div className="loading-container">
        <CircularProgress theme={primary} />
      </div>
    );
  }
}

const ObserveInitialLoad = observer(({ user, cookies, db }) => (
  <>{initialLoad(user, cookies, db)}</>
));

const Dashboard = ({ user, cookies, db }) => {
  return (
    <div className="main">
      <ObserveInitialLoad user={user} cookies={cookies} db={db} />
    </div>
  );
};

export default Dashboard;
