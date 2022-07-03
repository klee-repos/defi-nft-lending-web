// external
import { observer } from "mobx-react-lite";
import Snackbar from "@mui/material/Snackbar";

export const ObserveErrorSnackbar = observer(({ user }) => (
  <Snackbar
    open={user.errorSnackbar}
    autoHideDuration={4000}
    onClose={() => {
      user.setErrorSnackbar(false);
    }}
    message="😵 An error has occurred"
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  />
));

export const ObserveDepositNFTSuccessSnackbar = observer(({ user }) => (
  <Snackbar
    open={user.depositNFTSuccessSnackbar}
    autoHideDuration={4000}
    onClose={() => {
      user.setDepositNFTSuccessSnackbar(false);
    }}
    message={`🏛 Successful deposit. Collateral increased to $${user.collateral}`}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  />
));

export const ObserveWithdrawNFTSuccessSnackbar = observer(({ user }) => (
  <Snackbar
    open={user.withdrawNFTSuccessSnackbar}
    autoHideDuration={4000}
    onClose={() => {
      user.setWithdrawNFTSuccessSnackbar(false);
    }}
    message={`🏛 Successful withdraw. Collateral decreased to $${user.collateral}`}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  />
));

export const ObserveBorrowETHSuccessSnackbar = observer(({ user }) => (
  <Snackbar
    open={user.borrowETHSuccessSnackbar}
    autoHideDuration={4000}
    onClose={() => {
      user.setBorrowETHSuccessSnackbar(false);
    }}
    message={`💵 Loan accepted! Borrowed increased to $${user.borrowed}`}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  />
));
