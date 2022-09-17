import React, { FC, useState } from "react";
import MyImage from "../Common/MyImage";
import Trailers from "../Trailers";
import Video from "../Common/Video";

interface Props {
	images: {
		id: number;
		backdrops: string[];
		posters: string[];
	};
	videos: string[];
}

const MediaPart: FC<Props> = ({ images, videos }) => {
	const [toggle, setToggle] = useState<"videos" | "backdrops" | "posters">(
		"videos"
	);
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
				<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
					{images.backdrops
						.filter((src) => src !== "")
						.map((src) => (
							<MyImage src={src} />
						))}
				</div>
			)}
			{toggle === "posters" && (
				<div className="flex gap-4 p-2 w-full rounded-3xl noScroll">
					{images.posters
						.filter((src) => src !== "")
						.map((src) => (
							<MyImage src={src} />
						))}
				</div>
			)}
		</div>
	);
};

export default MediaPart;
