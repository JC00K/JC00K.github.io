import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <Tooltip title="React">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
        </Tooltip>
        <Tooltip title="React Native">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandReactNative className="text-7xl text-cyan-400" />
          </motion.div>
        </Tooltip>
        <Tooltip title="Next.js">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl" />
          </motion.div>
        </Tooltip>
        <Tooltip title="Node.js">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNodejsLine className="text-7xl text-green-500" />
          </motion.div>
        </Tooltip>
        <Tooltip title="TypeScript">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoTypescript className="text-7xl text-blue-600" />
          </motion.div>
        </Tooltip>
        <Tooltip title="PostgreSQL">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </motion.div>
        </Tooltip>
        <Tooltip title="Tailwind CSS">
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className="text-7xl text-cyan-200" />
          </motion.div>
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default Technologies;
