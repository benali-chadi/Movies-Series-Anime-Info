import React, { FC, useEffect, useState } from "react";
import Video from "./Common/Video";
import { motion, AnimatePresence } from "framer-motion";
import { getMLatestTrailers } from "../lib/Movies/homePageData";
import Spinner from "./Common/Spinner";
import { getALatestTrailers } from "../lib/Anime/homePageData";
import { getSLatestTrailers } from "../lib/Series/homePageData";

interface Props {
	type: "movies" | "series" | "anime";
}

const Trailers: FC<Props> = ({ type }) => {
	const [videosIds, setVideosIds] = useState<null | string[]>(null);
	const [selectedImage, setSelectedImage] = useState("");
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const wrapper = async () => {
			const { trailersIds, ok } =
				type === "movies"
					? await getMLatestTrailers()
					: type === "series"
					? await getSLatestTrailers()
					: await getALatestTrailers();
			if (!ok) return;
			setVideosIds(trailersIds);
		};
		setLoading(true);
		wrapper();
		setLoading(false);
	}, [type]);

	const bgVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 0.5,
		},
		exit: {
			opacity: 0.3,
		},
	};

	if (loading) return <Spinner />;
	if (!videosIds) return null;

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
						<Video
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
