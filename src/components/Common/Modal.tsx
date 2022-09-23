import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
	show: boolean;
	close: () => void;
	children: JSX.Element;
}

const Modal: FC<Props> = ({ show, close, children }) => {
	const [isBrowser, setIsBrowser] = useState(false);
	const keyPress = (e) => {
		if (e.key === "Escape") close();
	};

	useEffect(() => {
		document.addEventListener("keydown", keyPress, false);
		setIsBrowser(true);

		return () => {
			document.removeEventListener("keydown", keyPress, false);
		};
	}, []);

	const handleCloseClick = (e) => {
		e.preventDefault();
		close();
	};

	const modalContent = (
		<div className="flex absolute inset-0 z-10 justify-center items-center w-screen h-screen">
			<div
				className="absolute inset-0 bg-black/75"
				onClick={handleCloseClick}
			></div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { type: "tween", duration: 1 },
				}}
				exit={{
					opacity: 0,
					// transition: { type: "tween", duration: 1 },
				}}
				className="relative z-10 flex flex-col bg-black w-[70%] h-[60%] rounded-xl"
			>
				<h1
					className="self-end mr-2 text-3xl font-bold text-white cursor-pointer hover:scale-110"
					onClick={handleCloseClick}
				>
					x
				</h1>
				{children}
			</motion.div>
		</div>
	);

	if (isBrowser) {
		return createPortal(
			<AnimatePresence>{show && modalContent}</AnimatePresence>,
			document.getElementById("modal-root")
		);
	} else {
		return null;
	}
};

export default Modal;
