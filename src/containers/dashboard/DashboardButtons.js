// external
import { observer } from "mobx-react-lite";
import Button from "@mui/material/Button";
// internal
import { primary } from "../../css/muiThemes";
import { ApproveNFTTransfer } from "../../contracts/SimpleNFTContract";
import {
  DepositNFT,
  SetHealthscore,
  SetAccountCollateral,
  SetBorrowed,
  WithdrawNFT,
  BorrowETH,
  PayBackETH,
} from "../../contracts/LendingContract";

export const DepositNFTButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    onClick={() => {
      user.setDepositNFTDrawer(true);
    }}
  >
    Deposit NFT
  </Button>
));

async function handleDepositNFTButton(user) {
  try {
    let success;
    // approve transfer
    success = await ApproveNFTTransfer(user);
    if (success) {
      // transfer
      success = await DepositNFT(user);
      if (success) {
        // update state
        await SetHealthscore(user);
        await SetAccountCollateral(user);
        await SetBorrowed(user);
        // close drawer
        user.setDepositNFTDrawer(false);
        user.setDepositNFTSuccessSnackbar(true);
        return;
      }
    }
    user.setDepositNFTDrawer(false);
    user.setErrorSnackbar(true);
    return;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
  }
}

export const DepositNFTDrawerButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    color="secondary"
    onClick={() => {
      handleDepositNFTButton(user);
    }}
  >
    Submit
  </Button>
));

export const DepositNFTCancelButton = observer(({ user }) => (
  <Button
    variant="outlined"
    theme={primary}
    color="secondary"
    onClick={() => {
      user.setDepositNFTDrawer(false);
    }}
  >
    Cancel
  </Button>
));

export const WithdrawNFTButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    onClick={() => {
      user.setWithdrawNFTDrawer(true);
    }}
  >
    Withdraw NFT
  </Button>
));

async function handleWithdrawNFTButton(user) {
  try {
    let success;
    // transfer
    success = await WithdrawNFT(user);
    if (success) {
      // update state
      await SetHealthscore(user);
      await SetAccountCollateral(user);
      await SetBorrowed(user);
      // close drawer
      user.setWithdrawNFTDrawer(false);
      user.setWithdrawNFTSuccessSnackbar(true);
      return;
    }
    user.setWithdrawNFTDrawer(false);
    user.setErrorSnackbar(true);
    return;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return;
  }
}

export const WithdrawNFTDrawerButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    color="secondary"
    onClick={() => {
      handleWithdrawNFTButton(user);
    }}
  >
    Submit
  </Button>
));

export const WithdrawNFTCancelButton = observer(({ user }) => (
  <Button
    variant="outlined"
    theme={primary}
    color="secondary"
    onClick={() => {
      user.setWithdrawNFTDrawer(false);
    }}
  >
    Cancel
  </Button>
));

export const BorrowETHButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    onClick={() => {
      user.setBorrowETHDrawer(true);
    }}
  >
    Borrow ETH
  </Button>
));

async function handleBorrowETH(user) {
  try {
    // transfer
    let success = await BorrowETH(user);
    if (success) {
      // update state
      await SetHealthscore(user);
      await SetAccountCollateral(user);
      await SetBorrowed(user);
      // close drawer
      user.setBorrowETHDrawer(false);
      user.setBorrowETHSuccessSnackbar(true);
      return;
    }
    user.setBorrowETHDrawer(false);
    user.setErrorSnackbar(true);
    return;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
  }
}

export const BorrowETHDrawerButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    color="secondary"
    onClick={() => {
      handleBorrowETH(user);
    }}
  >
    Submit
  </Button>
));

export const BorrowETHCancelButton = observer(({ user }) => (
  <Button
    variant="outlined"
    theme={primary}
    color="secondary"
    onClick={() => {
      user.setBorrowETHDrawer(false);
    }}
  >
    Cancel
  </Button>
));

async function handlePaybackLoan(user) {
  try {
    // transfer
    let success = await PayBackETH(user);
    if (success) {
      // update state
      await SetHealthscore(user);
      await SetAccountCollateral(user);
      await SetBorrowed(user);
      // close drawer
      user.setPayLoanDrawer(false);
      user.setPayBackETHSuccessSnackbar(true);
      return;
    }
    user.setPayLoanDrawer(false);
    user.setErrorSnackbar(true);
    return;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
  }
}

export const PayBackETHDrawerButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    color="secondary"
    onClick={() => {
      handlePaybackLoan(user);
    }}
  >
    Submit
  </Button>
));

export const PayBackETHButton = observer(({ user }) => (
  <Button
    variant="contained"
    theme={primary}
    onClick={() => {
      user.setPayLoanDrawer(true);
    }}
  >
    Repay ETH
  </Button>
));

export const PayBackETHCancelButton = observer(({ user }) => (
  <Button
    variant="outlined"
    theme={primary}
    color="secondary"
    onClick={() => {
      user.setPayLoanDrawer(false);
    }}
  >
    Cancel
  </Button>
));
