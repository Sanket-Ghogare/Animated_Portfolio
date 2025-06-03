// Togglebutton.jsx
import { motion } from "framer-motion";

const Togglebutton = ({ setOpen, open }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        animate={open ? "open" : "closed"}
      >
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "m 3 16.5 14 -14" }
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "m 3 2.5 14 14" }
          }}
        />
      </motion.svg>
    </button>
  );
};

export default Togglebutton;