import { motion } from "framer-motion";
import React from "react";

const AnimatedDiv: React.FC<React.ComponentProps<typeof motion.div>> = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default AnimatedDiv; 