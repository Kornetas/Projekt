import { motion } from 'framer-motion';
import React from 'react';

// Przykład animacji dla Home
export const homeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
};

const AnimationWrapper = ({ children, animation }) => {
  return (
    <motion.div
      initial={animation?.initial}  // Użycie przekazanych animacji
      animate={animation?.animate}   // Użycie przekazanych animacji
      exit={animation?.exit}         // Użycie przekazanych animacji
      transition={animation?.transition} // Użycie przekazanych animacji
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;





