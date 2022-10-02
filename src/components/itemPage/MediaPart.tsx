import React, { FC, useState } from "react";
import Modal from "../Common/Modal";
import Spinner from "../Common/Spinner";
import Video from "../Common/Video";
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from "react-responsive";

interface Props {
	images: {
		id: number;
		backdrops: string[];
		posters: string[];
	};
	videos: string[];
	loading: boolean;
}

const MediaPart: FC<Props> = ({ images, videos, loading }) => {
	const [toggle, setToggle] = useState<"videos" | "backdrops" | "posters">(
		"videos"
	);
	const [showImageSlider, setShowImageSlider] = useState(false);
	const [imagesToDisplay, setImagesToDisplay] = useState(null);
	const [startIndex, setStartIndex] = useState(0);
	const isMobile = useMediaQuery({
		query: "(max-width: 767px)",
	});
	if (loading) return <Spinner />;
	if (!images && !videos) return null;

	const backdropsList = images.backdrops
		.filter((src) => src !== "")
		.map((src) => ({ url: src }));
	const postersList = images.posters
		.filter((src) => src !== "")
		.map((src) => ({ url: src }));
	const posterDimensions = {
		width: isMobile ? 300 : 510,
		height: isMobile ? 500 : 800,
	};
	const backdropsDimensions = {
		width: isMobile ? 350 : 900,
		height: isMobile ? 300 : 500,
	};
	return (
		<div className="h-full">
			<h2 className="pb-2 pl-2 text-4xl font-bold text-my-white">
				Media
			</h2>
			<div className="flex gap-3 pb-2">
				<h3
					className={` text-2xl text-white cursor-pointer ${
						toggle === "videos"
							? "font-bold border-b-4  border-my-yellow"
							: "hover:border-b-2 border-my-yellow/70"
					}`}
					onClick={() => setToggle("videos")}
				>
					Videos
				</h3>
				<h3
					className={` text-2xl text-white cursor-pointer ${
						toggle === "backdrops"
							? "font-bold border-b-4  border-my-yellow"
							: "hover:border-b-2 border-my-yellow/70"
					}`}
					onClick={() => setToggle("backdrops")}
				>
					Backdrops
				</h3>
				<h3
					className={` text-2xl text-white cursor-pointer ${
						toggle === "posters"
							? "font-bold border-b-4  border-my-yellow"
							: "hover:border-b-2 border-my-yellow/70"
					}`}
					onClick={() => setToggle("posters")}
				>
					Posters
				</h3>
			</div>
			{toggle === "videos" && (
				<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
					{videos.map((key) => (
						<Video id={key} key={key} />
					))}
				</div>
			)}
			{toggle === "backdrops" && (
				<div className="flex gap-4 p-2 w-full rounded-3xl cursor-pointer noScroll">
					{images.backdrops
						.filter((src) => src !== "")
						.map((src, i) => (
							<div
								className="flex-shrink-0"
								onClick={() => {
									setImagesToDisplay(backdropsList);
									setStartIndex(i);
									setShowImageSlider(true);
								}}
								key={src}
							>
								<img
									src={src}
									alt="Image"
									className="max-h-[15rem] hover:scale-110 hover:rounded-[.5rem]"
								/>
							</div>
						))}
				</div>
			)}
			{toggle === "posters" && (
				<div className="flex gap-4 p-2 w-full rounded-3xl cursor-pointer noScroll">
					{images.posters
						.filter((src) => src !== "")
						.map((src, i) => (
							<div
								className="flex-shrink-0"
								onClick={() => {
									setImagesToDisplay(postersList);
									setStartIndex(i);
									setShowImageSlider(true);
								}}
								key={src}
							>
								<img
									src={src}
									alt="Image"
									className="max-h-[15rem] hover:scale-110 hover:rounded-[.5rem]"
								/>
							</div>
						))}
				</div>
			)}
			<Modal
				show={showImageSlider}
				close={() => setShowImageSlider(false)}
				type="image"
			>
				<SimpleImageSlider
					width={
						toggle === "backdrops"
							? backdropsDimensions.width
							: posterDimensions.width
					}
					height={
						toggle === "backdrops"
							? backdropsDimensions.height
							: posterDimensions.height
					}
					images={imagesToDisplay}
					showBullets={false}
					showNavs={true}
					startIndex={startIndex}
				/>
			</Modal>
		</div>
	);
};

export default MediaPart;
