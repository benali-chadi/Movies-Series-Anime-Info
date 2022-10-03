import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useGetMovieDetails } from "../../hooks/movieData";
import Spinner from "../Common/Spinner";

interface Props {
	coverPoster: string;
	poster: string;
	crew:
		| [
				{
					id: number;
					name: string;
					job: string[];
				}
		  ]
		| null;
	details: any;
	type: "serie" | "movie" | "anime";
	loading;
	error;
}

const UpperPart: FC<Props> = ({
	coverPoster,
	poster,
	crew,
	details,
	loading,
	error,
	type,
}) => {
	const router = useRouter();
	const { id } = router.query;
	const [showMore, setShowMore] = useState(false);
	const [isCreators, setIsCreators] = useState(false);
	useEffect(() => {
		if (crew && crew.length > 1) {
			setIsCreators(crew[0].job[0] === "creator");
		}
	}, [crew]);

	if (loading) return <Spinner />;
	if (error) return <div>Error in upper part</div>;

	const info = {
		title: details.title,
		date: type === "serie" ? details.firstAirDate : details.date,
		genres: details.genres,
		runtime: details.runtime,
		overview: details.overview,
		rating: details.rating,
		imdb_id: details.imdb_id,
	};
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
		type === "movie" || type === "serie"
			? `https://www.themoviedb.org/${
					type === "serie" ? "tv" : type
			  }/${id}`
			: `https://myanimelist.net/anime/${id}`;

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
			<div className="z-10 grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1fr] gap-2 w-full">
				<div className="flex gap-4 justify-self-start pr-5 max-w-xl bg-black/50">
					{/* Poster */}
					<img
						src={poster ? poster : "/images/default_poster.png"}
						alt="Movie Poster"
						className="w-[10rem] h-full bg-transparent object-contain"
					/>
					{/* Basic Info */}
					<div className="self-center w-full">
						<h2 className="w-full text-2xl font-bold text-white break-words lg:text-3xl">
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
							{crew &&
								crew.map((c) => (
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
												{type === "anime"
													? c.job
													: c.job.join("/")}
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
							rel="noreferrer"
							className={`flex gap-2 items-center p-2 bg-gradient-to-l from-white to-transparent rounded-xl`}
						>
							{type === "movie" || type === "serie" ? (
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
							<h2 className="text-3xl font-bold">
								{parseFloat(info.rating).toFixed(1)}
							</h2>
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
							rel="noreferrer"
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
