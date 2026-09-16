import { Layout } from "@layouts/admin";
import { Navigation } from "@shared/navigation";
import { AnimatePresence, motion } from "motion/react";

import { useToastContext } from "../contexts";
import { ToastContainer } from "./ToastContainer";

export const ToastView = () => {
  const {
    state: { isOpen, message, variant, ref },
  } = useToastContext();

  const { isSidebarOpen } = Layout.use();
  const sidebarWidth = isSidebarOpen ? "left-64" : "left-0";
  const currentArea = Navigation.hooks.useCurrentArea();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="notification"
          className={
            currentArea === "admin"
              ? `toast-view-admin ${sidebarWidth}`
              : "toast-view-client"
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ToastContainer toastRef={ref} message={message} variant={variant} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
