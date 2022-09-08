import React, { FC, useState } from "react";

interface Props {
	id: number;
	coverPoster: string;
	poster: string;
	info: {
		title: string;
		date: string;
		genres: string[];
		runtime: string;
		overview: string;
		rating: string;
		imdb_id: number;
	};
}

const UpperPart: FC<Props> = ({ id, coverPoster, poster, info }) => {
	const [showMore, setShowMore] = useState(false);

	const genres = info.genres.map((g) => g).join(", ");

	const convertTime = (time) => {
		const hours = Math.floor(time / 60);
		const minutes = time % 60;

		return `${hours}h ${minutes}m`;
	};

	const handleShowMore = (e) => {
		e.preventDefault();
		setShowMore(!showMore);
	};

	return (
		<div
			className={`flex flex-col gap-3 justify-end p-4 h-[70%] min-h-[25rem] relative bg-gray-500 overflow-hidden`}
		>
			{/* Background */}
			{coverPoster && (
				<img
					src={coverPoster}
					alt="Movie cover poster"
					className="absolute inset-0 w-full h-full blur"
				/>
			)}
			{/* Basic Info */}
			<div className="z-10 flex justify-between">
				<div className="flex gap-4 pr-5 bg-gradient-to-r from-black/70 via-black/30 to-transparent">
					<img
						src={poster}
						alt="Movie Poster"
						className="w-[7rem] h-[10rem]"
					/>
					<div className="self-center ">
						<h2 className="text-2xl font-bold text-white">
							{info.title}
						</h2>
						<p className="text-white">
							{info.date.substring(0, 4) + " "}
							{genres}
						</p>
						<p className="text-white">
							{convertTime(info.runtime)}
						</p>
					</div>
				</div>
				{/* Rating */}
				<a
					href={`https://www.imdb.com/title/${info.imdb_id}`}
					target="_blank"
					className="flex items-center self-center gap-2 p-2 rounded-xl bg-gradient-to-l from-white to-transparent"
				>
					<img
						src="/images/imdb.png"
						alt="imdb logo"
						className="h-[2rem] w-[4rem]"
					/>
					<h2 className="text-3xl font-bold">
						{parseFloat(info.rating).toFixed(1)}
					</h2>
				</a>
			</div>
			{/* Overview */}
			<div className="w-[70%] z-10 self-center">
				<h2 className="text-4xl font-bold text-white">Overview</h2>
				<p
					className={`text-white ${
						showMore
							? "max-h-[7rem] overflow-auto bg-black/30"
							: "max-h-[2rem] overflow-hidden bg-black/10"
					}  noScroll transition-all ease-in-out duration-500 `}
					id="overview"
				>
					{info.overview}
				</p>
				<button
					className="text-gray-500 hover:opacity-70"
					onClick={handleShowMore}
				>
					{showMore ? "Show Less" : "Show More"}
				</button>
			</div>
		</div>
	);
};

export default UpperPart;
