import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay }) => {
	return (
		<motion.div
			className={`absolute ${color} ${size} opacity-20 blur-xl`}
			style={{ top, left }}
			animate={{y: ["100%", "-10%", "100%"]}}
			transition={{
				duration: 10,
				ease: "linear",
				repeat: Infinity,
        repeatType: "loop",
				delay,
			}}
			aria-hidden='true'
		/>
	);
};
export default FloatingShape;