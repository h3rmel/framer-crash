import { MotionConfig, motion } from "framer-motion";
import { CSSProperties } from "react";

const cssProps: CSSProperties = {
  display: "grid",
  placeContent: "center",
  height: "100vh",
  gap: "2rem",
};

export function Gestures(): JSX.Element {
  return (
    <div style={cssProps}>
      <MotionConfig
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "5deg" }}
          className="btn"
        >
          Click me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "-5deg" }}
          className="btn btn-danger"
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
}
