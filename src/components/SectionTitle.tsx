import { motion } from "framer-motion";

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white"
  >
    {children}
  </motion.h2>
);

export default SectionTitle; 