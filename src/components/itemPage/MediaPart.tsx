import React, { FC, useState } from "react";
import MyImage from "../MyImage";
import Trailers from "../Trailers";
import Video from "../Video";

interface Props {
	images: {
		id: number;
		backdrops: string[];
		posters: string[];
	};
	videos: string[];
}

const MediaPart: FC<Props> = ({ images, videos }) => {
	const [toggle, setToggle] = useState(true);
	return (
		<div>
			<h2 className="pb-2 pl-2 text-4xl font-bold text-my-white">
				Media
			</h2>
			<div className="flex gap-3 pb-2">
				<h3
					className={` text-2xl text-white cursor-pointer ${
						toggle
							? " border-b-4 border-my-yellow font-bold"
							: "hover:border-b-2 border-my-yellow/70"
					}`}
					onClick={() => setToggle(true)}
				>
					Videos
				</h3>
				<h3
					className={` text-2xl text-white cursor-pointer ${
						!toggle
							? " border-b-4 border-my-yellow font-bold"
							: "hover:border-b-2 border-my-yellow/70"
					}`}
					onClick={() => setToggle(false)}
				>
					Pictures
				</h3>
			</div>
			{toggle && (
				<div className="flex w-full gap-4 p-2 noScroll rounded-3xl">
					{videos.map((key) => (
						<Video id={key} key={key} />
					))}
				</div>
			)}
			{!toggle && (
				<div className="flex w-full gap-4 p-2 noScroll rounded-3xl">
					{images.backdrops.map((src) => (
						<MyImage src={src} />
					))}
					{images.posters.map((src) => (
						<MyImage src={src} />
					))}
				</div>
			)}
		</div>
	);
};

export default MediaPart;
