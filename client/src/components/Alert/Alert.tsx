import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useSelector, useDispatch } from "react-redux";
import alertSelector from "./AlertSelector";
import { clearAlert } from "./AlertSlice";

export default function AlertComponent() {
  const { alertInfo, showAlert } = useSelector(alertSelector);
  const dispatch = useDispatch();

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      // eslint-disable-next-line
      return;
    }
    dispatch(clearAlert());
  };

  console.log("Snackbar", alertInfo);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={showAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Note archived"
      >
        <Alert
          severity={alertInfo.severity}
        >
          <AlertTitle>{alertInfo.title}</AlertTitle>
          {!!alertInfo.message && alertInfo.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
