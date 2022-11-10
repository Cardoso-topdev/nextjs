/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteButton } from "react-admin";
import { styled } from "@mui/material";

const DeviiDeleteButton = styled(DeleteButton)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  textTransform: "none",
  fontWeight: 400,
  color: theme.palette.text.primary,
  borderRadius: 0,
  justifyContent: "flex-start",
  padding: theme.spacing(1),
  "&:hover, &:active": {
    backgroundColor: "transparent",
  },
}));

export default DeviiDeleteButton;
