import { makeAutoObservable } from "mobx";

class User {
  constructor() {
    makeAutoObservable(this);
  }

  isContractOwner = false;
  walletAddress = "";
  provider = {};
  chainId = "";
  networkVersion = 0;
  networkName = "";
  // contracts
  lendingContract = {};
  treasury = 0;
  healthScore = 1;
  collateral = 45;
  borrowed = 0;
  allowedNFTAddresses = [];
  // state
  getContractInfo = false;
  initialLoad = false;
  // drawers
  menuDrawer = false;
  depositNFTDrawer = false;
  withdrawNFTDrawer = false;
  borrowETHDrawer = false;
  payLoanDrawer = false;
  // inputs
  selectedProjectDropdown = 0;
  nftTokenIdInput = 0;
  borrowETHInput = 0;
  loanPaymentInput = 0;
  // snackbars
  errorSnackbar = false;
  depositNFTSuccessSnackbar = false;
  withdrawNFTSuccessSnackbar = false;
  borrowETHSuccessSnackbar = false;
  payBackETHSuccessSnackbar = false;

  async setPayBackETHSuccessSnackbar(payBackETHSuccessSnackbar) {
    this.payBackETHSuccessSnackbar = payBackETHSuccessSnackbar;
  }

  async setLoanPaymentInput(loanPaymentInput) {
    this.loanPaymentInput = loanPaymentInput;
  }

  async setPayLoanDrawer(payLoanDrawer) {
    this.payLoanDrawer = payLoanDrawer;
  }

  async setBorrowETHSuccessSnackbar(borrowETHSuccessSnackbar) {
    this.borrowETHSuccessSnackbar = borrowETHSuccessSnackbar;
  }

  async setBorrowETHInput(borrowETHInput) {
    this.borrowETHInput = borrowETHInput;
  }

  async setBorrowETHDrawer(borrowETHDrawer) {
    this.borrowETHDrawer = borrowETHDrawer;
  }

  async setWithdrawNFTSuccessSnackbar(withdrawNFTSuccessSnackbar) {
    this.withdrawNFTSuccessSnackbar = withdrawNFTSuccessSnackbar;
  }

  async setDepositNFTSuccessSnackbar(depositNFTSuccessSnackbar) {
    this.depositNFTSuccessSnackbar = depositNFTSuccessSnackbar;
  }

  async setWithdrawNFTDrawer(withdrawNFTDrawer) {
    this.withdrawNFTDrawer = withdrawNFTDrawer;
  }

  async setNftTokenIdInput(nftTokenIdInput) {
    this.nftTokenIdInput = nftTokenIdInput;
  }

  async setSelectedProjectDropdown(selectedProjectDropdown) {
    this.selectedProjectDropdown = selectedProjectDropdown;
  }

  async setDepositNFTDrawer(depositNFTDrawer) {
    this.depositNFTDrawer = depositNFTDrawer;
  }

  async setAllowedNFTAddresses(allowedNFTAddresses) {
    this.allowedNFTAddresses = allowedNFTAddresses;
  }

  async setHealthScore(healthScore) {
    this.healthScore = healthScore;
  }

  async setBorrowed(borrowed) {
    this.borrowed = borrowed;
  }

  async setCollateral(collateral) {
    this.collateral = collateral;
  }

  async setTreasury(treasury) {
    this.treasury = treasury;
  }

  async setLendingContract(lendingContract) {
    this.lendingContract = lendingContract;
  }

  async setMenuDrawer(menuDrawer) {
    this.menuDrawer = menuDrawer;
  }

  async setIsContractOwner(isContractOwner) {
    this.isContractOwner = isContractOwner;
  }

  async setGetContractInfo(getContractInfo) {
    this.getContractInfo = getContractInfo;
  }

  async setErrorSnackbar(errorSnackbar) {
    this.errorSnackbar = errorSnackbar;
  }

  async setInitialLoad(initialLoad) {
    this.initialLoad = initialLoad;
  }

  async setNetworkName(networkName) {
    this.networkName = networkName;
  }

  async setNetworkVersion(networkVersion) {
    this.networkVersion = networkVersion;
  }

  async setChainId(chainId) {
    this.chainId = chainId;
  }

  async setProvider(provider) {
    this.provider = provider;
  }

  async setWalletAddress(walletAddress) {
    this.walletAddress = walletAddress;
  }
}

export default User;
