import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";
import {
	animeFetcher,
	getImages,
	getVideos,
} from "../../lib/Anime/specificPageData";
import MyImage from "../Common/MyImage";
import Spinner from "../Common/Spinner";
import Video from "../Common/Video";

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
	} = getImages(`${router.query.id}/pictures`);
	const {
		videos,
		isLoading: isVideosLoading,
		isError: isVideosError,
	} = getVideos(`${router.query.id}/videos`);

	const [toggle, setToggle] = useState<"pictures" | "promo" | "music">(
		"pictures"
	);

	const innerImages = isImagesLoading ? (
		<Spinner />
	) : isImagesError ? (
		<div className="text-4xl font-bold text-white">
			Error Loading Images
		</div>
	) : (
		<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
			{images
				.filter((id) => id !== "")
				.map((src) => (
					<MyImage src={src} key={src} />
				))}
		</div>
	);
	const innerVidPromos = isVideosLoading ? (
		<Spinner />
	) : isVideosError ? (
		<div className="text-4xl font-bold text-white">
			Error Loading Promo Videos
		</div>
	) : (
		<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
			{videos.promo
				.filter((id) => id !== "")
				.map((id) => (
					<Video id={id} key={id} />
				))}
		</div>
	);
	const innerVidMusic = isVideosLoading ? (
		<Spinner />
	) : isVideosError ? (
		<div className="text-4xl font-bold text-white">
			Error Loading Music Videos
		</div>
	) : (
		<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
			{videos.musicVideos
				.filter((id) => id !== "")
				.map((id) => (
					<Video id={id} key={id} />
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
			{toggle === "pictures" && innerImages}
			{toggle === "promo" && innerVidPromos}
			{toggle === "music" && innerVidMusic}
		</div>
	);
};

export default AnimeMediaPart;
