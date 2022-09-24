import React, { FC, useState } from "react";

interface Props {
	id: number;
	coverPoster: string;
	poster: string;
	crew: [
		{
			id: number;
			name: string;
			job: string;
		}
	];
	info: {
		title: string;
		date: string;
		genres: string[];
		runtime: string;
		overview: string;
		rating: string;
		imdb_id: number;
	};
	type: "series" | "movies" | "anime";
}

const UpperPart: FC<Props> = ({
	id,
	coverPoster,
	poster,
	crew,
	info,
	type,
}) => {
	const [showMore, setShowMore] = useState(false);

	const genres = info.genres.map((g) => g).join(", ");

	const convertTime = (time) => {
		const hours = Math.floor(time / 60);
		const minutes = time % 60;

		return `${hours ? hours + "h" : ""} ${minutes ? minutes + "m" : ""}`;
	};

	const handleShowMore = (e) => {
		e.preventDefault();
		setShowMore(!showMore);
	};

	const ratingLink =
		type === "movies" || type === "series"
			? `https://www.themoviedb.org/${type.slice(0, -1)}/${id}`
			: `https://myanimelist.net/anime/${id}`;
	const isCreators = crew[0] && crew[0].job === "creator";

	return (
		<div
			className={`flex justify-between items-center p-4 h-[70%] min-h-[25rem] relative bg-gray-500 overflow-hidden`}
		>
			{/* Background */}
			{coverPoster && (
				<img
					src={coverPoster}
					alt="Movie cover poster"
					className="absolute inset-0 w-full h-full blur"
				/>
			)}
			<div className="z-10 grid grid-cols-[1.5fr_2fr_1fr] gap-2 w-full">
				<div className="flex gap-4 justify-self-start pr-5 max-w-xl bg-black/50">
					{/* Poster */}
					<img
						src={poster ? poster : "/images/default_poster.png"}
						alt="Movie Poster"
						className="w-[10rem] h-full bg-white"
					/>
					{/* Basic Info */}
					<div className="self-center w-full">
						<h2 className="w-full text-3xl font-bold text-white break-words">
							{info.title}
						</h2>
						<div>
							<p className="text-white">
								{info.date.toString().length > 4
									? new Date(info.date)
											.toDateString()
											.substring(4) + " "
									: info.date}
							</p>
							<p className="text-gray-300">{genres}</p>
						</div>
						{!!info.runtime && (
							<p className="text-white">
								{convertTime(info.runtime)}
							</p>
						)}
					</div>
				</div>
				<div className="flex flex-col justify-between">
					{/* Overview */}
					<div
						className={`min-w-[20rem] w-full z-10 ${
							showMore ? "bg-black/50" : "bg-black/10"
						}`}
					>
						<h2 className="text-2xl font-bold text-white">
							Overview
						</h2>
						<p
							className={`text-white ${
								showMore
									? "overflow-auto max-h-[7rem]"
									: "overflow-hidden max-h-[1rem]"
							}  noScroll transition-all px-2 ease-in-out duration-500 `}
							id="overview"
						>
							{info.overview}
						</p>
						<button
							className="text-gray-500 hover:text-white/80"
							onClick={handleShowMore}
						>
							{showMore ? "Show Less" : "Show More"}
						</button>
					</div>
					{/* Crew */}
					<div className="p-2 bg-gradient-to-t from-black/60 to-black/10">
						{isCreators && (
							<h1 className="text-2xl font-bold text-white">
								Creators
							</h1>
						)}
						<div className="flex flex-wrap gap-1 justify-between">
							{crew.map((c) => (
								<div
									className="flex-shrink-0 text-white"
									key={c.id}
								>
									<h3
										className={`text-lg ${
											!isCreators && "font-bold"
										}  text-white`}
									>
										{c.name}
									</h3>
									{!isCreators && (
										<p className="text-sm text-white">
											{c.job}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
				{/* Rating */}
				<div className="justify-self-end self-end">
					{!!info.rating && (
						<a
							href={ratingLink}
							target="_blank"
							// onClick={(e) => {
							// 	if (info.imdb_id === -1 || !info.imdb_id)
							// 		e.preventDefault();
							// }}
							className={`flex gap-2 items-center p-2 bg-gradient-to-l from-white to-transparent rounded-xl`}
						>
							<h2 className="text-3xl font-bold">
								{parseFloat(info.rating).toFixed(1)}
							</h2>
							{type === "movies" || type === "series" ? (
								<img
									src="/images/tmdb_logo.svg"
									alt="tmdb logo"
									className="h-[3rem] w-[5rem] bg-[#0d253f] rounded-xl p-1"
								/>
							) : (
								<img
									src="/images/MyAnimeList_Logo.png"
									alt="my anime list logo"
									className="h-[3rem] w-[4rem]"
								/>
							)}
						</a>
					)}
					{info.imdb_id !== -1 && info.imdb_id && (
						<a
							href={
								info.imdb_id && info.imdb_id !== -1
									? `https://www.imdb.com/title/${info.imdb_id}`
									: ""
							}
							target="_blank"
							onClick={(e) => {
								if (info.imdb_id === -1 || !info.imdb_id)
									e.preventDefault();
							}}
						>
							<img
								src="/images/imdb.png"
								alt="imdb logo"
								className="h-[2rem] w-[4rem] mt-2"
							/>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default UpperPart;
