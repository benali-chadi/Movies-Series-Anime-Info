import React, { FC, useEffect, useState } from "react";
import Trailer from "./Trailer";

interface Props {
	videosIds: string[];
}

const Trailers: FC<Props> = ({ videosIds }) => {
	const [selectedImage, setSelectedImage] = useState(
		`https://img.youtube.com/vi/${videosIds[0]}/mqdefault.jpg`,
	);

	return (
		<div className="relative mx-4 overflow-hidden h-[20rem] flex flex-col gap-2 justify-center">
			<img
				src={selectedImage}
				alt="Thumbnail image"
				className="absolute inset-0 top-[-50%] w-full h-[200%] blur-lg opacity-50"
			/>
			<h2 className="relative z-10 pl-2 text-4xl font-bold text-my-white">
				Latest Trailers
			</h2>
			<div className="relative z-10 flex w-full gap-4 p-2 noScroll">
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
