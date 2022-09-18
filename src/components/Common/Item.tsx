import React, { FC } from "react";
import { useRouter } from "next/router";

interface Props {
	id: number;
	poster: string;
	info: {
		title: string;
		date: string;
	};
	rating: number;
}

const Item: FC<Props> = ({ id, poster, info, rating }) => {
	const router = useRouter();
	const backgroundStyle = {
		background: `url(${
			poster !== "" ? poster : "/images/default_poster.png"
		}) no-repeat`,
		backgroundSize: "12rem 17rem",
	};

	const handleClick = () => {
		const pathname = "/" + router.pathname.split("/")[1];
		router.push(`${pathname}/${id}`);
	};
	return (
		<div
			className={`flex relative flex-col flex-shrink-0 justify-end rounded-xl shadow-xl cursor-pointer w-[12rem] h-[17rem] hover:shadow-2xl hover:scale-105`}
			// style={backgroundStyle}
			onClick={handleClick}
		>
			<img
				src={poster !== "" ? poster : "/images/default_poster.png"}
				alt="Poster"
				className="w-[12rem] h-[17rem] absolute inset-0 bg-white/60"
			/>
			<div className="rounded-full bg-my-yellow w-[2.5rem] h-[2.5rem] flex flex-col items-center drop-shadow- justify-center absolute left-[40%] top-[-1rem] shadow-[inset_-1px_2px_5px_#000000]">
				<p className="font-bold">{!!rating && rating.toFixed(1)}</p>
			</div>
			{/* Info */}
			<div className="z-10 p-2 pt-0 bg-gradient-to-t from-black via-black/50">
				<h3 className="font-bold text-white">{info.title}</h3>
				<h4 className="font-bold text-white">{info.date}</h4>
			</div>
		</div>
	);
};

export default Item;