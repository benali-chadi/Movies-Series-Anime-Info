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
	return (
		<div className="flex gap-2 md:h-[70%] h-[40%] rounded-r-xl shadow-lg bg-my-white shadow-slate-500 w-[90%]">
			<img
				src={poster ? poster : "/images/default_poster.png"}
				alt="Season poster"
				className="min-w-[20%]"
			/>
			<div className="flex flex-col gap-4 justify-center px-2">
				<div>
					<h2 className="text-2xl font-bold lg:text-3xl">{name}</h2>
					<h3 className="text-lg lg:text-xl">
						{airDate.substring(0, 4)} | {epCount} episodes
					</h3>
				</div>
				<p className="overflow-auto text-[13px] lg:text-base text-justify">
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
