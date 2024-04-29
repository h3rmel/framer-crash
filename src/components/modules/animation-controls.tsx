import { CSSProperties } from "react";

import { motion, useAnimationControls} from "framer-motion";

const cssProps: CSSProperties = {
  display: "grid",
  placeContent: "center",
  height: "100vh",
  gap: "2rem",
};

export function AnimationControls(): JSX.Element {
  const controls = useAnimationControls();

  function handleClick() {
    controls.start("flip")
  }

  return (
    <div style={cssProps}>
      <button onClick={handleClick} className="btn">Flip it!</button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        style={{
          width: 160,
          height: 160,
          background: "#00c9b7",
          borderRadius: "0.5rem",
        }}
        initial="initial"
        animate={controls}
      />
    </div>
  );
}
