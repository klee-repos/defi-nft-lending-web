// external
import { observer } from "mobx-react-lite";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useNavigate } from "react-router-dom";
// internal
import "../css/menuDrawer.scss";
import { primary } from "../css/muiThemes";
import { logout } from "../utils/InitHelper";

const ObserveMenuDrawer = observer(({ user, cookies, navigate }) => (
  <Drawer
    anchor="right"
    open={user.menuDrawer}
    onClose={() => {
      user.setMenuDrawer(false);
    }}
  >
    <div className="menu-drawer-container">
      <div className="menu-drawer-header-container">
        <div className="menu-drawer-header-content">
          <span className="menu-drawer-username-text">{user.networkName}</span>
        </div>
      </div>
      <div className="menu-drawer-content-row">
        <Button
          variant=""
          theme={primary}
          sx={{ width: "90%" }}
          onClick={() => {
            logout(user, cookies);
          }}
        >
          <LogoutRoundedIcon sx={{ padding: "0px 10px 0 0" }} />
          Logout
        </Button>
      </div>
    </div>
  </Drawer>
));

const MenuDrawer = ({ user, cookies }) => {
  const navigate = useNavigate();
  return (
    <ObserveMenuDrawer user={user} cookies={cookies} navigate={navigate} />
  );
};

export default MenuDrawer;
