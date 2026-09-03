import { useLockBodyScroll } from "@shared/overlays";
import { BackdropContainer } from "@shared/overlays/backdrop";
import { AnimatePresence, motion } from "motion/react";

import { ContainerSpinner } from "../components";

type ContainerLoadingProps = {
  isVisible: boolean;
};
export const ContainerLoading = ({ isVisible }: ContainerLoadingProps) => {
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
          <BackdropContainer>
            <ContainerSpinner />
          </BackdropContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
