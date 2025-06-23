/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionPProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export default function MotionP({ children, className, ...rest }: MotionPProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.p>
  );
} 