import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={`relative p-[4px] group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 rounded-3xl z-[1] opacity-80 md:group-hover:opacity-90 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#F6D10A,transparent),radial-gradient(circle_farthest-side_at_100%_0,#F6D10A,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#F6D10A,transparent),radial-gradient(circle_farthest-side_at_0_0,#F6D10A,#F6D10A)]`}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 rounded-3xl z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#f7d622,transparent),radial-gradient(circle_farthest-side_at_100%_0,#f7d622,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f7d622,transparent),radial-gradient(circle_farthest-side_at_0_0,#f7d622,#f7d622)]`}
      />
      <motion.div
        className="absolute top-3 left-5 md:top-5 md:left-9 text-6xl md:text-7xl text-yellow-300 font-custom"
        style={{ zIndex: 30 }}
      >
        $happi
      </motion.div>
      <motion.a
        href="https://pump.fun/5ZMBJezsvSE1UnKdAJUAcXVzSm8QhqH8bfqkGALDpump"
        className="absolute bottom-[18px] right-5 md:bottom-9 md:right-10 md:hover:scale-105 transition ease-in-out duration-200 text-4xl md:text-6xl bg-yellow-300 px-5 py-2.5 rounded-md font-custom"
        style={{ zIndex: 30 }}
      >
        <div className="">BUY</div>
      </motion.a>
      <div className={`relative z-20 ${className}`}>{children}</div>
    </div>
  );
};