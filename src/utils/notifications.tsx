import { notification } from "antd";
import { Notification } from "@types";

export const openNotification = ({
   type,
   message,
   description,
}: Notification): void => {
   notification[type]({
      message,
      description,
      placement: "topRight",
      duration: 2,
      showProgress: true,
   });
};
