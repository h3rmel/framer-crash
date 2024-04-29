import { MutableRefObject, useRef } from "react";

import { motion, useInView } from "framer-motion";

export function ViewBasedAnimations(): JSX.Element {
  const ref: MutableRefObject<null> = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
        style={{
          height: "100vh",
          background: "#00c9b7",
        }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "#340BDB" : "#ff008c",
          transition: "2s background",
        }}
      ></div>
    </>
  );
}
