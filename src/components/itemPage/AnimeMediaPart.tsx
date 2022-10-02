import { useRouter } from "next/router";
import React, { useState } from "react";
import { useGetImages, useGetVideos } from "../../lib/Anime/specificPageData";
import Spinner from "../Common/Spinner";
import Video from "../Common/Video";
import { useMediaQuery } from "react-responsive";
import Modal from "../Common/Modal";
import SimpleImageSlider from "react-simple-image-slider";

const Header = ({ title, clickCallBack, cond }) => (
	<h3
		className={`text-2xl text-white cursor-pointer ${
			cond
				? "font-bold border-b-4 border-my-yellow"
				: "hover:border-b-2 border-my-yellow/70"
		}`}
		onClick={clickCallBack}
	>
		{title}
	</h3>
);

const AnimeMediaPart = () => {
	const router = useRouter();

	const {
		images,
		isLoading: isImagesLoading,
		isError: isImagesError,
	} = useGetImages(`${router.query.id}/pictures`);
	const {
		videos,
		isLoading: isVideosLoading,
		isError: isVideosError,
	} = useGetVideos(`${router.query.id}/videos`);

	const [toggle, setToggle] = useState<"pictures" | "promo" | "music">(
		"pictures"
	);
	const [showImageSlider, setShowImageSlider] = useState(false);
	const [startIndex, setStartIndex] = useState(0);
	const isMobile = useMediaQuery({
		query: "(max-width: 767px)",
	});
	const picturesDimensions = {
		width: isMobile ? 300 : 510,
		height: isMobile ? 500 : 800,
	};

	const pictures = isImagesLoading ? (
		<Spinner />
	) : isImagesError ? (
		<div className="text-4xl font-bold text-white">
			Error Loading Images
		</div>
	) : (
		<div className="flex gap-4 p-2 w-full rounded-3xl cursor-pointer noScroll">
			{images
				.filter((src) => src !== "")
				.map((src, i) => (
					<div
						className="flex-shrink-0"
						onClick={() => {
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
	);
	const vidsPromos = isVideosLoading ? (
		<Spinner />
	) : isVideosError ? (
		<div className="text-4xl font-bold text-white">
			Error Loading Promo Videos
		</div>
	) : (
		<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
			{videos.promo
				.filter((src) => src !== "")
				.map((src) => (
					<Video id={src} key={src} />
				))}
		</div>
	);
	const vidsMusic = isVideosLoading ? (
		<Spinner />
	) : isVideosError ? (
		<div className="text-4xl font-bold text-white">
			Error Loading Music Videos
		</div>
	) : (
		<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
			{videos.musicVideos
				.filter((src) => src !== "")
				.map((src) => (
					<Video id={src} key={src} />
				))}
		</div>
	);

	return (
		<div className="h-full">
			<h2 className="pb-2 pl-2 text-4xl font-bold text-my-white">
				Media
			</h2>
			<div className="flex gap-3 pb-2 pl-2">
				<Header
					title="Pictures"
					clickCallBack={() => setToggle("pictures")}
					cond={toggle === "pictures"}
				/>
				<Header
					title="Promo Videos"
					clickCallBack={() => setToggle("promo")}
					cond={toggle === "promo"}
				/>
				<Header
					title="Music Videos"
					clickCallBack={() => setToggle("music")}
					cond={toggle === "music"}
				/>
			</div>
			{toggle === "pictures" && pictures}
			{toggle === "promo" && vidsPromos}
			{toggle === "music" && vidsMusic}
			<Modal
				show={showImageSlider}
				close={() => setShowImageSlider(false)}
				type="image"
			>
				<SimpleImageSlider
					width={picturesDimensions.width}
					height={picturesDimensions.height}
					images={
						images
							? images
									.filter((src) => src !== "")
									.map((src) => ({ url: src }))
							: null
					}
					showBullets={false}
					showNavs={true}
					startIndex={startIndex}
				/>
			</Modal>
		</div>
	);
};

export default AnimeMediaPart;
