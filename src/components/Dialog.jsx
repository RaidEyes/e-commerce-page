import React, { useContext, useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import { dialogContext } from "./Main";

function Dialog() {
  const dialogState = useContext(dialogContext).dialog;
  const toggleDialog = useContext(dialogContext).toggleDialog;
  const setDialog = useContext(dialogContext).setDialog;
  useEffect(() => {
    const dialogEl = document.getElementById("dialog");
    if (dialogState === true) {
      dialogEl.showModal();
    }
    if (dialogState === false) {
      dialogEl.close();
    }
    dialogEl.addEventListener("close", () => {
      setDialog(false);
    });
  }, [dialogState]);
  return (
    <dialog data-open-dialog={dialogState} id="dialog">
      <Carousel />
    </dialog>
  );
}

export default Dialog;
