export type Notification = {
   type: "success" | "info" | "warning" | "error";
   message?: string;
   description?: string;
   placement?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
};
