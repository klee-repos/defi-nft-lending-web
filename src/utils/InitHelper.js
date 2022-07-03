// external
import { ethers } from "ethers";
// internal
import { chainIdToNetworkName } from "./NetworkMapping";
import { NFTLendingContractSetup } from "../contracts/LendingContract";

async function dashboardInit(user) {
  try {
    await NFTLendingContractSetup(user);
    await user.setInitialLoad(true);
    return;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return;
  }
}

export async function connectWeb3Wallet(user, cookies) {
  try {
    console.log("starting connect...");
    if (typeof window.ethereum != "undefined") {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      await user.setProvider(provider);
      await user.setWalletAddress(provider.provider.selectedAddress);
      await user.setChainId(provider.provider.chainId);
      await user.setNetworkVersion(provider.provider.networkVersion);
      await user.setNetworkName(await chainIdToNetworkName(user.chainId));
      cookies.set("connected", `true`);
      await dashboardInit(user);
      // debug
      console.log(`network: ${await chainIdToNetworkName(user.chainId)}`);
    }
    return;
  } catch (e) {
    cookies.set("connected", `false`);
    console.log(e);
    user.setErrorSnackbar(true);
    return;
  }
}

export async function logout(user, cookies) {
  try {
    await user.setProvider({});
    await user.setWalletAddress("");
    await user.setChainId("");
    await user.setNetworkVersion("");
    await user.setNetworkName("");
    await user.setMenuDrawer(false);
    cookies.set("connected", `false`);
    // debug
    console.log(`connected: ${user.walletAddress}`);
    return;
  } catch (e) {
    console.log(e);
    user.setErrorSnackbar(true);
    return;
  }
}
