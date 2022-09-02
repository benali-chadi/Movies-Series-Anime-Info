import React, { FC, useEffect, useRef, useState } from "react";
import YouTube from "../../../node_modules/react-youtube/dist/YouTube";
import Modal from "../Modal";

interface Props {
	id: string;
	setSelectedImage: (path: string) => void;
}

const Trailer: FC<Props> = ({ id, setSelectedImage }) => {
	const [showVideo, setShowVideo] = useState(false);
	const imagePath = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

	return (
		<div className="relative flex-shrink-0 cursor-pointer hover:scale-110">
			<i
				className="fa-solid fa-play absolute top-[calc(50%-1rem)] left-[calc(50%-1rem)] text-white text-[3rem]"
				onClick={() => setShowVideo(true)}
			></i>
			<img
				src={imagePath}
				className="rounded-3xl"
				id="trailer-image"
				onMouseEnter={() => setSelectedImage(imagePath)}
			/>
			<Modal show={showVideo} close={() => setShowVideo(false)}>
				<YouTube
					videoId={id}
					className="w-full h-full"
					iframeClassName="w-full h-full"
				/>
			</Modal>
		</div>
	);
};

export default Trailer;
