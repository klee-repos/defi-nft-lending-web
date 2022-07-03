// external
import { ethers } from "ethers";
// internal
import NFTLendingJSON from "../contracts/NFTLending.json";

const { REACT_APP_NFT_LENDING_ADDRESS } = process.env;

export async function NFTLendingContractSetup(user) {
  try {
    const signer = user.provider.getSigner();
    let abi = NFTLendingJSON.abi;
    let nftLending = new ethers.Contract(
      REACT_APP_NFT_LENDING_ADDRESS,
      abi,
      signer
    );
    // set contract in context
    await user.setLendingContract(nftLending);
    // set owner in context
    let ownerAddress = await nftLending.owner();
    if (ownerAddress.toLowerCase() === user.walletAddress.toLowerCase()) {
      await user.setIsContractOwner(true);
    }
    await SetTreasuryInUSD(user);
    await SetHealthscore(user);
    await SetAccountCollateral(user);
    await SetBorrowed(user);
    await GetAllowedNFTs(user);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function SetTreasuryInUSD(user) {
  try {
    let tx = await user.lendingContract.s_treasuryEth();
    let value = Number(tx.toString());
    await user.setTreasury(value);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function SetHealthscore(user) {
  try {
    let tx = await user.lendingContract.healthScore(user.walletAddress);
    let value = tx.toString();
    user.setHealthScore(value);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function SetAccountCollateral(user) {
  try {
    let tx = await user.lendingContract.accountCollateral(user.walletAddress);
    let value = tx.toString();
    value = Number(value) / 1e8;
    await user.setCollateral(value);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function SetBorrowed(user) {
  try {
    let ethBorrowed = await user.lendingContract.s_accountsToEthBorrow(
      user.walletAddress
    );
    let usdBorrowed = await user.lendingContract.ethToUSD(ethBorrowed);
    let value = usdBorrowed.toString();
    value = Number(value) / 1e8;
    user.setBorrowed(value);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function GetAllowedNFTs(user) {
  try {
    let allowedNFTAddresses = [];
    let totalAllowed = await user.lendingContract.s_totalAllowedNFTs();
    for (let i = 0; i < totalAllowed; i++) {
      let address = await user.lendingContract.s_allowedNFTs(i);
      allowedNFTAddresses.push({ id: i, address });
    }
    await user.setAllowedNFTAddresses(allowedNFTAddresses);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function DepositNFT(user) {
  try {
    let index = user.selectedProjectDropdown;
    let tx = await user.lendingContract.depositNFT(
      user.allowedNFTAddresses[index].address,
      user.nftTokenIdInput
    );
    let txReceipt = await tx.wait();
    console.log(txReceipt);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function WithdrawNFT(user) {
  try {
    let index = user.selectedProjectDropdown;
    let tx = await user.lendingContract.withdrawNFT(
      user.allowedNFTAddresses[index].address,
      user.nftTokenIdInput
    );
    let txReceipt = await tx.wait();
    console.log(txReceipt);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function BorrowETH(user) {
  try {
    let tx = await user.lendingContract.borrowEth(
      ethers.utils.parseEther(`${user.borrowETHInput}`)
    );
    let txReceipt = await tx.wait();
    console.log(txReceipt);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}

export async function PayBackETH(user) {
  try {
    console.log(user.loanPaymentInput);
    let tx = await user.lendingContract.payBackETH({
      value: ethers.utils.parseEther(`${user.loanPaymentInput}`),
    });
    let txReceipt = await tx.wait();
    console.log(txReceipt);
    return true;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return false;
  }
}
