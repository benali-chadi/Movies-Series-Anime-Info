import React, { FC } from "react";

interface Props {
	id: number;
	poster: string;
	airDate: string;
	epCount: string;
	name: string;
	number: number;
	overview: string;
}

const LatestSeason: FC<Props> = ({
	id,
	poster,
	airDate,
	epCount,
	name,
	number,
	overview,
}) => {
	const convertTime = (time) => {
		const hours = Math.floor(time / 60);
		const minutes = time % 60;

		return `${hours ? hours + "h" : ""} ${minutes ? minutes + "m" : ""}`;
	};
	return (
		<div className="flex gap-2 w-full h-[70%] rounded-r-xl shadow-lg bg-my-white shadow-slate-500">
			<img
				src={poster ? poster : "/images/default_poster.png"}
				alt="Season poster"
				className="w-[20%]"
			/>
			<div className="flex flex-col gap-4 justify-center">
				<div>
					<h2 className="text-3xl font-bold">{name}</h2>
					<h3 className="text-xl">
						{airDate.substring(0, 4)} | {epCount} episodes
					</h3>
				</div>
				<p>
					{overview !== ""
						? overview
						: `${name} premiered on ${new Date(airDate)
								.toDateString()
								.substring(4)}`}
				</p>
			</div>
		</div>
	);
};

export default LatestSeason;
