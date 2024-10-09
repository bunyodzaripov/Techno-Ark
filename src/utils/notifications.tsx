import { notification } from "antd";
import { NotificationType } from "@types";

export const openNotification = ({
   type,
   message,
   description,
}: NotificationType): void => {
   notification[type]({
      message,
      description,
      placement: "topRight",
      duration: 2,
      showProgress: true,
   });
};
