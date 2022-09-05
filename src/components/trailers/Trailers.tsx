import React, { FC, useEffect, useState } from "react";
import Trailer from "./Trailer";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
	videosIds: string[];
}

const Trailers: FC<Props> = ({ videosIds }) => {
	const [selectedImage, setSelectedImage] = useState(
		`https://img.youtube.com/vi/${videosIds[0]}/mqdefault.jpg`,
	);
	const bgVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 0.5,
			// transition: {
			// 	type: "tween",
			// 	duration: 0.6,
			// },
		},
		exit: {
			opacity: 0.3,
		},
	};

	return (
		<div className="relative mx-4 overflow-hidden h-[20rem] flex flex-col gap-2 justify-center">
			<AnimatePresence>
				<motion.img
					key={selectedImage}
					variants={bgVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					src={selectedImage}
					alt="Thumbnail image"
					className="absolute inset-0 top-[-50%] w-full h-[200%] blur-lg opacity-50 transition-opacity duration-700 ease-in-out border-x-[1.5rem] border-transparent"
				/>
			</AnimatePresence>
			<h2 className="relative z-10 pl-2 text-4xl font-bold text-my-white">
				Latest Trailers
			</h2>
			<div className="relative z-10 flex w-full gap-4 p-2 noScroll border-x-[.2rem] border-transparent rounded-3xl">
				{videosIds.map((id) => {
					return (
						<Trailer
							id={id}
							setSelectedImage={setSelectedImage}
							key={id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Trailers;
