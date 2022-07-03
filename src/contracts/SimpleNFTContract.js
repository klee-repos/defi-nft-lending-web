// external
import { ethers } from "ethers";
// internal
import SimpleNFT from "./SimpleNFT.json";

export async function ApproveNFTTransfer(user) {
  try {
    const signer = user.provider.getSigner();
    let abi = SimpleNFT.abi;
    let index = user.selectedProjectDropdown;
    let simpleNFT = new ethers.Contract(
      user.allowedNFTAddresses[index].address,
      abi,
      signer
    );
    let lendingContractAddress = user.lendingContract.address;
    let tx = await simpleNFT.approve(
      lendingContractAddress,
      user.nftTokenIdInput
    );
    let txReceipt = await tx.wait();
    console.log(txReceipt);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
