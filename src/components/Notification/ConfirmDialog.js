import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(30),
    left: theme.spacing(80),
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    textAlign: "center",
  },
}));

function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle>
        <Typography variant="h6">{confirmDialog.title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2" classes={classes.dialogContent}>
          {confirmDialog.subtitle}
        </Typography>
      </DialogContent>
      <DialogActions classes={classes.dialogAction}>
        <Button color="primary" onClick={confirmDialog.confirm}>
          Yes
        </Button>
        <Button
          color="secondary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
