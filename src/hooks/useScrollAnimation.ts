import { useRef } from "react";
import { useInView } from "framer-motion";

type MarginPresets = "-100px" | "-50%" | "0px" | "100px";

export function useScrollAnimation(margin: MarginPresets = "-50%") {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}
