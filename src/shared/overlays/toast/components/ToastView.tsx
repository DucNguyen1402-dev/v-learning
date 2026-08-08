import { Toast } from "@shared/overlays/toast";
import { AnimatePresence, motion } from "motion/react";

import { ToastContainer } from "./ToastContainer";

export const ToastView = () => {
  const {
    state: { isOpen, message, variant, ref },
  } = Toast.use();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="notification"
          className="pointer-events-none fixed inset-0 z-toast flex w-full max-w-md items-start justify-center px-4 pt-10 lg:max-w-full"
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
