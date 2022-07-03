// external
import { observer } from "mobx-react-lite";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export const SelectProjectDropdown = observer(({ user }) => (
  <FormControl fullWidth>
    <InputLabel>Select NFT project</InputLabel>
    <Select
      id="nft-project-dropdown"
      value={user.allowedNFTAddresses[user.selectedProjectDropdown].id}
      label="Select NFT project"
      onChange={(event) => {
        user.setSelectedProjectDropdown(event.target.value);
      }}
      size="small"
    >
      {user.allowedNFTAddresses.map((project) => {
        return (
          <MenuItem value={project.id} key={project.id}>
            {project.address}
          </MenuItem>
        );
      })}
    </Select>
  </FormControl>
));

export const NFTTokenIDInput = observer(({ user }) => (
  <TextField
    id="nft-token-id"
    label="NFT Token ID"
    variant="outlined"
    size="small"
    sx={{ width: "100%" }}
    onChange={(e) => {
      user.setNftTokenIdInput(e.target.value);
    }}
    value={user.nftTokenIdInput}
  />
));

export const BorrowETHInput = observer(({ user }) => (
  <TextField
    id="borrow-eth-input"
    label="Borrow amount (ETH)"
    variant="outlined"
    size="small"
    sx={{ width: "100%" }}
    onChange={(e) => {
      user.setBorrowETHInput(e.target.value);
    }}
    value={user.borrowETHInput}
    InputProps={{
      endAdornment: <InputAdornment position="start">ETH</InputAdornment>,
    }}
  />
));

export const PayLoanInput = observer(({ user }) => (
  <TextField
    id="pay-loan-eth-input"
    label="Payment amount (ETH)"
    variant="outlined"
    size="small"
    sx={{ width: "100%" }}
    onChange={(e) => {
      user.setLoanPaymentInput(e.target.value);
    }}
    value={user.loanPaymentInput}
    InputProps={{
      endAdornment: <InputAdornment position="start">ETH</InputAdornment>,
    }}
  />
));
