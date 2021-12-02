import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Button from "@material-ui/core/Button";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Notification(props) {
  const { notify, setNotify } = props;
  const handleClose = (event,reason)=>{
    // if(notify.type=='success'){
    //   window.location.reload();
    // }
    setNotify({
      ...notify,
      isOpen:false
    })
  }
  return (
    <Snackbar open={notify.isOpen} autoHideDuration={3000}
     anchorOrigin={{vertical:'bottom',horizontal:'right', marginTop:'200px'} }
     onClose={handleClose}

     anchorPosition={{top:'50px'}}
   
     >
      <Alert severity={notify.type} onClose={handleClose}>
            {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
