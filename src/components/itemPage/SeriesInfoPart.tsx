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
}

const SeriesInfoPart: FC<Props> = ({
	status,
	productionCompanies,
	originalLanguage,
	networks,
}) => {
	return (
		<div className="flex flex-col gap-2 text-white">
			<h2 className="mb-4 text-4xl font-bold">Info</h2>

			<div>
				<h3 className="text-xl font-bold">Status</h3>
				<p className="pl-2">{status}</p>
			</div>
			<div>
				<h3 className="text-xl font-bold">Original Language</h3>
				<p className="pl-2">{originalLanguage}</p>
			</div>
			{/* Production Companies */}
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
		</div>
	);
};

export default SeriesInfoPart;
