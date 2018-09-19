import { init } from "~/node_modules/@sentry/browser";

import actionList from "./action-list";
import alert from "./alert";
import button from "./button";
import datepicker from "./datepicker";
import dialog from "./dialog";
import loader from "./loader";
import modal from "./modal";
import rangeslider from "./rangeslider";
import sheet from "./sheet";
import script from "./script";
import tabs from "./tabs";
import toast from "./toast";
import topbar from "./topbar";
import validation from "./validation";

// sentry reporter
init({ dsn: "https://832de6a6953642bea1d70c41c12a5ccd@sentry.io/80077" });

const px = {
    actionList,
    alert,
    button,
    datepicker,
    dialog,
    loader,
    modal,
    rangeslider,
    sheet,
    script,
    tabs,
    toast,
    topbar,
    validation
};

window.px = px;

if (!window.stopPx) {
    document.addEventListener("DOMContentLoaded", () => {
        px.script.initAll();
    });
}

export default px;
export { actionList, alert, button, datepicker, dialog, loader, modal, rangeslider, sheet, script, tabs, toast, topbar, validation };