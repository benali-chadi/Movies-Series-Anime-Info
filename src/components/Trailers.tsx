import React, { FC, useState } from "react";
import YouTube from "../../node_modules/react-youtube/dist/YouTube";

interface Props {
	videsIds: string[];
}

const Trailers: FC<Props> = ({ videsIds }) => {
	const [selectedImage, setSelectedImage] = useState("");

	const opts = {
		width: 400,
		height: 300,
	};

	return (
		<div
			className="relative mx-4 overflow-hidden h-[20rem] flex flex-col gap-2 justify-center"
			// style={{
			// 	background: `url(${selectedImage}) no-repeat`,
			// 	backgroundSize: "cover",
			// }}
		>
			<img
				src={selectedImage}
				alt="Thumbnail image"
				className="absolute inset-0 top-[-50%] w-full h-[200%] blur-lg"
			/>
			<h2 className="relative z-10 pl-2 text-3xl font-bold text-my-white">
				Latest Trailers
			</h2>
			<div className="relative z-10 flex w-full gap-4 p-2 noScroll">
				{videsIds.map((id) => {
					return (
						<div className="relative flex-shrink-0 cursor-pointer hover:scale-110">
							<i className="fa-solid fa-play absolute top-[calc(50%-1rem)] left-[calc(50%-1rem)] text-white text-[3rem]"></i>
							<img
								src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
								className="rounded-3xl"
								onMouseEnter={() =>
									setSelectedImage(
										`https://img.youtube.com/vi/${id}/hqdefault.jpg`,
									)
								}
							/>
						</div>
						// <YouTube
						// 	videoId={id}
						// 	opts={opts}
						// 	className="p-2 bg-black rounded-3xl"
						// />
					);
				})}
			</div>
		</div>
	);
};

export default Trailers;
