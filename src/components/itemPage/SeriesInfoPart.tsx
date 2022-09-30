import React, { FC } from "react";

interface Props {
	status: string;
	productionCompanies: [
		{
			id: number;
			poster: string;
			name: string;
		}
	];
	originalLanguage: string;
	networks: [
		{
			id: number;
			poster: string;
			name: string;
		}
	];
	numOfEpisodes: number;
	numOfSeasons: number;
	watchProviders:
		| [
				{
					poster: string;
					name: string;
				}
		  ]
		| null;
}

const SeriesInfoPart: FC<Props> = ({
	status,
	productionCompanies,
	originalLanguage,
	networks,
	numOfEpisodes,
	numOfSeasons,
	watchProviders,
}) => {
	return (
		<div className="flex flex-col gap-2 text-white">
			<h2 className="mb-4 text-4xl font-bold">Info</h2>

			<h3 className="text-xl font-bold">
				Status<p className="pl-2 font-normal">{status}</p>
			</h3>
			<h3 className="text-xl font-bold">
				Original Language
				<p className="pl-2 font-normal">{originalLanguage}</p>
			</h3>
			<h3 className="text-xl font-bold">
				Number Of Seasons
				<p className="pl-2 font-normal">{numOfSeasons}</p>
			</h3>
			<h3 className="text-xl font-bold">
				Number Of Episodes
				<p className="pl-2 font-normal">{numOfEpisodes}</p>
			</h3>

			{/* Networks */}
			<h3 className="text-xl font-bold">Networks</h3>
			<div className="flex flex-wrap gap-4 w-full">
				{networks.map((network) => (
					<div
						key={network.id}
						className={`${
							network.poster !== ""
								? "w-[6rem] h-[6rem] rounded-full flex justify-center items-center bg-gradient-to-b from-white/70 to-white/20"
								: "w-[6rem]"
						}`}
					>
						{network.poster !== "" ? (
							<img
								title={network.name}
								src={network.poster}
								alt="network poster"
								className="w-[5rem] h-[3rem]"
							/>
						) : (
							<p className="pt-2">{network.name}</p>
						)}
					</div>
				))}
			</div>
			{/* Watch providers */}
			{watchProviders && (
				<>
					<h3 className="text-xl font-bold">Watch Providers</h3>
					<div className="flex flex-wrap gap-2">
						{watchProviders.map((w) => (
							<div key={w.name}>
								{w.poster !== "" ? (
									<img
										title={w.name}
										src={w.poster}
										alt="watch provider poster"
										className="w-[3rem] h-[3rem] rounded-full"
									/>
								) : (
									<p className="pt-2">{w.name}</p>
								)}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default SeriesInfoPart;
