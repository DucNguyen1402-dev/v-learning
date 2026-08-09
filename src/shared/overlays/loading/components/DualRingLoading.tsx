import { useLockBodyScroll } from "@shared/overlays";
import { Backdrop } from "@shared/overlays";
import { Loading } from "@shared/overlays/loading";
import { AnimatePresence, motion } from "motion/react";

import { DualRingSpinner } from "./spinners";

const DualRingLoading = () => {
  const { isVisible } = Loading.use();

  useLockBodyScroll(isVisible);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Backdrop>
            <DualRingSpinner />
          </Backdrop>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DualRingLoading;
