import { CSSProperties, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const cssProps: CSSProperties = {
  display: "grid",
  placeContent: "center",
  height: "100vh",
  gap: "2rem",
};

export function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div style={cssProps}>
      <motion.button
        className="btn"
        layout={true}
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        show/hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "360deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 160,
              height: 160,
              background: "#00c9b7",
              borderRadius: "0.5rem",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
